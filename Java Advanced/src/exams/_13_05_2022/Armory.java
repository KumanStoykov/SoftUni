package exams._13_05_2022;

import java.util.Scanner;

public class Armory {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());

        char[][] matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().toCharArray();
        }

        int[] findOfficer = findOfficer(matrix);
        int row = findOfficer[0];
        int col = findOfficer[1];

        int sumBlades = 0;
        while (sumBlades < 65) {
            matrix[row][col] = '-';
            String command = scanner.nextLine();
            int[] moveOfficer = move(command, row, col);
            row = moveOfficer[0];
            col = moveOfficer[1];

            if (row >= 0 && row < matrix.length && col >= 0 && col < matrix.length) {
                if (Character.isDigit(matrix[row][col])) {
                    sumBlades += Integer.parseInt(String.valueOf(matrix[row][col]));
                    matrix[row][col] = 'A';
                } else if (matrix[row][col] == 'M') {
                    matrix[row][col] = '-';
                    for (int i = 0; i < matrix.length; i++) {
                        for (int j = 0; j < matrix[i].length; j++) {
                            if (matrix[i][j] == 'M') {
                                row = i;
                                col = j;
                                matrix[row][col] = 'A';
                            }
                        }
                    }
                } else {
                    matrix[row][col] = 'A';
                }
            } else {
                break;
            }
        }
        if (sumBlades >= 65) {
            System.out.println("Very nice swords, I will come back for more!");
        } else {
            System.out.println("I do not need more swords!");
        }

        System.out.printf("The king paid %d gold coins.%n", sumBlades);

        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c);
            }
            System.out.println();
        }
    }

    private static int[] findOfficer(char[][] matrix) {
        int row = 0;
        int col = 0;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'A') {
                    row = i;
                    col = j;
                }
            }
        }

        return new int[]{row, col};
    }

    private static int[] move(String command, int row, int col) {

        switch (command) {
            case "up":
                row--;
                break;
            case "down":
                row++;
                break;
            case "left":
                col--;
                break;
            case "right":
                col++;
                break;
        }
        return new int[]{row, col};
    }
}
