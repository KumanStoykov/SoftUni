const PaymentPackage = require('./class');
const expect = require('chai').expect;

describe('PaymentPackage', () => {
    describe('Property Name', () => {
        it('Should when input name is number', () => {
            expect(() => new PaymentPackage(12, 12312)).to.throw('Name must be a non-empty string');
        });
        it('Should when input name is array', () => {
            expect(() => new PaymentPackage([], 12312)).to.throw('Name must be a non-empty string');
        });
        it('Should when input name is object', () => {
            expect(() => new PaymentPackage({}, 12312)).to.throw('Name must be a non-empty string');
        });
        it('Should when input name is empty string', () => {
            expect(() => new PaymentPackage('', 12312)).to.throw('Name must be a non-empty string');
        });
        it('Should when input name is undefined', () => {
            expect(() => new PaymentPackage(undefined, 12312)).to.throw('Name must be a non-empty string');
        });
        it('Should when input name is not correct', () => {
            let pay = new PaymentPackage('Hallo', 12312);
            expect(pay.name).to.equal('Hallo');
        });
    });
    describe('Property value', () => {
        it('Should when input is string', () => {
            expect(() => new PaymentPackage('Hallo', 'Man')).to.throw('Value must be a non-negative number');
        });
        it('Should when input is array', () => {
            expect(() => new PaymentPackage('Hallo', [])).to.throw('Value must be a non-negative number');
        });
        it('Should when input is object', () => {
            expect(() => new PaymentPackage('Hallo', {})).to.throw('Value must be a non-negative number');
        });
        it('Should when input is undefined', () => {
            expect(() => new PaymentPackage('Hallo', undefined)).to.throw('Value must be a non-negative number');
        });
        it('Should when input is not correct', () => {
            expect(new PaymentPackage('Hallo', 12314).value).to.equal(12314);
        });
        it('Should when input is negative number', () => {
            expect(() => new PaymentPackage('Hallo', -1234)).to.throw('Value must be a non-negative number');
        });
        it('Should when input is not correct by change', () => {
            let pay = new PaymentPackage('Hallo', 12314);
            pay.value = 123;
            expect(pay.value).to.equal(123);
        });
    });
    describe('Property VAT', () => {
        it('Should when input is string', () => {
            let pay = new PaymentPackage('Hallo', 1234);
            expect(() => pay.VAT = 'da').to.throw('VAT must be a non-negative number');
        });
        it('Should when input is array', () => {
            let pay = new PaymentPackage('Hallo', 1234);
            expect(() => pay.VAT = []).to.throw('VAT must be a non-negative number');
        });
        it('Should when input is object', () => {
            let pay = new PaymentPackage('Hallo', 1234);
            expect(() => pay.VAT = {}).to.throw('VAT must be a non-negative number');
        });
        it('Should when input is negative number', () => {
            let pay = new PaymentPackage('Hallo', 1234);
            expect(() => pay.VAT = -123).to.throw('VAT must be a non-negative number');
        });
        it('Should when change num of VAT', () => {
            let pay = new PaymentPackage('Hallo', 1234);
            pay.VAT = 30
            expect(pay.VAT).to.equal(30);
        });
        it('Test with 0', () => {
            let pay = new PaymentPackage('Hallo', 1234);
            pay.VAT = 0;
            expect(pay.VAT).to.equal(0);
        });
        it('Should when default value is not correct', () => {
            let pay = new PaymentPackage('Hallo', 1234);            
            expect(pay.VAT).to.equal(20);
        });
    });
    describe('Property active', () => {
        it('Should when is input null', () => {
            let pay = new PaymentPackage('Hallo', 123);
            expect(() => pay.active = null).to.throw('Active status must be a boolean');
        });
        it('Should when is input string', () => {
            let pay = new PaymentPackage('Hallo', 123);
            expect(() => pay.active = 'adsd').to.throw('Active status must be a boolean');
        });
        it('Should when is input object', () => {
            let pay = new PaymentPackage('Hallo', 123);
            expect(() => pay.active = {}).to.throw('Active status must be a boolean');
        });
        it('Should when is input array', () => {
            let pay = new PaymentPackage('Hallo', 123);
            expect(() => pay.active = []).to.throw('Active status must be a boolean');
        });
        it('Should when is input number', () => {
            let pay = new PaymentPackage('Hallo', 123);
            expect(() => pay.active = 123).to.throw('Active status must be a boolean');
        });
        it('Should when  input  is negative number', () => {
            let pay = new PaymentPackage('Hallo', 123);
            expect(() => pay.active = -123).to.throw('Active status must be a boolean');
        });
        it('Should when is empty string', () => {
            let pay = new PaymentPackage('Hallo', 123);
            expect(() => pay.active = '').to.throw('Active status must be a boolean');
        });
        it('Should when get not work', () => {
            let pay = new PaymentPackage('Hallo', 123);
            expect(pay.active).to.equal(true);
        });
        it('Should when property not set', () => {
            let pay = new PaymentPackage('Hallo', 123);
            pay.active = false
            expect(pay.active).to.equal(false);
        });
        it('Should when default value is not correct', () => {
            let pay = new PaymentPackage('Hallo', 1234);            
            expect(pay.active).to.equal(true);
        });
    });
    describe('Function toString', () => {
        it('Should when output is active', () => {
            let pay = new PaymentPackage('Hp Omen', 123);
            let expected = ['Package: Hp Omen',
            '- Value (excl. VAT): 123',
            '- Value (VAT 20%): 147.6'];
            expect(pay.toString()).to.equal(expected.join('\n'));
        });
        it('Should when output is not active', () => {
            let pay = new PaymentPackage('Hp Omen', 123);
            pay.active = false;
            let expected = ['Package: Hp Omen (inactive)',
            '- Value (excl. VAT): 123',
            '- Value (VAT 20%): 147.6'];
            expect(pay.toString()).to.equal(expected.join('\n'));
        });
        it('Should when output is zero', () => {
            let pay = new PaymentPackage('Hp Omen', 0);
            pay.VAT = 0;
            let expected = ['Package: Hp Omen',
            '- Value (excl. VAT): 0',
            '- Value (VAT 0%): 0'];
            expect(pay.toString()).to.equal(expected.join('\n'));
        });
    });

});