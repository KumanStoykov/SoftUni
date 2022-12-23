function companyUsers(daten) {

    let listEmployees = {};

    for (let list of daten) {
        let token = list.split(' -> ');
        let company = token[0];
        let employees = token[1];

        if (!listEmployees.hasOwnProperty(company)) {
            listEmployees[company] = [];

        }

        if (!Object.entries(listEmployees).includes(employees)) {
            listEmployees[company] = listEmployees[company].concat(employees);
        }


    }
    // includs of Object values!!!
    let newEmployees = {};

    for (let [key, value] of Object.entries(listEmployees)) {
        newEmployees[key] = [];

        for (let i = 0; i < value.length; i++) {
            let employeesPeopple = value[i];

            if (value.indexOf(employeesPeopple) === i) {

                newEmployees[key] = newEmployees[key].concat(employeesPeopple);
            }
        }


    }

    let sorted = {};

    // sorting objects

    for (let key of Object.keys(newEmployees).sort((a, b) => a.localeCompare(b))) {
        sorted[key] = newEmployees[key];
    }


    for (let [key, value] of Object.entries(sorted)) {
        let elle = value.join('\n-- ')
        console.log(`${key}`);
        console.log(`-- ${elle}`);
    }


}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);