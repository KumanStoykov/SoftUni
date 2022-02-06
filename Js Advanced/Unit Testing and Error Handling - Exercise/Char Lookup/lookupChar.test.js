const lookupChar = require('./lookupChar');
const expect = require('chai').expect;
 
describe('Test Char Lookup', () => {
    it('Should when is string', () => {
        let expected = undefined;
        expect(lookupChar(1, 20)).to.equal(expected);
    });
    it('Should when is floating', () => {
        let expected = undefined;
        expect(lookupChar('kak', 20.5)).to.equal(expected);
    });
    it('Should when is floating', () => {
        let expected = undefined;
        expect(lookupChar([1], 20.5)).to.equal(expected);
    });
    it('Should when is string', () => {
        let expected = 'Incorrect index';
        expect(lookupChar('kak', 10)).to.equal(expected);
    });
    it('Should when is string', () => {
        let expected = 'Incorrect index';
        expect(lookupChar('kak', -10)).to.equal(expected);
    });
    it('Should when is incorrect char', () => {
        let expected = 'a';
        expect(lookupChar('kak', 1)).to.equal(expected);
    });
    it('Should when is incorrect char with start index', () => {
        let expected = 'k';
        expect(lookupChar('kak', 0)).to.equal(expected);
    });
    it('Should when is incorrect char with end index', () => {
        let expected = 'k';
        expect(lookupChar('kak', 0)).to.equal(expected);
    });
    it('Should when is incorrect char with big index', () => {
        let expected = 'd';
        expect(lookupChar('kakasdasdasdasdasdas', 11)).to.equal(expected);
    });
    
});