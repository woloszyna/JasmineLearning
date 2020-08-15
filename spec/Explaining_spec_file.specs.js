//Describe block is used to contain multiple tests
describe('pass a string that will be simple, understandablke and defines a testing functionality', function () {
//Describe block takes two params. One: name (String), Two: function (serves to allow certain actions)
    
    //it block is used to write a test. There can be multiple 'it' blocks in theone 'describe' block
    it('name of the actual test', function () {
    //it contains two elements, ONE: a String, name of our test
    });

    //You can also have other 'describe' blocks within the main 'describe' block
    describe('some other test', function () { 
        it('should be able to do something', function () {
            console.log('It has done something');
        })
    })


});