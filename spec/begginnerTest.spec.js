class Calculator{

    add (a, b){
        return a + b;
    }

    minus(a, b) {
        return a - b;
    }
}

describe('calculate things', function () {

    var calculate = new Calculator();

    it('should be able to add numbers', function () {
        console.log(calculate.add(1, 3));
        //expect is Jasmine way of validating results
        expect(calculate.add(1, 3)).toBe(4);
    });

    it('should be able to subtract', function () {
        console.log(calculate.minus(6, 2));
        //expect is Jasmine way of validating results
        expect(calculate.minus(6, 2)).toBe(4);
    });

})