package exams._25_06_2022;

import java.util.Scanner;

public class StickyFingers {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());

        String[] commands = scanner.nextLine().split(",");

        char[][] matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().replace(" ", "").toCharArray();
        }
        int[] findPlayer = findPlayer(matrix);
        int row = findPlayer[0];
        int col = findPlayer[1];

        int totalMoney = 0;
        boolean isCatch = false;

        for (String command : commands) {
            int prevRow = row;
            int prevCol = col;

            int[] playerMoved = move(command, row, col);
            row = playerMoved[0];
            col = playerMoved[1];

            if (isInBounders(matrix, row, col)) {
                matrix[prevRow][prevCol] = '+';

                if (matrix[row][col] == '$') {
                    System.out.printf("You successfully stole %d$.%n", row * col);
                    totalMoney += row * col;
                    matrix[row][col] = 'D';
                } else if (matrix[row][col] == 'P') {
                    matrix[row][col] = '#';
                    isCatch = true;
                    break;
                } else {
                    matrix[row][col] = 'D';
                }
            } else {
                row = prevRow;
                col = prevCol;
                System.out.println("You cannot leave the town, there is police outside!");
            }
        }

        if (isCatch) {
            System.out.printf("You got caught with %d$, and you are going to jail.%n", totalMoney);
        } else {
            System.out.printf("Your last theft has finished successfully with %d$ in your pocket.%n", totalMoney);
        }

        for (char[] chars : matrix) {
            String[] charsArr = String.valueOf(chars).split("");
            System.out.println(String.join(" ", charsArr));
        }
    }

    private static boolean isInBounders(char[][] matrix, int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
    }

    private static int[] findPlayer(char[][] matrix) {
        int row = 0;
        int col = 0;
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'D') {
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
