describe('regCheck()', function(){

    it('should display registration numbers', function(){
        assert.equal(regCheck(' GP'), false );
    });
    it('should display registration numbers', function(){
        // this test will fail - can you fix it?
        assert.equal(false, regCheck('GP'));
    });
});
