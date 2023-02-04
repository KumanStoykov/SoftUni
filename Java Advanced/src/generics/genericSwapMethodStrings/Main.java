package generics.genericSwapMethodStrings;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        List<Box<String>> boxes = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            String inputRow = scanner.nextLine();
            Box<String> newBox = new Box<>(inputRow);
            boxes.add(newBox);
        }
        
        int[] indexes = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        Box<String> firstSentence = boxes.get(indexes[0]);
        Box<String> secondSentence = boxes.get(indexes[1]);

        boxes.set(indexes[0], secondSentence);
        boxes.set(indexes[1], firstSentence);

        boxes.forEach(s -> System.out.println(s.toString()));
    }
}

