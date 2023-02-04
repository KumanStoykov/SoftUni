package generics.genericBoxOfInteger;


import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < n; i++) {
            int inputRow = Integer.parseInt(scanner.nextLine());
            Box<Integer> newBox = new Box<>(inputRow);
            System.out.println(newBox.toString());
        }
    }
}
