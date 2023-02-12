package exams._19_08_2020;

import java.util.Scanner;

public class Bee {
    static int beeRow = 0;
    static int beeCol = 0;
    static char[][] matrix;

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());

        matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().toCharArray();
        }
        findBee();

        int flowers = 0;
        boolean isOut = false;
        String command = scanner.nextLine();

        while (!command.equals("End")) {
            matrix[beeRow][beeCol] = '.';
            move(command);

            if (isInBounders(matrix, beeRow, beeCol)) {

                if (matrix[beeRow][beeCol] == 'O') {
                    matrix[beeRow][beeCol] = '.';
                    continue;
                } else if (matrix[beeRow][beeCol] == 'f') {
                    matrix[beeRow][beeCol] = 'B';
                    flowers++;
                } else {
                    matrix[beeRow][beeCol] = 'B';
                }
            } else {
                isOut = true;
                break;
            }

            command = scanner.nextLine();
        }

        if (isOut) {
            System.out.println("The bee got lost!");
        }

        if (flowers > 4) {
            System.out.printf("Great job, the bee manage to pollinate %d flowers!%n", flowers);
        } else {
            System.out.printf("The bee couldn't pollinate the flowers, she needed %d flowers more%n", 5 - flowers);
        }

        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c);
            }
            System.out.println();
        }
    }

    private static void findBee() {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'B') {
                    beeRow = i;
                    beeCol = j;
                }
            }
        }
    }

    private static boolean isInBounders(char[][] matrix, int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
    }

    private static void move(String command) {

        switch (command) {
            case "up":
                beeRow--;
                break;
            case "down":
                beeRow++;
                break;
            case "left":
                beeCol--;
                break;
            case "right":
                beeCol++;
                break;
        }
    }

}
