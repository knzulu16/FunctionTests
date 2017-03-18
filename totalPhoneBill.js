function totalPhoneBill(bill){

  var sepCallsAndSms=bill.split(', ');
   var count=0;
  var phoneCallCounter=0;
  var messageCounter=0;

  for(var i=0;i<sepCallsAndSms.length;i++){
   if(sepCallsAndSms[i].startsWith('c')){

    phoneCallCounter++;

  }
    else
      if(sepCallsAndSms[i].startsWith('s')){


      messageCounter++;
    }
  }
  var totalPhoneBill=(0.65*messageCounter)+(2.75*phoneCallCounter);
  return 'R'+totalPhoneBill.toFixed(2);
}
