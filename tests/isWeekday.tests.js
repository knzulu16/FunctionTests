describe('isWeekday()', function(){

    it('should display true if it is a week day', function(){
        assert.equal(isWeekday('Monday'),true);
    });
    it('should display false if it is not a week day', function(){
        // this test will fail - can you fix it?
        assert.equal( isWeekday('Sunday'),false);
    });
});
