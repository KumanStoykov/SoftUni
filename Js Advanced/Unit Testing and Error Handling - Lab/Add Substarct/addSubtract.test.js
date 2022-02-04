const createCalculator = require('./addSubtract');
const expect = require('chai').expect;

describe('Test functional of createCalculator', () => {
    let calc = null;
    
    beforeEach(() =>{
        calc = createCalculator();
    });
    it('Should when is one number', () => {
        calc.add(5);
        expect(calc.get()).to.equal(5);
    });
    it('Should when is subtract', () => {
        calc.add(5);
        calc.subtract(2)
        expect(calc.get()).to.equal(3);
    });
    it('Should when is string', () => {
        calc.add('10');
        calc.add('1');
        expect(calc.get()).to.equal(11);
    });
    // Test for trow
    expect(() => calc.get()).to.throw();
    
});