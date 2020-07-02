import moment from "moment";

export default class DatePicker {
  constructor()
  
  formatDateToCompare(date) {
    let finalDate = moment(date * 1000)
      .set("hour", 0)
      .set("minutes", 0)
      .set("seconds", 0);

    return finalDate;
  }
}
