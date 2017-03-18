function isWeekday(weekDay){
  var isDay=!weekDay.startsWith('S');
  
  return isDay;

}
isWeekday('Monday');
isWeekday('Sunday');
