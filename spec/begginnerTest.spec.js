class Calculator{

    add (a, b){
        return a + b;
    }

    minus(a, b) {
        return a - b;
    }

    description() {
        return 'This is a calculator class';
    }
}

describe('calculate things', function () {

    var calculate = new Calculator();

    beforeAll(function () {
        console.log('Running it only once before ALL of the tests');
    });

    beforeEach(function () {
        console.log('Running it before EVERY of the tests');
    });

    it('should be able to subtract when result is incorrect', function () {
        //console.log(calculate.minus(6, 2));
        //expect is Jasmine way of validating results
        expect(calculate.minus(6, 2)).toBeLessThan(6);
    });

    it('SIMPLE ADDITION | toBe(): should be able to add two positive when parameter is correct', function () {
        //console.log(calculate.add(1, 3));
        //expect is Jasmine way of validating results
        expect(calculate.add(1, 3)).toBe(4);
    });


    it('HANDLING NEGATIVE TEST | .not.toBe(): should be able to handle when result is not correct', function () {
        //console.log(calculate.add(1, 3));
        //expect is Jasmine way of validating results
        expect(calculate.add(2, 3)).not.toBe(4);
    });

    it('HANDLING TEST | multiple conditions in one test | .not.toBe() :should be able to subtract when result is correct', function () {
        //console.log(calculate.minus(6, 2));
        //expect is Jasmine way of validating results
        expect(calculate.minus(6, 2)).toBe(4);
        expect(calculate.minus(6, 2)).not.toBe(3);
    });

     it('HANDLING VALIDATION | .toEqual(): should be able to validate if result is correct', function () {
        //console.log(calculate.minus(6, 2));
        //expect is Jasmine way of validating results
        expect(calculate.minus(6, 2)).toEqual(4);
    });

    it('HANDLING VALIDATION | .toBeGreaterThan()', function () {
        //console.log(calculate.minus(6, 2));
        //expect is Jasmine way of validating results
        expect(calculate.minus(6, 2)).toBeLessThan(6);
    });

    it('HANDLING VALIDATION | .toBeLessThan()', function () {
        //console.log(calculate.minus(6, 2));
        //expect is Jasmine way of validating results
        expect(calculate.add(6, 2)).toBeGreaterThan(6);
    });


    it('HANDLING VALIDATION | .not.toBeLessThan()', function () {
        //console.log(calculate.minus(6, 2));
        //expect is Jasmine way of validating results
        expect(calculate.minus(6, 2)).not.toBeLessThan(4);
        });
    
    it('HANDLING VALIDATION | .not.toBeGreaterThan()', function () {
        //console.log(calculate.minus(6, 2));
        //expect is Jasmine way of validating results
        expect(calculate.add(6, 2)).not.toBeGreaterThan(8);
    });

    //Test araound object instantiation
    it('should be able to declare the calculator class', function () {
        expect(calculate).toBeDefined();
        expect(calculate).not.toBeUndefined();
        expect(calculate).not.toBeNull();
    });

    //Test string matches
    it('Should be able to check description of the class', function () {
        expect(calculate.description()).toMatch('class');
        expect(calculate.description()).toContain('is a calculator');
    });

    afterEach(function () {
        console.log('Running it after EVERY of the tests');
    });

    afterAll(function () {
            console.log('Running it only once after ALL of the tests');
    });

});