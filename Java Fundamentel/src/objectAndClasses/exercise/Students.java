package objectAndClasses.exercise;

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Students {

   private static class Student {
        private String firstName;
        private String lastName;
        private double grade;

        public Student(String firstName, String lastName, double grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.grade = grade;
        }

        public String getName() {
            return this.firstName + " " + this.lastName;
        }

        public double getGrade() {
            return this.grade;
        }
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());

        List<Student> studentsList = new ArrayList<>();

        for (int i = 0; i < rows; i++) {
            String[] inputStudents = scanner.nextLine().split("\\s+");
            Student currentStudent = new Student(inputStudents[0], inputStudents[1], Double.parseDouble(inputStudents[2]));
            studentsList.add(currentStudent);
        }
        studentsList.sort(Comparator.comparing(Student::getGrade).reversed());
        for (Student currentStudent: studentsList) {
            System.out.printf("%s: %.2f%n", currentStudent.getName(), currentStudent.getGrade());
        }
    }
}
