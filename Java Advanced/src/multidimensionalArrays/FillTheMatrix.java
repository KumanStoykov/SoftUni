package multidimensionalArrays;

import java.util.Scanner;

public class FillTheMatrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split(", ");

        int size = Integer.parseInt(input[0]);
        String command = input[1];

        int[][] matrix = new int[size][size];

        if (command.equals("A")) {
            printMatrix(patternA(matrix));
        } else {
            printMatrix(patternB(matrix, size));
        }
    }

    private static int[][] patternA(int[][] matrix) {
        int count = 1;
        for (int c = 0; c < matrix.length; c++) {
            for (int r = 0; r < matrix[c].length; r++) {
                matrix[r][c] = count;
                count++;
            }
        }
        return matrix;
    }

    private static int[][] patternB(int[][] matrix, int size) {
        int count = 1;
        for (int c = 0; c < matrix.length; c++) {
            int evenRowCount = 0;
            for (int r = 0; r < matrix[c].length; r++) {
                if (c % 2 == 1) {
                    matrix[r][c] = (count + size - 1) - r;
                    evenRowCount++;
                } else {
                    matrix[r][c] = count;
                    count++;
                }
            }
            count += evenRowCount;
        }
        return matrix;
    }

    private static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
