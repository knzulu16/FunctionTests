describe('isFromBellville()', function(){

    it('should display correct registration numbers', function(){
        assert.equal(isFromBellville('CY 10111'), true );
    });
    it('should display wrong registration numbers', function(){
        // this test will fail - can you fix it?
        assert.equal(false, isFromBellville('JJ 25523'));
    });
});
