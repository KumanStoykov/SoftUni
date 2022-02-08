const StringBuilder = require('./stringBuilder');
const expect = require('chai').expect;

describe('StringBuilder', () => {
    describe('Constructor', () => {
        it('Should when input is undefined', () => {
            let expected = new StringBuilder()._stringArray;
            expect(new StringBuilder(undefined)._stringArray).to.eql(expected);
        });
        it('Should when input is undefined', () => {
            
            expect(new StringBuilder(undefined).toString()).to.equal('');
        });
        it('Should when input is number', () => {
            expect(()=> new StringBuilder(123)).to.throw('Argument must be a string');
        });
        it('Should when input is array', () => {
            expect(()=> new StringBuilder([])).to.throw('Argument must be a string');
        });
        it('Should when input is object', () => {
            expect(()=> new StringBuilder({})).to.throw('Argument must be a string');
        });
        it('Should when input is null', () => {
            expect(()=> new StringBuilder(null)).to.throw('Argument must be a string');
        });
        it('Should when input is string', () => {
            let expected = new StringBuilder('hallo')._stringArray;
            expect(new StringBuilder('hallo')._stringArray.join('')).to.eql(expected.join(''));
        });
    });
    describe('Function append', () => {
        it('Should when input is number', () =>{
            expect(()=> new StringBuilder('string').append(123)).to.throw('Argument must be a string');
        });
        it('Should when input is array', () =>{
            expect(()=> new StringBuilder('string').append([])).to.throw('Argument must be a string');
        });
        it('Should when input is object', () =>{
            expect(()=> new StringBuilder('string').append({})).to.throw('Argument must be a string');
        });
        it('Should when input is undefined', () =>{
            expect(()=> new StringBuilder('string').append()).to.throw('Argument must be a string');
        });
        it('Should when output not correct', () => {
            let strBuilder = new StringBuilder('hallo');
            strBuilder.append('hi');
            let actual = new StringBuilder('hallo');
            actual.append('hi')
            expect(actual._stringArray).to.eql(strBuilder._stringArray);
        });
        it('Should when output with long end', () => {
            let strBuilder = new StringBuilder('hallo');
            strBuilder.append('hiasdasdasd');
            let actual = new StringBuilder('hallo');
            actual.append('hiasdasdasd')
            expect(actual._stringArray).to.eql(strBuilder._stringArray);
        });
        it('Should when index is not correct', () => {
            let input = '123';
            let input2 = 'wow';
            let expected = 'abc123';
            let expected2 = 'abc123wow';
            let expected3 = 'abc123ww';
            let sb = new StringBuilder('abc');
            sb.append(input);
            expect(sb.toString()).to.equal(expected);
            sb.append(input2);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(7, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });
    describe('Function prepend', () => {
        it('Should when input is number', () =>{
            expect(()=> new StringBuilder('string').prepend(123)).to.throw('Argument must be a string');
        });
        it('Should when input is array', () =>{
            expect(()=> new StringBuilder('string').prepend([])).to.throw('Argument must be a string');
        });
        it('Should when input is object', () =>{
            expect(()=> new StringBuilder('string').prepend({})).to.throw('Argument must be a string');
        });
        it('Should when input is undefined', () =>{
            expect(()=> new StringBuilder('string').prepend()).to.throw('Argument must be a string');
        });
        it('Should when output is not correct', () => {
            let actual = new StringBuilder('hallo');
            actual.prepend('hi')
            expect(actual.toString()).to.equal('hihallo');
        });
        it('Should when output with long end', () => {
            let actual = new StringBuilder('hallo');
            actual.prepend('hiasdasdasd')
            expect(actual.toString()).to.equal('hiasdasdasdhallo');
        });
        it('Should when work with other methods', () => {
            let actual = new StringBuilder('hallo');
            actual.append('hi')
            actual.prepend('hiasdasdasd')
            expect(actual.toString()).to.equal('hiasdasdasdhallohi');
        });
        it('Should when index is not correct', () => {
            let input = '123';
            let input2 = 'wow';
            let expected = '123abc';
            let expected2 = 'wow123abc';
            let expected3 = 'wow123bc';
            let sb = new StringBuilder('abc');
            sb.prepend(input);
            expect(sb.toString()).to.equal(expected);
            sb.prepend(input2);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(6, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });
    describe('Function insertAt', () => {
        it('Should when input is number', () =>{
            expect(()=> new StringBuilder('string').insertAt(123, 1)).to.throw('Argument must be a string');
        });
        it('Should when input is array', () =>{
            expect(()=> new StringBuilder('string').insertAt([], 1)).to.throw('Argument must be a string');
        });
        it('Should when input is object', () =>{
            expect(()=> new StringBuilder('string').insertAt({}, 1)).to.throw('Argument must be a string');
        });
        it('Should when input is undefined', () =>{
            expect(()=> new StringBuilder('string').insertAt(undefined, 1)).to.throw('Argument must be a string');
        });
        it('Should when output is not correct', () => {
            let strBuilder = new StringBuilder('hallo');
            strBuilder.insertAt('hi man', 3);
            let actual = new StringBuilder('hallo');
            actual.insertAt('hi man', 3)
            expect(actual._stringArray).to.eql(strBuilder._stringArray);
        });
        it('Should when output with long end', () => {
            let strBuilder = new StringBuilder('hallo');
            strBuilder.insertAt('hiasdasdasd', 0);
            let actual = new StringBuilder('hallo');
            actual.insertAt('hiasdasdasd', 0)
            expect(actual.toString()).to.equal(strBuilder.toString());
        });
        it('Should when work with other methods', () => {
            let actual = new StringBuilder('hallo');
            actual.append('hi');
            actual.prepend('hia');
            actual.insertAt('cola',3);
            expect(actual.toString()).to.equal('hiacolahallohi');
        });
        it('Should when index is not correct', () => {
            let input = ' fast';
            let input2 = ' are';
            let expected = 'cars fast';
            let expected2 = 'cars are fast';
            let expected3 = 'cars are fat';
            let sb = new StringBuilder('cars');
            sb.insertAt(input, 4);
            expect(sb.toString()).to.equal(expected);
            sb.insertAt(input2, 4);
            expect(sb.toString()).to.equal(expected2);
            sb.remove(11, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });
    describe('Function remove', () => {
        it('Should when output is not correct', () => {
            let strBuilder = new StringBuilder('hallo');
            strBuilder.remove(0, 3);
            let actual = new StringBuilder('hallo');
            actual.remove(0, 3)
            expect(actual.toString()).to.equal(strBuilder.toString());
        });
        it('Should when output is not correct remove whole word', () => {
            let strBuilder = new StringBuilder('hallo');
            strBuilder.remove(0, 5);
            let actual = new StringBuilder('hallo');
            actual.remove(0, 5)
            expect(actual._stringArray).to.eql(strBuilder._stringArray);
        });
        it('Should when output is not correct remove whole word', () => {
            let strBuilder = new StringBuilder('hallo');
            strBuilder.remove(0, 6);
            let actual = new StringBuilder('hallo');
            actual.remove(0, 6)
            expect(actual.toString()).to.equal(strBuilder.toString());
        });
        it('Should when work with other methods', () => {
            let actual = new StringBuilder('hallo');
            actual.append('hi');
            actual.prepend('hia');
            actual.insertAt('cola',3);
            actual.remove(0, 2)
            expect(actual.toString()).to.equal('acolahallohi');
        });
    });
    describe('Function toString', () => {
        it('Should when output is not correct', () => {
            expect(new StringBuilder('Hallo').toString()).to.equal('Hallo');
        });
    });

});