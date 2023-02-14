package exams._26_06_2021;

import java.util.Scanner;

public class Python {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());
        String[] commands = scanner.nextLine().split(", ");
        char[][] matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().replace(" ", "").toCharArray();
        }

        int row = 0;
        int col = 0;

        int foodOfTable = 0;
        int foodPython = 1;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 's') {
                    row = i;
                    col = j;
                }

                if (matrix[i][j] == 'f') {
                    foodOfTable++;
                }
            }
        }

        boolean meetEnemy = false;

        for (int i = 0; i < commands.length; i++) {

            int[] currentMove = move(matrix, commands[i], row, col);
            row = currentMove[0];
            col = currentMove[1];

            if (matrix[row][col] == 'e') {
                meetEnemy = true;
            } else if (matrix[row][col] == 'f') {
                matrix[row][col] = '*';
                foodOfTable--;
                foodPython++;
                if (foodOfTable < 1) {
                    break;
                }
            }
        }

        if (meetEnemy) {
            System.out.println("You lose! Killed by an enemy!");
        } else if (foodOfTable > 0) {
            System.out.printf("You lose! There is still %d food to be eaten.", foodOfTable);
        } else {
            System.out.printf("You win! Final python length is %d", foodPython);
        }
    }

    private static int[] move(char[][] matrix, String command, int row, int col) {

        switch (command) {
            case "up":
                if (row - 1 < 0) {
                    row = matrix.length - 1;
                } else {
                    row--;
                }
                break;
            case "down":
                if (row + 1 >= matrix.length) {
                    row = 0;
                } else {
                    row++;
                }
                break;
            case "left":
                if (col - 1 < 0) {
                    col = matrix.length - 1;
                } else {
                    col--;
                }
                break;
            case "right":
                if (col + 1 >= matrix.length) {
                    col = 0;
                } else {
                    col++;
                }
                break;
        }
        return new int[]{row, col};
    }
}