package multidimensionalArrays;

import java.util.Scanner;

public class DiagonalDifference {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());

        int[][] matrix = new int[dimension][dimension];

        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                matrix[r][c] = scanner.nextInt();
            }
        }


        System.out.println(findDifference(matrix));
    }

    private static int findDifference(int[][] matrix) {
        int primaryDiagonal = 0;
        int secondaryDiagonal = 0;


        for (int i = 0; i < matrix.length; i++) {
            primaryDiagonal += matrix[i][i];
            secondaryDiagonal += matrix[i][(matrix.length - 1) - i];
        }

        return Math.abs(primaryDiagonal - secondaryDiagonal);
    }
}
