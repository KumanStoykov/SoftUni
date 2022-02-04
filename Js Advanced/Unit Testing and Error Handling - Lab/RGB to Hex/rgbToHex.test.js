const rgbToHexColor = require('./rgbToHex');
const expect = require('chai').expect;

describe('Test functional to rgbToHex', () => {
    it('Should when input is not integer numbers', () => {
        let expected = undefined;
        
        expect(rgbToHexColor(12.5, 30, 155)).to.equal(expected);
        expect(rgbToHexColor(12, 30.5, 155)).to.equal(expected);
        expect(rgbToHexColor(12, 30, 155.5)).to.equal(expected);
    });
    it('Should when input number is out of max range', () => {
        let expected = undefined;
        
        expect(rgbToHexColor(256, 255, 255)).to.equal(expected);
        expect(rgbToHexColor(255, 256, 255)).to.equal(expected);
        expect(rgbToHexColor(255, 255, 256)).to.equal(expected);
        
    });
    it('Should when input number is out of min range', () => {
        let expected = undefined;
        
        expect(rgbToHexColor(-1, 255, 255)).to.equal(expected);
        expect(rgbToHexColor(255, -1, 255)).to.equal(expected);
        expect(rgbToHexColor(255, 255, -1)).to.equal(expected);
        
    });
    it('Should when output for max numbers of rgb is not correct', () => {
        let expected = '#FFFFFF';
        
        expect(rgbToHexColor(255, 255, 255)).to.equal(expected);      
        
    });
    it('Should when output for min numbers of rgb is not correct', () => {
        let expected = '#000000';
        
        expect(rgbToHexColor(0, 0, 0)).to.equal(expected);      
        
    });
    
        
    
});