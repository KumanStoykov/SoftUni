const dealership = require('./dealership');
const expect = require('chai').expect;

describe('Dealership', () => {
    describe('newCarCost', () => {
        it('Should when have in object oldCarModel', () => {
            expect(dealership.newCarCost('Audi A4 B8', 40000)).to.equal(25000);
            expect(dealership.newCarCost('Audi A6 4K', 40000)).to.equal(20000);
            expect(dealership.newCarCost('Audi A8 D5', 40000)).to.equal(15000);
            expect(dealership.newCarCost('Audi TT 8J', 40000)).to.equal(26000);
        });
        it('Should when new Car is not in object', () => {
            expect(dealership.newCarCost('BMW M3', 40000)).to.equal(40000);
        });
        it('Should when is with negative balance', () => {
            expect(dealership.newCarCost('Audi TT 8J', 10000)).to.equal(-4000);
        });
    });
    describe('carEquipment', () => {
        it('Should when have more item', () => {
            let arrExtras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let expected = ['heated seats', 'sport rims', 'navigation'];
            expect(dealership.carEquipment(arrExtras, [0, 2, 3])).to.eql(expected);
        });
        it('Should when ordered all extras', () => {
            let arrExtras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let expected = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            expect(dealership.carEquipment(arrExtras, [0, 1, 2, 3])).to.eql(expected);
        });
        it('Should when not ordered', () => {
            let arrExtras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let expected = [];
            expect(dealership.carEquipment(arrExtras, [])).to.eql(expected);
        });
    });
    describe('euroCategory', () => {
        it('Should when car is category 4 or more', () => {
            
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
        it('Should when car is low then category 4', () => {
            
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });

});