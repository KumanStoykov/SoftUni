function employees(input) {

    for (let employee of input) {
        let employeeData = {
            name: employee,
            personalNumber: employee.length,
        };
        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.personalNumber}`)
    }


}

console.log(employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]));