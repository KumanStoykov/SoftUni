package arrays.exercise;

import java.util.Scanner;

public class ZigZag {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());
        String [] firstRow = new String[rows];
        String [] secondRow = new String[rows];

        for (int i = 0; i < rows; i++) {
            String [] numbers = scanner.nextLine().split(" ");
            String firstNumber = numbers[0];
            String secondNumber = numbers[1];

            if(i % 2 == 0 ) {
                firstRow[i] = firstNumber;
                secondRow[i] = secondNumber;
            } else {
                secondRow[i] = firstNumber;
                firstRow[i] = secondNumber;
            }

        }

        System.out.println(String.join(" ", firstRow));
        System.out.println(String.join(" ", secondRow));
    }
}
