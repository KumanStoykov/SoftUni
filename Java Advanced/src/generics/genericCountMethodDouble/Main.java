package generics.genericCountMethodDouble;


import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        List<Box<Double>> boxes = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            Double inputRow = Double.parseDouble(scanner.nextLine());
            Box<Double> newBox = new Box<>(inputRow);
            boxes.add(newBox);
        }
        Double comp = Double.parseDouble(scanner.nextLine());

        int count = 0;
        for (Box<Double> item : boxes) {
            if(item.getItem().compareTo(comp) > 0) {
                count++;
            }
        }
        System.out.println(count);
    }
}
