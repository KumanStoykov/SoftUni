package exams._17_12_2019;

import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class PresentDelivery {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int countOfPresents = Integer.parseInt(scanner.nextLine());

        char[][] matrix = fillMatrix(scanner);

        int santaRow = 0;
        int santaCol = 0;
        int countNiceKids = 0;
        int kidsWithPresent = 0;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'S') {
                    santaRow = i;
                    santaCol = j;
                }

                if (matrix[i][j] == 'V') {
                    countNiceKids++;
                }
            }
        }

        String command = scanner.nextLine();

        while (!command.equals("Christmas morning")) {

            int currRow = santaRow;
            int currCol = santaCol;

            switch (command) {
                case "up":
                    currRow = santaRow - 1;
                    break;
                case "down":
                    currRow = santaRow + 1;
                    break;
                case "left":
                    currCol = santaCol - 1;
                    break;
                case "right":
                    currCol = santaCol + 1;
                    break;
            }

            if (isInBounders(matrix, currRow, currCol)) {


                char currSantaPosition = matrix[currRow][currCol];

                if (currSantaPosition == 'X') {
                    matrix[currRow][currCol] = 'S';
                    matrix[santaRow][santaCol] = '-';
                    santaRow = currRow;
                    santaCol = currCol;
                } else if (currSantaPosition == 'V') {
                    matrix[currRow][currCol] = 'S';
                    matrix[santaRow][santaCol] = '-';
                    santaRow = currRow;
                    santaCol = currCol;
                    countOfPresents--;
                    kidsWithPresent++;
                } else if (currSantaPosition == 'C') {
                    matrix[currRow][currCol] = 'S';
                    matrix[santaRow][santaCol] = '-';
                    santaRow = currRow;
                    santaCol = currCol;

                    if (checkBiscuitRow(matrix, currRow + 1, currCol) && countOfPresents > 0) {
                        matrix[currRow + 1][currCol] = '-';
                        countOfPresents--;
                        kidsWithPresent++;
                    }
                    if (checkBiscuitRow(matrix, currRow - 1, currCol) && countOfPresents > 0) {
                        matrix[currRow - 1][currCol] = '-';
                        countOfPresents--;
                        kidsWithPresent++;
                    }
                    if (checkBiscuitRow(matrix, currRow, currCol + 1) && countOfPresents > 0) {
                        matrix[currRow][currCol + 1] = '-';
                        countOfPresents--;
                        kidsWithPresent++;
                    }
                    if (checkBiscuitRow(matrix, currRow, currCol - 1) && countOfPresents > 0) {
                        matrix[currRow][currCol - 1] = '-';
                        countOfPresents--;
                        kidsWithPresent++;
                    }
                } else {
                    matrix[currRow][currCol] = 'S';
                    matrix[santaRow][santaCol] = '-';
                    santaRow = currRow;
                    santaCol = currCol;
                }
            }

            if (countOfPresents < 1) {
                break;
            }
            command = scanner.nextLine();
        }


        if (countOfPresents < 1) {
            System.out.println("Santa ran out of presents!");
        }
        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c + " ");
            }
            System.out.println();
        }

        if (countNiceKids - kidsWithPresent > 0) {
            System.out.printf("No presents for %d nice kid/s.", countNiceKids - kidsWithPresent);
        } else {
            System.out.printf("Good job, Santa! %d happy nice kid/s.", kidsWithPresent);
        }
    }

    private static boolean checkBiscuitRow(char[][] matrix, int currRow, int currCol) {
        return isInBounders(matrix, currRow, currCol) && (matrix[currRow][currCol] == 'X' || matrix[currRow][currCol] == 'V');
    }

    private static boolean isInBounders(char[][] matrix, int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
    }

    private static char[][] fillMatrix(Scanner scanner) {
        int dimension = Integer.parseInt(scanner.nextLine());
        char[][] matrix = new char[dimension][dimension];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .collect(Collectors.joining()).toCharArray();
        }

        return matrix;
    }
}

