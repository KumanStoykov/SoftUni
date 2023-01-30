package definingClasses.google;

public class Company {
    private String name;
    private String department;
    private double salary;


    public Company(String name, String departments, double salary) {
        this.name = name;
        this.salary = salary;
        this.department = departments;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return String.format("%s %s %.2f", name, department, salary);
    }
}
