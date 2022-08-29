var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Client"] = 1] = "Client";
})(UserRole || (UserRole = {}));
var Person = /** @class */ (function () {
    function Person(name, age, 
    // Privet for inheritance
    gender, 
    //Enum
    role) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.role = role;
    }
    //Void is for functions where no return result
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setData = function (newData) {
        this.age = newData.newAge;
        this.name = newData.newName;
        this.gender = newData.newGender;
    };
    return Person;
}());
var ivan = new Person('Ivan', 30, 'Man', UserRole.Admin);
var newData = { newAge: 21, newName: 'George', newGender: 'Man' };
ivan.setData(newData);
//Generics and Enumerations
function identity(arg) {
    return arg;
}
var value = 1;
var test = identity(value);
var str = 'str';
var testTwo = identity(str);
var testThree = UserRole.Client;
console.log(ivan)
if (testThree === ivan.role) {
    console.log(ivan);
}
