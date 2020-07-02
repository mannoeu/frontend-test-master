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

/**
 *
 * @param {date in timestamp format} timestamp
 * @return a string with full date and time of the event
 */
export const fullDate = (timestamp) => {
  const dayMonthAndYear = converterTimeStampToDate(timestamp);
  let date = new Date(timestamp * 1000);
  const finalHours =
    date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours();
  const finalMinutes =
    date.getMinutes() === 0 ? `0${date.getMinutes()}` : date.getMinutes();

  const dateTime = `${dayMonthAndYear} at. ${finalHours}h${finalMinutes}min`;

  return dateTime;
};

/**
 *
 * @param {date in timestamp format} timestamp
 * @return a string with full date of the event
 */
export const converterTimeStampToDate = (timestamp) => {
  let date = new Date(timestamp * 1000);

  const finalMonth = months[date.getMonth()];
  const finalDay = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
  const finalFullYear = date.getFullYear();

  const finalDate = `${finalMonth} ${finalDay} ${finalFullYear}`;

  return finalDate;
};
