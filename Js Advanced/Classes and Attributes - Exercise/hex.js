class Hex {
    constructor(num) {
        this.num = Number(num);        
    }

    valueOf() {
        return this.num;
    }
    toString() {
      return `0x${this.num.toString(16).toUpperCase()}`;
    }
    plus(number) {
       let result = `0x${(this.num + number.num).toString(16).toUpperCase()}`
       
        return new Hex(result);

    }
    minus(number) {
        let result = `0x${(this.num - number.num).toString(16).toUpperCase()}`
       
        return new Hex(result);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(54000);
let b = new Hex(5);
console.log(a.toString())
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
