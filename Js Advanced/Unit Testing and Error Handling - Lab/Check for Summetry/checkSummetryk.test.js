const isSymmetric = require('./checkSymmetry');
const expect =  require('chai').expect;

describe('Test for check symmetry', () => {
    it('Should when is string', () => {
        let expected = false;
        let input = '1';

        let actual = isSymmetric(input);
        expect(expected).to.equal(actual);

    });
    it('Should when is boolean', () => {
        let expected = false;
        let input = true;

        let actual = isSymmetric(input);
        expect(expected).to.equal(actual);

    });
    it('Should when is number', () => {
        let expected = false;
        let input = 5;

        let actual = isSymmetric(input);
        expect(expected).to.equal(actual);

    });
    it('Should when is object', () => {
        let expected = false;
        let input = {name: 'Peter'};

        let actual = isSymmetric(input);
        expect(expected).to.equal(actual);

    });
    it('Should when is not array ', () => {
        let expected = true;
        let input = [1];

        let actual = isSymmetric(input);
        expect(expected).to.equal(actual);

    });
    
    it('Should when array is not symmetry', () => {
        let expected = true;
        let input = [1, 2, 1];

        let actual = isSymmetric(input);
        expect(expected).to.equal(actual);

    });
    it('Should when is not equal ', () => {
        let expected = false;
        let input = [1, 2, 3, 4, 5];

        let actual = isSymmetric(input);
        expect(expected).to.equal(actual);

    });
    it('Should when is empty array', () => {
        let expected = true;
        let input = [];

        let actual = isSymmetric(input);
        expect(actual).to.equal(expected);

    });
    it('Should when is empty array', () => {
        let expected = false;
        let input = [1, '1'];

        let actual = isSymmetric(input);
        expect(actual).to.equal(expected);

    });
    
});