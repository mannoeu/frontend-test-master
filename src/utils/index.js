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

export const toTimeStampFromDateTime = (timestamp) => {
  var date = new Date(timestamp * 1000);

  const finalMonth = months[date.getMonth()];
  const finalDay = date.getDate();
  const finalFullYear = date.getFullYear();
  const finalHours =
    date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours();
  const finalMinutes =
    date.getMinutes() === 0 ? `0${date.getMinutes()}` : date.getMinutes();

  const datetime = `${finalMonth}-${finalDay}-${finalFullYear} at. ${finalHours}h${finalMinutes}min`;

  return datetime;
};
