describe('greet()', function(){

    it('should greet Andre correctly', function(){
        assert.equal(greet('Andre'),'Hello, Andre');
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});
