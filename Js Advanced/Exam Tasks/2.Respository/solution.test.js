const Repository = require('./solution');
const expect = require('chai').expect;

describe('Repository', function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
   let entity = {
        name: 'Gosho',
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    let anotherEntity = {
        name: 'Stamat',
        age: 29,
        birthday: new Date(1991, 0, 21)
    };
    describe('Constructor', function () {
       
        it('Test property input', function () {
            const setProps = new Repository(properties);
            expect(setProps.props).to.eql({
                name: "string",
                age: "number",
                birthday: "object"
            });            
        });
        it('Should when id increase with 1', function () {
            const setProps = new Repository(properties);
            setProps.add(entity);
            expect(setProps.nextId()).to.equal(1);            
        });
        it('Should when call id', function () {
            const setProps = new Repository(properties);
            expect(setProps.nextId()).to.equal(0);            
        });
        it('Test map size with one element', function () {
            const setProps = new Repository(properties);
            setProps.add(entity);
            expect(setProps.data.size).to.equal(1);            
        });
        it('Test map size with one element', function () {
            const setProps = new Repository(properties);
            setProps.add(entity);
            expect(setProps.data.size).to.equal(1);            
        });
    });
    describe('get Count', () => {
        it('Should when count is not correct', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            expect(setProps.count).to.equal(1);   
        });
        it('Should when count is zero', () => {
            const setProps = new Repository(properties);
            expect(setProps.count).to.equal(0);   
        });
    });
    describe('Add', () => {
        it('Should when entity is correct', () => {
            const setProps = new Repository(properties);
            expect(setProps.add(entity)).to.equal(0); 
        });
        it('Should when throw Error', () => {
            const setProps = new Repository(properties);
            expect(() => setProps.add({
                name: 'Pesho',
                age: 29,
                birthday1: new Date(1991, 0, 21)
            })).to.throw(Error, `Property birthday is missing from the entity!`); 
        });
        it('Should when throw TypeError', () => {
            const setProps = new Repository(properties);
            expect(() => setProps.add({
                name: 29,
                age: 29,
                birthday: new Date(1991, 0, 21)
            })).to.throw(TypeError, `Property name is not of correct type!`); 
        });
    });
    describe('Get Id', () => {
        it('Should when id is not in Object', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            expect(() => setProps.getId(2)).to.throw(Error, `Entity with id: ${2} does not exist!`); 
        });
        it('Should when id is not in Object', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            expect(setProps.getId(0)).to.eql({
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }); 
        });
    });
    describe('Update', () => {
        it('Should when id is not in Object', () => {
            const setProps = new Repository(properties);
            expect(() => setProps.update(1,entity)).to.throw(Error,`Entity with id: ${1} does not exist!`); 
        });
        it('Should when entity in Object is update', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            setProps.add(entity);
            let id = 1;
            setProps.update(id, anotherEntity);
            expect(setProps.getId(id)).to.eql({
                name: 'Stamat',
                age: 29,
                birthday: new Date(1991, 0, 21)
            });              
        });
        it('Should when date is not correct', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            setProps.add(entity);
            let id = 1;
            setProps.update(id, {
                name: 'Stamat',
                age: 29,
                birthday: new Date(1991, 0, 21)
            });
            expect(() => setProps._validate( {
                name: 'Stamat',
                age1: 29,
                birthday: new Date(1991, 0, 21)
            })).to.throw(Error, `Property age is missing from the entity!`);  
        });
        it('Should when id is not in Object', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            setProps.add(entity);
            setProps.add(entity);
            let notCorrectEntity = {
                name: 'Gosho',
                age1: 22,
                birthday: new Date(1998, 0, 7)
            }
            
            expect(() => setProps.update(1,notCorrectEntity)).to.throw(Error,`Property age is missing from the entity!`); 
        });
        
    });
    describe('Del', () => {
        it('Should when id is not in Object', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            expect(() => setProps.getId(1)).to.throw(Error, `Entity with id: ${1} does not exist!`); 
        });
        it('Should throw error when deleting already deleted entity', () => {
            let repo = new Repository(properties);

            repo.add(entity);
            repo.del(0);

            expect(() => repo.del(0)).to.throw(Error, `Entity with id: 0 does not exist!`);
        });
        it('Should when id is not in Object', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            setProps.add(entity);
            setProps.add(entity);
            setProps.add(entity);
            setProps.add(entity);
            setProps.del(0);
            setProps.del(4);
            expect(setProps.count).to.equal(3); 
        });
    });
    describe('Validate', () => {
        it('Should when type is not correct', () => {
            const setProps = new Repository(properties);
            setProps.add(entity);
            setProps.add(entity);
            
            expect(() => setProps._validate( {
                name: 29,
                age: 29,
                birthday: new Date(1991, 0, 21)
            })).to.throw(TypeError, `Property name is not of correct type!`);  
        });
    });
    
});
