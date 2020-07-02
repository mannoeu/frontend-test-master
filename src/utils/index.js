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

export const fullData = (timestamp) => {
  const dayMonthAndYear = converterTimeStampToData(timestamp);
  let date = new Date(timestamp * 1000);
  const finalHours =
    date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours();
  const finalMinutes =
    date.getMinutes() === 0 ? `0${date.getMinutes()}` : date.getMinutes();

  const datetime = `${dayMonthAndYear} at. ${finalHours}h${finalMinutes}min`;

  return datetime;
};

export const converterTimeStampToData = (timestamp) => {
  let date = new Date(timestamp * 1000);

  const finalMonth = months[date.getMonth()];
  const finalDay = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
  const finalFullYear = date.getFullYear();

  const dateFinal = `${finalMonth} ${finalDay} ${finalFullYear}`;

  return dateFinal;
};
