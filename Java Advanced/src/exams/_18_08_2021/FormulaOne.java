package exams._18_08_2021;

import java.util.Scanner;

public class FormulaOne {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());
        int countOfCommands = Integer.parseInt(scanner.nextLine());


        char[][] matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().toCharArray();
        }
        String[] commands = new String[countOfCommands];

        for (int i = 0; i < countOfCommands; i++) {
            commands[i] = scanner.nextLine();
        }

        int[] playerPosition = findPlayer(matrix);
        int rowPlayer = playerPosition[0];
        int colPlayer = playerPosition[1];

        boolean isWin = false;

        for (int i = 0; i < commands.length; i++) {
            String command = commands[i];
            int[] playerMove = move(matrix, rowPlayer, colPlayer, command);

            int prevRow = rowPlayer;
            int prevCol = colPlayer;

            rowPlayer = playerMove[0];
            colPlayer = playerMove[1];

            if (matrix[rowPlayer][colPlayer] == 'F') {
                matrix[prevRow][prevCol] = '.';
                matrix[rowPlayer][colPlayer] = 'P';
                isWin = true;
                break;
            } else if (matrix[rowPlayer][colPlayer] == 'B') {
                matrix[prevRow][prevCol] = '.';
                i--;
                continue;
            } else if (matrix[prevRow][prevCol] != 'B') {
                matrix[prevRow][prevCol] = '.';
                matrix[rowPlayer][colPlayer] = 'P';
            }
        }

        if (isWin) {
            System.out.println("Well done, the player won first place!");
        } else {
            System.out.println("Oh no, the player got lost on the track!");
        }

        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c);
            }
            System.out.println();
        }

    }

    private static int[] findPlayer(char[][] matrix) {
        int row = 0;
        int col = 0;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'P') {
                    row = i;
                    col = j;
                }
            }
        }
        return new int[]{row, col};
    }

    private static int[] move(char[][] matrix, int row, int col, String command) {

        switch (command) {
            case "up":
                if (row - 1 < 0) {
                    row = matrix.length - 1;
                } else if (matrix[row - 1][col] != 'T') {
                    row--;
                }
                break;
            case "down":
                if (row + 1 >= matrix.length) {
                    row = 0;
                } else if (matrix[row + 1][col] != 'T') {
                    row++;
                }
                break;
            case "left":
                if (col - 1 < 0) {
                    col = matrix.length - 1;
                } else if (matrix[row][col - 1] != 'T') {
                    col--;
                }
                break;
            case "right":
                if (col + 1 >= matrix.length) {
                    col = 0;
                } else if (matrix[row][col + 1] != 'T') {
                    col++;
                }
                break;
        }
        return new int[]{row, col};
    }
}
