function createSortedList() {
    return {
        list: [],
        size: 0,
        
        add(element) {
           this.list.push(element);
           this.list.sort((a, b) => a - b);
           this.size = this.list.length;
        },
        remove(index) {
            if(index <= this.list.length && index >= 0) {
                this.list.splice(index, 1);
                this.list.sort((a, b) => a - b);
                this.size = this.list.length;          
                
            }
        },
        get(index) {
            if(index <= this.list.length && index >= 0) {
                return  this.list[index];
                
            } 
        },
    }
}

let list = createSortedList();
list.add(8);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));