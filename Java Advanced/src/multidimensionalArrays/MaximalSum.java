package multidimensionalArrays;

import java.util.Arrays;
import java.util.Scanner;

public class MaximalSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimensions = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        int[][] matrix = fillMatrix(scanner, dimensions[0], dimensions[1]);
        int[][] matrixToPrint = new int[3][3];

        int maxSum = Integer.MIN_VALUE;
        int currentSum = Integer.MIN_VALUE;

        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                if (isInBounders(matrix, r + 1, c + 1) && isInBounders(matrix, r - 1, c - 1)) {
                    currentSum = matrix[r - 1][c - 1] + matrix[r - 1][c] + matrix[r - 1][c + 1]
                            + matrix[r][c - 1] + matrix[r][c] + matrix[r][c + 1]
                            + matrix[r + 1][c - 1] + matrix[r + 1][c] + matrix[r + 1][c + 1];
                }
                if (currentSum > maxSum) {
                    maxSum = currentSum;
                    matrixToPrint[0][0] = matrix[r - 1][c - 1];
                    matrixToPrint[0][1] = matrix[r - 1][c];
                    matrixToPrint[0][2] = matrix[r - 1][c + 1];
                    matrixToPrint[1][0] = matrix[r][c - 1];
                    matrixToPrint[1][1] = matrix[r][c];
                    matrixToPrint[1][2] = matrix[r][c + 1];
                    matrixToPrint[2][0] = matrix[r + 1][c - 1];
                    matrixToPrint[2][1] = matrix[r + 1][c];
                    matrixToPrint[2][2] = matrix[r + 1][c + 1];
                }
            }

        }

        printMatrix(matrixToPrint, maxSum);
    }

    private static int[][] fillMatrix(Scanner scanner, int row, int col) {
        int[][] matrix = new int[row][col];
        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                matrix[r][c] = scanner.nextInt();
            }
        }
        return matrix;
    }

    private static boolean isInBounders(int[][] matrix, int r, int c) {
        return r >= 0 && r < matrix.length && c >= 0 && c < matrix[r].length;
    }

    private static void printMatrix(int[][] matrix, int totalSum) {
        System.out.println("Sum = " + totalSum);
        for (int[] row : matrix) {
            for (int currentInt : row) {
                System.out.print(currentInt + " ");
            }
            System.out.println();
        }
    }
}
