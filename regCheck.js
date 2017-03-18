function regCheck(regNumber,location){
  var isGP=regNumber.endsWith(location);
  return isGP;
}
regCheck('1234788 GP','GP');
regCheck('CY189-012','ND');
regCheck('DV 23 LP GP','MP');
