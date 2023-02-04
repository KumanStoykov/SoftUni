package generics.genericBox;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int rows = Integer.parseInt(br.readLine());

        for (int i = 0; i < rows; i++) {
            String inputRow = br.readLine();
            Box<String> newBox = new Box<>(inputRow);
            System.out.println(newBox.toString());
        }
    }
}
