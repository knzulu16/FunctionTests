describe('totalPhoneBill()',function(){
  it('Should display the total phone bill',function(){
  assert.equal(totalPhoneBill('call, sms, call, sms, sms'),"R7.45");
  });

});
