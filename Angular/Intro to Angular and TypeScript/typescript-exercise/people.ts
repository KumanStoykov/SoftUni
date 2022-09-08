abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask: string = this.tasks.shift()!;
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public collection(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a simple task.');

    }

}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers');
    }

}

class Manager extends Employee {
    public dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly meeting.');
    }

    public getSalary(): number {
        return this.salary + this.dividend;
    }
}

const junior = new Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collection();  
 
const senior = new Senior('Alex', 31); 
 
senior.work();  
senior.work();  
senior.work();  
senior.work();  
 
senior.salary = 12050; 
senior.collection();  
 
const manager = new Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collection();  
manager.dividend = 2500; 
manager.collection();  
