function yearsAgo(year){
  var today= new Date();
  var currentY=today.getFullYear();
  var calc =currentY-year;
  return calc;
}
console.log(yearsAgo('2013'));
