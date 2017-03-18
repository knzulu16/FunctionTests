describe('countRegNumber()', function(){

    it('should display the counted registration numbers', function(){
        assert.equal( countRegNumber('CA 182736'),true);
    });
    it('should count registration numbers', function(){
        // this test will fail - can you fix it?
        assert.equal( countRegNumber('CJ 812328'),true);
    });
});
