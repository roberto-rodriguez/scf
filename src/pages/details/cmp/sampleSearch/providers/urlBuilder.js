import * as dates from "../../../../../utils/dates";

var builders = {
  google: function(
    originCode,
    cityCode,
    formattedDepartureDate,
    formattedArrivalDate
  ) {
    originCode = getCode(originCode, 1);
    cityCode = getCode(cityCode, 1);

    return `https://www.google.com/flights#flt=${originCode}.${cityCode}.${formattedDepartureDate}*${cityCode}.${originCode}.${formattedArrivalDate};c:USD;e:1;sd:1;t:f`;
  },
  kayak: function(
    originCode,
    cityCode,
    formattedDepartureDate,
    formattedArrivalDate
  ) {
    originCode = getCode(originCode, 0);
    cityCode = getCode(cityCode, 0);

    return `https://kayak.com/flights/${originCode}-${cityCode}/${formattedDepartureDate}/${formattedArrivalDate}?sort=price_a`;
  },
  momondo: function(
    originCode,
    cityCode,
    formattedDepartureDate,
    formattedArrivalDate
  ) {
    originCode = getCode(originCode, 0);
    cityCode = getCode(cityCode, 0);

    return `https://www.momondo.com/flight-search/${originCode}-${cityCode}/${formattedDepartureDate}/${formattedArrivalDate}?sort=price_a`;
  },
  sky: function(
    originCode,
    cityCode,
    formattedDepartureDate,
    formattedArrivalDate,
    departureDate,
    arrivalDate,
    skyLink
  ) {
    if (skyLink) {
      return skyLink;
    }
    originCode = getCode(originCode, 2);
    cityCode = getCode(cityCode, 2);

    formattedDepartureDate = dates.formatWithTimezone(departureDate, "YYMMDD");
    formattedArrivalDate == dates.formatWithTimezone(arrivalDate, "YYMMDD");

    return `https://www.skyscanner.com/transport/flights/${originCode}/${cityCode}/${formattedDepartureDate}/${formattedArrivalDate}`;
  }
};

export function buildUrl(provider, sampleSearch) {
  var {
    originCode,
    cityCode, 
    departureDate,
    arrivalDate,
    skyLink,
    kiwiLink
  } = sampleSearch;

  var formattedDepartureDate = dates.formatWithTimezone(departureDate);
  var formattedArrivalDate = dates.formatWithTimezone(arrivalDate);

  if (provider == "kiwi") {
    return kiwiLink;
  }

  if (provider === "all") {
    return Object.values(builders).map(func =>
      func(
        originCode,
        cityCode,
        formattedDepartureDate,
        formattedArrivalDate,
        departureDate,
        arrivalDate,
        skyLink
      )
    );
  } else {
    var builder = provider && builders[provider];
    return (
      builder &&
      builder(
        originCode,
        cityCode,
        formattedDepartureDate,
        formattedArrivalDate,
        departureDate,
        arrivalDate,
        skyLink
      )
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
