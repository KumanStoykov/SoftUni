package streamsFilesAndDirectories;

import java.io.*;

public class AllCapitals {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new FileReader("resources/input.txt"));
        PrintWriter pw = new PrintWriter(new FileWriter("resources/allCapital.txt"));

        String line = br.readLine();

        while (line != null) {

            char[] charsFromLine = line.toCharArray();
            char[] capitalChars = new char[charsFromLine.length];

            for (int i = 0; i < charsFromLine.length; i++) {
                if (Character.isAlphabetic(charsFromLine[i])) {
                    capitalChars[i] = Character.toUpperCase(charsFromLine[i]);
                } else {
                    capitalChars[i] = Character.toUpperCase(charsFromLine[i]);
                }
            }
            pw.println(capitalChars);
            line = br.readLine();
        }
        br.close();
        pw.close();
    }
}
