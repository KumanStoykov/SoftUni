const mathEnforcer = require('./mathEnforcer');
const expect = require('chai').expect;

describe('mathEnforce', () => {
    describe('addFive', () => {
        it('Should return correct result with a non-number parameter', () => {
            let expected = undefined;
            expect(mathEnforcer.addFive('a')).to.equal(expected);
            expect(mathEnforcer.addFive(true)).to.equal(expected);
            expect(mathEnforcer.addFive(false)).to.equal(expected);
            expect(mathEnforcer.addFive({})).to.equal(expected);
            expect(mathEnforcer.addFive([])).to.equal(expected);
        });
        it('Should return correct result when add', () => {
            let expected = 7;
            expect(mathEnforcer.addFive(2)).to.equal(expected);
        });
        it('Should return correct result when add negative number', () => {
            let expected = -5;
            expect(mathEnforcer.addFive(-10)).to.equal(expected);
        });
        it('Should return correct result when add floating-point number', () => {
            let expected = 7.3;
            expect(mathEnforcer.addFive(2.3)).to.equal(expected);
        });
        it('Should return correct result when add floating-point number wit closeTo', () => {
            expect(mathEnforcer.addFive(2.3)).to.be.closeTo(8, 1);
        });

    });
    describe('subtractTen', () => {
        it('Should return correct result with a non-number parameter', () => {
            let expected = undefined;
            expect(mathEnforcer.subtractTen('a')).to.equal(expected);
            expect(mathEnforcer.subtractTen(true)).to.equal(expected);
            expect(mathEnforcer.subtractTen(false)).to.equal(expected);
            expect(mathEnforcer.subtractTen([])).to.equal(expected);
            expect(mathEnforcer.subtractTen({})).to.equal(expected);
        });
        it('Should return correct result when subtract', () => {
            let expected = 7;
            expect(mathEnforcer.subtractTen(17)).to.equal(expected);
        });
        it('Should return correct result when subtract negative number', () => {
            let expected = -15;
            expect(mathEnforcer.subtractTen(-5)).to.equal(expected);
        });
        it('Should return correct result when add floating-point number', () => {
            let expected = 5.199999999999999;
            expect(mathEnforcer.subtractTen(15.2)).to.equal(expected);
        });
    });
    describe('sum', () => {
        it('Should return correct result with a non-number parameter', () => {
            let expected = undefined;
            expect(mathEnforcer.sum('a', 'b')).to.equal(expected);
            expect(mathEnforcer.sum('a', 1)).to.equal(expected);
            expect(mathEnforcer.sum(1, [])).to.equal(expected);
            expect(mathEnforcer.sum({}, 'b')).to.equal(expected);
            expect(mathEnforcer.sum(true, false)).to.equal(expected);
        });
        it('Should return correct result', () => {
            let expected = 14;
            expect(mathEnforcer.sum(7, 7)).to.equal(expected);
        });
        it('Should return correct result is negative', () => {
            let expected = -14;
            expect(mathEnforcer.sum(-7, -7)).to.equal(expected);
        });
        it('Should return correct result when add floating-point number', () => {
            let expected = 0.03;
            expect(mathEnforcer.sum(0.02, 0.01)).to.equal(expected);
        });
    });
});