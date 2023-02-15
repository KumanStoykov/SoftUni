package exams._14_12_2022.softUni;

import java.util.ArrayList;
import java.util.List;

public class SoftUni {

    private int capacity;
    private List<Student> data;

    public SoftUni(int capacity) {
        this.capacity = capacity;
        data = new ArrayList<>();
    }

    public int getCapacity() {
        return capacity;
    }

    public int getCount() {
        return data.size();
    }

    public String insert(Student student) {
        boolean isAllReady = data.stream()
                .anyMatch(s -> s.getFirstName().equals(student.getFirstName()) && s.getLastName().equals(student.getLastName()));

        if (isAllReady) {
            return "Student is already in the hall.";
        } else if (data.size() + 1 > capacity) {
            return "The hall is full";
        } else {
            data.add(student);
            return String.format("Added student %s %s.", student.getFirstName(), student.getLastName());
        }
    }

    public String remove(Student student) {
        boolean isAllReady = data.stream()
                .anyMatch(s -> s.getFirstName().equals(student.getFirstName()) && s.getLastName().equals(student.getLastName()));

        if (isAllReady) {
            data.remove(student);
            return String.format("Removed student %s %s.", student.getFirstName(), student.getLastName());
        } else {
            return "Student not found.";
        }
    }

    public Student getStudent(String firstName, String lastName) {
        return data.stream().filter(s -> s.getFirstName().equals(firstName) && s.getLastName().equals(lastName))
                .findFirst().orElse(null);
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();

        sb.append("Hall size: ").append(getCount()).append(System.lineSeparator());

        data.forEach(s -> sb.append(s.toString()).append(System.lineSeparator()));

        return sb.toString();
    }
}
