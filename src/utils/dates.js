import moment from "moment";
 
export function formatStringDate(
  stringDate,
  resultFormat = "MMM, YYYY",
  originFormat = "YYYY-MM-DD"
) {
  var date = moment(stringDate, originFormat).toDate();
  return moment(date).format(resultFormat);
}
