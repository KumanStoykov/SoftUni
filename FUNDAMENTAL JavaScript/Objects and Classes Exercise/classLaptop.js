function classLaptop() {

    class Laptop {
        isOn = false;
        constructor(info, quality) {
            this.info =  {
                producer: info.producer,
                age: info.age,
                brand: info.brand
            };
            this.quality = Number(quality);
        } 

        turnOn() {
            this.quality--;
            return this.isOn = true;
        }
        turnOff() {
            this.quality--;
          return  this.isOn = false;
        }
        showInfo() {
            return JSON.stringify(this.info);
        }
        get price() {
         return   Number(800 - (this.info.age * 2) + (this.quality * 0.5));
        }

    }

    const Laptop = result;

    let laptop = new Laptop({producer: "Lenovo", age: 1, brand: "Legion"}, 10);
    
    console.log(laptop.turnOn());
    laptop.turnOff()
    laptop.turnOn()
    laptop.turnOff()
    
    expect(laptop.info.producer).to.equal("Lenovo")
    expect(laptop.info.age).to.equal(1)
    expect(laptop.info.brand).to.equal("Legion")
    expect(laptop.isOn).to.equal(false)
    




}


classLaptop();