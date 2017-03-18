var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];
function mostProfitableDepartment(profDept){
  var departmentMap={};
  for(var i=0;i<profDept.length;i++){
    var department=profDept[i].department;
    if(departmentMap[department]===undefined){
      departmentMap[department]=0;
    }
    departmentMap[department] = Number(departmentMap[department] + profDept[i].sales);
  }
  console.log(departmentMap);
  var max=0;
  var profitableDept='';

  for(var i=0;i<departmentMap.length;i++){
    console.log(departmentMap[i].sales);
    if(departmentMap[i].sales > max){
      max=departmentMap[i].sales;
      profitableDept=departmentMap[i].department;
    }
  };
  console.log(profitableDept);
  return profitableDept;
}
mostProfitableDepartment('salesData');
