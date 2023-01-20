package streamsFilesAndDirectories;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class SumBytes {

    public static void main(String[] args) {

        long result = 0;
        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader("resources/input.txt"));

            String read = bufferedReader.readLine();
            while (read != null) {
                char[] chars = read.toCharArray();
                for (char c: chars) {
                    result += c;
                }
                read = bufferedReader.readLine();
            }
            
            bufferedReader.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(result);
    }
}
