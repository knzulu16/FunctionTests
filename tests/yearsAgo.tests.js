describe('yearsAgo()', function(){

    it('should display the number of years ago', function(){
        assert.equal(yearsAgo('2013'),4);
    });
    it('should count number of years ago', function(){
        // this test will fail - can you fix it?
        assert.equal(yearsAgo('2013'),4);
    });
});
