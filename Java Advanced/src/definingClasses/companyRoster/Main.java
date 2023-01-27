package definingClasses.companyRoster;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());
        List<Department> departments = new ArrayList<>();

        for (int i = 0; i < rows; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String name = input[0];
            double salary = Double.parseDouble(input[1]);
            String position = input[2];
            String departmentEmployee = input[3];

            Employee employee = null;

            switch (input.length) {
                case 4:
                    employee = new Employee(name, salary, position, departmentEmployee);
                    break;
                case 5:
                    if (input[4].contains("@")) {
                        employee = new Employee(name, salary, position, departmentEmployee, input[4]);
                    } else {
                        employee = new Employee(name, salary, position, departmentEmployee, Integer.parseInt(input[4]));
                    }
                    break;
                case 6:
                    String email = input[4];
                    int age = Integer.parseInt(input[5]);
                    employee = new Employee(name, salary, position, departmentEmployee, email, age);
                    break;
            }
            boolean departmentExist = departments
                    .stream()
                    .anyMatch(d -> d.getDepartmentName().equals(departmentEmployee));

            if (!departmentExist) {
                Department department = new Department(departmentEmployee);
                departments.add(department);
            }

            Department currentDepartment = departments
                    .stream()
                    .filter(d -> d.getDepartmentName().equals(departmentEmployee))
                    .findFirst()
                    .get();

            currentDepartment.getEmployees().add(employee);
        }

        Department highestPaidDepartment = departments
                .stream()
                .max(Comparator.comparingDouble(Department::calculateAvrSalary))
                .get();

        System.out.printf("Highest Average Salary: %s%n", highestPaidDepartment.getDepartmentName());

        highestPaidDepartment.getEmployees()
                .stream()
                .sorted(Comparator.comparing(Employee::getSalary).reversed())
                .forEach(e -> System.out.println(e.toString()));
    }

}
