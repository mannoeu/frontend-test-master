import moment from "moment";
/**
 * Datepicker class for handling dates
 * NOTE: it is necessary to reset the hours, minutes and seconds to avoid conflict between dates
 */
export default class DatePicker {
  formatDateToCompare(date) {
    let finalDate = moment(date * 1000)
      .set("hour", 0)
      .set("minutes", 0)
      .set("seconds", 0);
    return finalDate;
  }
}
