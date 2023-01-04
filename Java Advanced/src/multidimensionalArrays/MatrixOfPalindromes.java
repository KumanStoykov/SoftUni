package multidimensionalArrays;

import java.util.Scanner;

public class MatrixOfPalindromes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int matrixRow = scanner.nextInt();
        int matrixColum = scanner.nextInt();

        String[][] matrix = new String[matrixRow][matrixColum];

        int asciiStart = 97;

        for (int r = 0; r < matrixRow; r++) {
            for (int c = 0; c < matrixColum; c++) {
                String alongLater = Character.toString(asciiStart + r);
                String middleLater = Character.toString(asciiStart + r + c);

                matrix[r][c] = alongLater + middleLater + alongLater;
            }

        }
        printMatrix(matrix);
    }

    private static void printMatrix(String[][] matrix) {
        for (String[] row : matrix) {
            for (String col : row) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
    }

}
