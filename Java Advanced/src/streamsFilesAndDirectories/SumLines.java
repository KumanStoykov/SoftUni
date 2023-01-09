package streamsFilesAndDirectories;

import java.io.*;

public class SumLines {

    public static void main(String[] args) throws IOException {

        BufferedReader bufferedReader = new BufferedReader(new FileReader("resources/input.txt"));
        PrintWriter printWriter = new PrintWriter(new FileWriter("resources/inputttt.txt"));

        String line = bufferedReader.readLine();

        while (line != null) {
            long sum = 0;
            char[] charactersFromLine = line.toCharArray();

            for(char character: charactersFromLine) {
                sum += character;
            }
            printWriter.println(line);
            System.out.println(sum);
            line = bufferedReader.readLine();
        }

        bufferedReader.close();
        printWriter.close();
    }
}
