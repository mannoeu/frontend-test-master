import moment from "moment";

export default class DatePicker {
  constructor(date) {
    this.date = date;
  }

  formatDateToCompare(data) {
    let finalData = moment(data * 1000)
      .set("hour", 0)
      .set("minutes", 0)
      .set("seconds", 0);

    return finalData;
  }
}
