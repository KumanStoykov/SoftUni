package exams._16_12_2020.bakery;

import java.util.ArrayList;
import java.util.List;

public class Bakery {
    private String name;
    private int capacity;
    private List<Employee> employees;

    public Bakery(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        employees = new ArrayList<>();
    }

    public void add(Employee employee) {
        if(capacity >= employees.size() + 1) {
            employees.add(employee);
        }
    }

    public boolean remove(String name) {
       return employees.removeIf(e -> e.getName().equals(name));
    }

    public Employee getOldestEmployee() {
        Employee employee = null;
        int oldest = 0;

        for (Employee e : employees) {
            if(e.getAge() >= oldest) {
                oldest = e.getAge();
                employee = e;
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

        sb.append("Employees working at Bakery ").append(name).append(":").append(System.lineSeparator());

        employees.forEach(e -> sb.append(e.toString()).append(System.lineSeparator()));

        return sb.toString();
    }
}
