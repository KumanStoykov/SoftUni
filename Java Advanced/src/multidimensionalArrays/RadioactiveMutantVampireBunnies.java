package multidimensionalArrays;

import java.util.*;

public class RadioactiveMutantVampireBunnies {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String[] dimension = scanner.nextLine().split("\\s+");
        int rowMatrix = Integer.parseInt(dimension[0]);
        int colMatrix = Integer.parseInt(dimension[1]);

        char[][] matrix = new char[rowMatrix][colMatrix];
        int rowPlayer = 0;
        int colPlayer = 0;

        for (int i = 0; i < matrix.length; i++) {
            char[] input = scanner.nextLine().toCharArray();
            matrix[i] = input;
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'P') {
                    rowPlayer = i;
                    colPlayer = j;
                }
            }
        }

        char[] commands = scanner.nextLine().toCharArray();
        boolean isWon = false;
        boolean isDead = false;

        for (int i = 0; i < commands.length; i++) {

            switch (commands[i]) {
                case 'L':
                    if (isInBounders(matrix, rowPlayer, colPlayer - 1)) {
                        if (matrix[rowPlayer][colPlayer - 1] == 'B') {
                            isDead = true;
                            colPlayer--;
                            break;
                        }
                        matrix[rowPlayer][colPlayer] = '.';
                        matrix[rowPlayer][colPlayer - 1] = 'P';
                        colPlayer--;
                    } else {
                        matrix[rowPlayer][colPlayer] = '.';
                        isWon = true;
                    }
                    break;
                case 'R':
                    if (isInBounders(matrix, rowPlayer, colPlayer + 1)) {
                        if (matrix[rowPlayer][colPlayer + 1] == 'B') {
                            isDead = true;
                            colPlayer++;
                            break;
                        }
                        matrix[rowPlayer][colPlayer] = '.';
                        matrix[rowPlayer][colPlayer + 1] = 'P';
                        colPlayer++;
                    } else {
                        matrix[rowPlayer][colPlayer] = '.';
                        isWon = true;
                    }
                    break;
                case 'U':
                    if (isInBounders(matrix, rowPlayer - 1, colPlayer)) {
                        if (matrix[rowPlayer - 1][colPlayer] == 'B') {
                            isDead = true;
                            rowPlayer--;
                            break;
                        }
                        matrix[rowPlayer][colPlayer] = '.';
                        matrix[rowPlayer - 1][colPlayer] = 'P';
                        rowPlayer--;
                    } else {
                        matrix[rowPlayer][colPlayer] = '.';
                        isWon = true;
                    }
                    break;
                case 'D':
                    if (isInBounders(matrix, rowPlayer + 1, colPlayer)) {
                        if (matrix[rowPlayer + 1][colPlayer] == 'B') {
                            isDead = true;
                            rowPlayer++;
                            break;
                        }
                        matrix[rowPlayer][colPlayer] = '.';
                        matrix[rowPlayer + 1][colPlayer] = 'P';
                        rowPlayer++;
                    } else {
                        matrix[rowPlayer][colPlayer] = '.';
                        isWon = true;
                    }
                    break;
            }

            Map<Integer, List<Integer>> bunnyIndexes = oldBunnyIndexes(matrix);

            for (int r = 0; r < matrix.length; r++) {

                for (int c = 0; c < matrix[r].length; c++) {
                    if (bunnyIndexes.get(r).contains(c)) {
                        if (isInBounders(matrix, r - 1, c)) {
                            matrix[r - 1][c] = 'B';
                            if (rowPlayer == r - 1 && colPlayer == c) {
                                isDead = true;
                            }
                        }

                        if (isInBounders(matrix, r, c - 1)) {
                            matrix[r][c - 1] = 'B';
                            if (rowPlayer == r && colPlayer == c - 1) {
                                isDead = true;
                            }
                        }

                        if (isInBounders(matrix, r + 1, c)) {
                            matrix[r + 1][c] = 'B';
                            if (rowPlayer == r + 1 && colPlayer == c) {
                                isDead = true;
                            }
                        }

                        if (isInBounders(matrix, r, c + 1)) {
                            matrix[r][c + 1] = 'B';
                            if (rowPlayer == r && colPlayer == c + 1) {
                                isDead = true;
                            }
                        }
                    }
                }
            }

            if (isWon) {
                printMatrix(matrix);
                System.out.printf("won: %d %d", rowPlayer, colPlayer);
                break;
            } else if (isDead) {
                printMatrix(matrix);
                System.out.printf("dead: %d %d", rowPlayer, colPlayer);
                break;
            }
        }

    }

    private static void printMatrix(char[][] matrix) {
        for (char[] row : matrix) {
            for (char col : row) {
                System.out.print(col);
            }
            System.out.println();
        }
    }

    private static Map<Integer, List<Integer>> oldBunnyIndexes(char[][] matrix) {
        Map<Integer, List<Integer>> bunnyIndexes = new HashMap<>();

        for (int r = 0; r < matrix.length; r++) {
            bunnyIndexes.putIfAbsent(r, new ArrayList<>());
            for (int c = 0; c < matrix[r].length; c++) {
                if (Character.toString(matrix[r][c]).equals("B")) {
                    bunnyIndexes.get(r).add(c);
                }
            }
        }
        return bunnyIndexes;
    }

    private static boolean isInBounders(char[][] matrix, int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }
}