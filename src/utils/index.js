const formateDate = (unix_timestamp, filter) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const date = new Date(unix_timestamp * 1000);
  if (filter === "HOURS") {
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();

    // Will display time in 10:30:23 format
    return hours + ":" + minutes.substr(-2);
  }

  return weekDays[date.getDay()];
};
export default formateDate;
