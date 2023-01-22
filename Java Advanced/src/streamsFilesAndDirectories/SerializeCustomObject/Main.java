package streamsFilesAndDirectories.SerializeCustomObject;

import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Course course = new Course();

        course.name = "Java Advanced";
        course.numbersOfStudents = 300;

        ObjectOutputStream output = new ObjectOutputStream(new FileOutputStream("resources/courses.ser"));
        ObjectInputStream input = new ObjectInputStream(new FileInputStream("resources/courses.ser"));

        output.writeObject(course);

        Course coursesFile = (Course) input.readObject();
        System.out.println(coursesFile.numbersOfStudents);
        System.out.println(coursesFile.name);
    }
}
