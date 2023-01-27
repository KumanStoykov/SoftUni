package definingClasses.companyRoster;

import java.util.ArrayList;
import java.util.List;

public class Department {

    private String departmentName;
    private List<Employee> employees;

    public Department(String departmentName) {
        this.departmentName = departmentName;
        employees = new ArrayList<>();
    }

    public double calculateAvrSalary() {
        return this.employees.stream().mapToDouble(Employee::getSalary).average().orElse(0);
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public List<Employee> getEmployees() {
        return employees;
    }
    public void setEmployees(Employee employee) {
        employees.add(employee);
    }
}
