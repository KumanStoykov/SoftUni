package streamsFilesAndDirectories;

import java.io.*;
import java.util.*;

public class SerializeArrayList {

    public static void main(String[] args) throws IOException, ClassNotFoundException {

        ObjectOutputStream output = new ObjectOutputStream(new FileOutputStream("resources/list.ser"));
        List<Integer> list = List.of(1, 2, 3, 4);
        output.writeObject(list);

        ObjectInputStream input = new ObjectInputStream(new FileInputStream("resources/list.ser"));

        System.out.println(input.readObject());
    }
}
