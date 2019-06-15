import moment from "moment";
 
export function formatStringDate(
  stringDate,
  resultFormat,
  originFormat = "YYYY-MM-DD"
) {
  var date = moment(stringDate, originFormat).toDate();
  return moment(date).format(resultFormat);
}
