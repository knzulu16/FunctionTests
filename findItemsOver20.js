function findItemsOver20(list){
var array=[];
  for(var i=0;i<list.length;i++){
    if(list[i].qty>20){
     // console.log(list[i]);
      array.push(list[i]);
  }

}
return array;
}
