const isOddOrEven = require('./evenOrOdd');
const expect = require('chai').expect;

describe('Test  isOddOrEven', () => {

    it('Should when is undefined', () => {
        let expected = undefined;
        expect(isOddOrEven(123)).to.equal(expected);
    });
    it('Should when is even', () => {
        let expected = 'even';
        expect(isOddOrEven('Oksana')).to.equal(expected);
    });
    it('Should when is odd', () => {
        let expected = 'odd';
        expect(isOddOrEven('car')).to.equal(expected);
    });
});