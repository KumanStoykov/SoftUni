//Same wie interface
type UserData = {
    newName: string;
    newAge: number;
}

enum UserRole {
    Admin,
    Client
}

interface IUserNewData {
    newName: string;
    newAge: number;
    newGender: string;
}

class Person {
    constructor(
        public name: string,
        private age: number,
        // Privet for inheritance
        protected gender: string,
        //Enum
        public role: UserRole
    ) { }
    //Void is for functions where no return result
    getAge(): number {
        return this.age;
    }

    setData(newData: IUserNewData) {
        this.age = newData.newAge;
        this.name = newData.newName;
        this.gender = newData.newGender;

    }
}

const ivan = new Person('Ivan', 30, 'Man', UserRole.Admin);

const newData: IUserNewData = { newAge: 21, newName: 'George', newGender: 'Man' };
ivan.setData(newData);

//Generics and Enumerations

function identity<T>(arg: T): T {
    return arg;
}
const value = 1;
const test = identity(value);

let str = 'str';
const testTwo = identity(str);

const testThree = UserRole.Client;

if(testThree === ivan.role) {
    console.log(ivan)
}