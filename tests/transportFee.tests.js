describe('transportFee()',function(){
  it('Should display the transport fee according to the shifts',function(){
    function transportFee(shift){

      if(shift == 'morning'){
        return 'R20';
      }
      else if(shift == 'afternoon'){
        return 'R10';
      }
     else if(shift == 'night'){
       return 'free';
     }
    };
assert.equal(transportFee('morning'),'R20');

assert.equal(transportFee('afternoon'),'R10');

assert.equal(transportFee('night'),'free');


})
})
