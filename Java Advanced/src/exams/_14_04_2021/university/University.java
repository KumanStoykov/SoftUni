package exams._14_04_2021.university;

import java.util.ArrayList;
import java.util.List;

public class University {
    public int capacity;
    public List<Student> students;

    public University(int capacity) {
        this.capacity = capacity;
        students = new ArrayList<>();
    }

    public int getCapacity() {
        return capacity;
    }

    public List<Student> getStudents() {
        return students;
    }

    public int getStudentCount() {
        return students.size();
    }

    private boolean hasCurrentStudent(Student student) {
        return students.stream()
                .anyMatch(s -> s.getFirstName().equals(student.getFirstName()) && s.getLastName().equals(student.getLastName()));
    }

    public String registerStudent(Student student) {
        boolean hasCurrStudent = hasCurrentStudent(student);
        String result = null;

        if (hasCurrStudent) {
            result = "Student is already in the university";
        } else if (!hasCurrStudent) {
            if (capacity >= students.size() + 1) {
                students.add(student);
                result = String.format("Added student %s %s", student.getFirstName(), student.getLastName());
            } else {
                result = "No seats in the university";
            }
        }
        return result;
    }

    public String dismissStudent(Student student) {
        boolean hasCurrStudent = hasCurrentStudent(student);
        String result = null;
        if (hasCurrStudent) {
            result = String.format("Removed student %s %s", student.getFirstName(), student.getLastName());
            students.remove(student);
        } else {
            result = "Student not found";
        }
        return result;
    }

    public Student getStudent(String firstName, String lastName) {
        return students.stream()
                .filter(s -> s.getFirstName().equals(firstName) && s.getLastName().equals(lastName))
                .findFirst()
                .orElse(null);
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();

        students.forEach(s -> {
            sb.append("==Student: ").append("First Name = ").append(s.getFirstName())
                    .append(", Last Name = ").append(s.getLastName())
                    .append(", Best Subject = ").append(s.getBestSubject())
                    .append(System.lineSeparator());
        });

        return sb.toString();
    }
}
