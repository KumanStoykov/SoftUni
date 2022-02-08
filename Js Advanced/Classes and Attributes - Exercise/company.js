class Company {
    constructor() {
        this.departments = {};
    }  

    addEmployee(name, salary, position, department) {
        salary = Number(salary);
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        let employee = { name, salary, position };
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let bestAverage = {dep: '', salaryAvr: 0};
        Object.keys(this.departments).map((key) => {
            let current = Object.entries(this.departments[key]).reduce((a, x, i, num) => {
                return a + (x[1].salary / num.length);
            }, 0);
            if(bestAverage.salaryAvr < current) {
                bestAverage.dep = key;
                bestAverage.salaryAvr = current;
            }           
        });
        let toPrint =  `Best Department is: ${bestAverage.dep}\nAverage salary: ${(bestAverage.salaryAvr).toFixed(2)}\n`;
         Object.entries(this.departments[bestAverage.dep])
        .sort((a, b) => b[1].salary - a[1].salary || a[1].name.localeCompare(b[1].name))
        .map((el, i) => {
            if(i === this.departments[bestAverage.dep].length - 1) {
                toPrint += `${el[1].name} ${el[1].salary} ${el[1].position}`;
                return;
            }
             toPrint += `${el[1].name} ${el[1].salary} ${el[1].position}\n`;
        });
        return toPrint;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
