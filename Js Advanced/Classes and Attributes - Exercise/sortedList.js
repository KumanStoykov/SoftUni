class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }
    add(num) {
        this.arr.push(num);
        this.arr = this.arr.sort((a, b) => a - b);
        this.size = this.arr.length;
    }
    remove(index) {
        if(this.arr.length >= index && index >= 0) {
            this.arr.splice(index, 1);
            this.arr = this.arr.sort((a, b) => a - b);
            this.size = this.arr.length;
        } else {
            throw new Error('error');
        }
    }
    get(index) {
        if(this.arr.length >= index && index >= 0) {
            return this.arr[index];
        } else {
            throw new Error('error');
        }
    }
}
let list = new List();
list.add(8);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
