const sum = require('./sum');
const expect = require('chai').expect;

describe('Sub Of numbers', () => {
    it('Should input', () => {
        let expected = 6;
        let input = [1, 2, 3];

        let actual = sum(input);
        expect(expected).to.equal(actual);
    });
    it('Should array is NaN', () => {
        let expected = NaN;
        let input = [1, "s", 3];

        let actual = sum(input);
        expect(expected).to.NaN;

    });
    it('Should bei negative number', () => {
        let expected = -6;
        let input = [-1, -2, -3];

        let actual = sum(input);
        expect(expected).to.equal(actual);
    });
    it('Should lear empty', () => {
        let expected = 0;
        let input = [];

        let actual = sum(input);
        expect(expected).to.equal(actual);
    });
});