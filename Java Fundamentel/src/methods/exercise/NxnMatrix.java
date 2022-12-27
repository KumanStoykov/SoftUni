package methods.exercise;

import java.util.Scanner;

public class NxnMatrix {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        printMatrix(Integer.parseInt(scanner.nextLine()));
    }

    public static void printMatrix(int num) {
        for (int i = 0; i < num; i++) {
            String[] row = new String[num];
            for (int j = 0; j < num; j++) {
                row[j] = String.valueOf(num);
            }
            System.out.println(String.join(" ", row));
        }
    }
}
