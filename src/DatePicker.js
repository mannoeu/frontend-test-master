var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class DatePicker {
  constructor(date) {
    this.date = date;
  }

  toDate(timestamp) {
    let date = new Date(timestamp * 1000);

    const finalMonth = months[date.getMonth()];
    const finalDay =
      date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
    const finalFullYear = date.getFullYear();

    const dateFinal = `${finalMonth} ${finalDay} ${finalFullYear}`;

    return dateFinal;
  }

  toTimeStamp() {
    const finalData = data.split("-");
    const dateFinal = `${months[Number(finalData[1] - 1)]} ${finalData[2]} ${
      finalData[0]
    }`;

    return dateFinal;
  }
}
