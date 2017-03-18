describe('findItemsOver20()',function(){
  it('Should return all the products that have quantity higher than 20.',function(){
    assert.deepEqual([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}],
                               findItemsOver20([{name : 'apples', qty : 10},
                              {name : 'pears', qty : 37},
                               {name : 'bananas', qty : 27},
                                {name : 'apples', qty : 3}]));


});
});
