export function convertDateToText(unixTime) {
  const date = new Date(unixTime * 1000);
  const now = new Date()
  const nowTime = Date.parse(now.toString()) / 1000;
  const diffTime = nowTime - unixTime;
  const dateDay = date.getDate();
  const dateMonth = date.getMonth();
  const dateMonthText = date.toString().split(' ')[1];
  const dateYear = date.getFullYear();
  const dateHours = date.getHours();
  const dateMinutes = date.getMinutes();
  const nowDay = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();

  if (diffTime < 60) {
    return 'now'
  } else if (diffTime < 3600) {
    return `${Math.round(diffTime / 60)}min`
  } else if (diffTime < 10800) {
    return `${Math.round(diffTime / 3600)}h`
  } else if (dateDay === nowDay && dateMonth === nowMonth && dateYear === nowYear) {
    return `today in ${dateHours}:${dateMinutes}`
  } else if((nowDay - dateDay) === 1 && dateMonth === nowMonth && dateYear === nowYear) {
    return `yesterday in ${dateHours}:${dateMinutes}`
  } else if (dateYear === nowYear) {
    return `${dateDay} ${dateMonthText} in ${dateHours}:${dateMinutes}`
  } else {
    return `${dateDay} ${dateMonthText} ${dateYear} in ${dateHours}:${dateMinutes}`
  }

}