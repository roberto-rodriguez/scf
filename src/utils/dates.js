import moment from "moment";

export function format(date, format) {
    date += new Date().getTimezoneOffset() * 60000;
    return moment(date).format(format);
  }

 export function formatWithTimezone(date, format = 'YYYY-MM-DD') {
    date += new Date().getTimezoneOffset() * 60000;
    return moment(date).format(format);
  }
  