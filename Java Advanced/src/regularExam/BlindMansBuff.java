package regularExam;

import java.util.Arrays;
import java.util.Scanner;

public class BlindMansBuff {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int[] dimension = Arrays.stream(scanner.nextLine().split("\\s+")).mapToInt(Integer::parseInt)
                .toArray();

        char[][] matrix = new char[dimension[0]][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().replace(" ", "").toCharArray();
        }
        int[] findPlayer = findPlayer(matrix);
        int row = findPlayer[0];
        int col = findPlayer[1];

        String command = scanner.nextLine();

        int touched = 0;
        int moves = 0;
        int prevRow = 0;
        int prevCol = 0;

        while (!command.equals("Finish")) {
            matrix[row][col] = '-';
            prevRow = row;
            prevCol = col;
            int[] playerMove = move(command, matrix, row, col);
            row = playerMove[0];
            col = playerMove[1];

            if (matrix[row][col] == 'P') {
                touched++;
                moves++;
            } else if (matrix[row][col] == '-' && (prevRow != row || prevCol != col)) {
                matrix[row][col] = 'B';
                moves++;
            }

            if (touched == 3) {
                break;
            }

            command = scanner.nextLine();
        }
        System.out.println("Game over!");
        System.out.printf("Touched opponents: %d Moves made: %d", touched, moves);
    }

    private static int[] findPlayer(char[][] matrix) {
        int row = 0;
        int col = 0;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'B') {
                    row = i;
                    col = j;
                }
            }
        }

        return new int[]{row, col};
    }

    private static int[] move(String command, char[][] matrix, int row, int col) {

        switch (command) {
            case "up":
                if (row - 1 >= 0 && matrix[row - 1][col] != 'O') {
                    row--;
                }
                break;
            case "down":
                if (row + 1 < matrix[row].length && matrix[row + 1][col] != 'O') {
                    row++;
                }
                break;
            case "left":
                if (col - 1 >= 0 && matrix[row][col - 1] != 'O') {
                    col--;
                }
                break;
            case "right":
                if (col + 1 < matrix.length && matrix[row][col + 1] != 'O') {
                    col++;
                }
                break;
        }
        return new int[]{row, col};
    }
}
