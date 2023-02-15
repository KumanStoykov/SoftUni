package exams._18_08_2021.cafe;

public class Employee {
    private String name;
    private int age;
    private String country;

    public Employee(String name, int age, String country) {
        setName(name);
        setAge(age);
        setCountry(country);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Override
    public String toString() {
        return String.format("Employee: %s, %d from %s", name, age, country);
    }
}
