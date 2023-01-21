package streamsFilesAndDirectories;

import java.io.*;

public class CounterCharactersTypes {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new FileReader("resources/input.txt"));
        PrintWriter pw = new PrintWriter(new FileWriter("resources/output.txt"));

        String charactersFromLine = br.readLine();

        String vowels = "aeiou";
        String punctuation = "!,.?";

        int vowelsCount = 0;
        int otherCount = 0;
        int punctuationCount = 0;

        while (charactersFromLine != null) {
            char[] charsArray = charactersFromLine.toCharArray();

            for (char c : charsArray) {

                if(vowels.contains(String.valueOf(c))) {
                    vowelsCount++;
                } else if (punctuation.contains(String.valueOf(c))) {
                    punctuationCount++;
                } else if (!Character.isWhitespace(c)) {
                    otherCount++;
                }
            }
            charactersFromLine = br.readLine();
        }

        pw.println("Vowels: " + vowelsCount);
        pw.println("Other symbols: " + otherCount);
        pw.println("Punctuation: " + punctuationCount);

        br.close();
        pw.close();
    }
}
