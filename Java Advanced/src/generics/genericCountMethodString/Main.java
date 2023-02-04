package generics.genericCountMethodString;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        List<Box<String>> boxes = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            String inputRow = (scanner.nextLine());
            Box<String> newBox = new Box<>(inputRow);
            boxes.add(newBox);
        }
        String comp = scanner.nextLine();

        int count = 0;
        for (Box<String> item : boxes) {
            if(item.getItem().compareTo(comp) > 0) {
                count++;
            }
        }
        System.out.println(count);
    }
}
