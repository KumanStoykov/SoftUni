function createComputerHierarchy() {

    class Component{
        constructor(manufacturer) {
            if(this.constructor === Component){
                throw new Error("Cannot make instance of abstract class.");
            }
            this.manufacturer = manufacturer;            
        }
    }
    class Keyboard  extends Component{
        constructor(manufacturer, responseTime ) {
            super(manufacturer)
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Component{
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Component{
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Component{
        constructor(manufacturer, processorSpeed , ram, hardDiskSpace ) {
            super(manufacturer);
            if (this.constructor === Computer) {
                throw new Error("Cannot make instance of abstract class.");
            }
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError('Value is not instance of Battery');
            }
            this._battery = value
        }

    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError('Value is not istance of Keyboard');
            }
            this._keyboard = value;
        }
        get monitor() {
            return this._monitor;
        }
        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError('Value is not istance of Monitor');
            }
            this._monitor = value;
        }

    }

    return {
        Component,
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop,
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);

