abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {

        if(new.target === Melon) {
            throw TypeError('Error');
        }
        this.weight = weight;
        this.melonSort = melonSort;
    }

}

class Watermelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    toString(): string {
        let result = `Element: Water \n
                      Sort: ${this.melonSort} \n 
                      Element Index: ${this.weight * this.melonSort.length}`;

        return result;
    }
}
class Firemelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    toString(): string {
        let result = `Element: Fire \n
                      Sort: ${this.melonSort} \n 
                      Element Index: ${this.weight * this.melonSort.length}`;

        return result;
    }
}
class Earthmelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    toString(): string {
        let result = `Element: Earth \n
                      Sort: ${this.melonSort} \n 
                      Element Index: ${this.weight * this.melonSort.length}`;

        return result;
    }
}
class Airmelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    toString(): string {
        let result = `Element: Air \n
                      Sort: ${this.melonSort} \n 
                      Element Index: ${this.weight * this.melonSort.length}`;

        return result;
    }
}

class Melolemonmelon extends Watermelon {
    public element: string[];

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = [`Water`, `Fire`, `Earth`, `Air`];
    }

    morph() {
        let currentElement: string = this.element.shift()!;
        this.element.push(currentElement);
        return this;
    }

    toString(): string {
        let result = `Element: ${this.element[0]} \n
                      Sort: ${this.melonSort} \n 
                      Element Index: ${this.weight * this.melonSort.length}`;

        return result;
    }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());