package streamsFilesAndDirectories;

import java.io.*;

public class MergeTwoFiles {

    public static void main(String[] args) throws IOException {

        BufferedReader firstFile = new BufferedReader(new FileReader("resources/inputOne.txt"));
        BufferedReader secondFile = new BufferedReader(new FileReader("resources/inputTwo.txt"));

        PrintWriter pw = new PrintWriter(new FileWriter("resources/output.txt"));

        String fileOne = firstFile.readLine();
        String fileTwo = secondFile.readLine();

        while (fileOne != null) {
            pw.println(fileOne);
            fileOne = firstFile.readLine();
        }
        while (fileTwo != null) {
            pw.println(fileTwo);
            fileTwo = secondFile.readLine();
        }

        firstFile.close();
        secondFile.close();
        pw.close();
    }
}
