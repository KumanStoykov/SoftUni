package exams._18_08_2021.cafe;

import java.util.ArrayList;
import java.util.List;

public class Cafe {
    private String name;
    private int capacity;
    private List<Employee> employees;

    public Cafe(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        employees = new ArrayList<>();
    }

    public void addEmployee(Employee employee) {
        if (employees.size() + 1 <= capacity) {
            employees.add(employee);
        }
    }

    public boolean removeEmployee(String name) {
        return employees.removeIf(e -> e.getName().equals(name));
    }

    public Employee getOldestEmployee() {
        Employee employee = null;
        int oldest = 0;

        for (Employee e : employees) {
            if(oldest < e.getAge()) {
                employee = e;
                oldest = e.getAge();
            }
        }
        return employee;
    }

    public Employee getEmployee(String name) {
        return employees.stream().filter(e -> e.getName().equals(name))
                .findFirst().orElse(null);
    }

    public int getCount() {
        return employees.size();
    }

    public String report() {
        StringBuilder sb = new StringBuilder();

        sb.append("Employees working at Cafe ").append(name).append(":")
                .append(System.lineSeparator());
        employees.forEach(e -> sb.append(e.toString()).append(System.lineSeparator()));

        return sb.toString();
    }
}
