import * as dates from "../../../../../utils/dates";

var builders = {
  google: function(originCode, cityCode, departureDateStr, arrivalDateStr) {
    originCode = getCode(originCode, 1);
    cityCode = getCode(cityCode, 1);

    return `https://www.google.com/flights#flt=${originCode}.${cityCode}.${departureDateStr}*${cityCode}.${originCode}.${arrivalDateStr};c:USD;e:1;sd:1;t:f`;
  },
  kayak: function(originCode, cityCode, departureDateStr, arrivalDateStr) {
    originCode = getCode(originCode, 0);
    cityCode = getCode(cityCode, 0);

    return `https://kayak.com/flights/${originCode}-${cityCode}/${departureDateStr}/${arrivalDateStr}?sort=price_a`;
  },
  momondo: function(originCode, cityCode, departureDateStr, arrivalDateStr) {
    originCode = getCode(originCode, 0);
    cityCode = getCode(cityCode, 0);

    return `https://www.momondo.com/flight-search/${originCode}-${cityCode}/${departureDateStr}/${arrivalDateStr}?sort=price_a`;
  },
  sky: function(
    originCode,
    cityCode,
    departureDateStr,
    arrivalDateStr,
    skyLink
  ) {
    if (skyLink) {
      return skyLink;
    }
    originCode = getCode(originCode, 2);
    cityCode = getCode(cityCode, 2);

    var formattedDepartureDate = dates.formatStringDate(departureDateStr, "YYMMDD");
    var formattedArrivalDate = dates.formatStringDate(arrivalDateStr, "YYMMDD");

    return `https://www.skyscanner.com/transport/flights/${originCode}/${cityCode}/${formattedDepartureDate}/${formattedArrivalDate}`;
  }
};

export function buildUrl(provider, sampleSearch) {
  var {
    originCode,
    cityCode, 
    departureDateStr,
    arrivalDateStr,
    skyLink,
    kiwiLink
  } = sampleSearch;
 
  if (provider == "kiwi") {
    return kiwiLink;
  }

  if (provider === "all") {
    return Object.values(builders).map(func =>
      func(originCode, cityCode, departureDateStr, arrivalDateStr, skyLink)
    );
  } else {
    var builder = provider && builders[provider];
    return (
      builder &&
      builder(originCode, cityCode, departureDateStr, arrivalDateStr, skyLink)
    );
  }
}

function getCode(code, index) {
  if (code && code.indexOf("@") > 0) {
    var parts = code.split("@");

    if (index == 1) {
      return "/m/" + parts[1];
    } else {
      return parts[index];
    }
  }
  return code;
}
