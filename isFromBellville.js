function isFromBellville(taxi){
  var regNumber=taxi.startsWith('CY');

  return regNumber;

}
isFromBellville('CY 25523');
