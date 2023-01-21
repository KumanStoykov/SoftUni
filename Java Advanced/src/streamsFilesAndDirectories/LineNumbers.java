package streamsFilesAndDirectories;

import java.io.*;

public class LineNumbers {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new FileReader("resources/inputLineNumbers.txt"));
        PrintWriter pw = new PrintWriter(new FileWriter("resources/output.txt"));

        String readLine = br.readLine();
        int counter = 1;

        while (readLine != null) {
            pw.println(counter + ". " + readLine);
            counter++;
            readLine = br.readLine();
        }

        br.close();
        pw.close();
    }
}
