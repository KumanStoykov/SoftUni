package multidimensionalArrays;

import java.util.Arrays;
import java.util.Scanner;

public class MatrixShuffling {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimension = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        String[][] matrix = new String[dimension[0]][dimension[1]];

        for (int r = 0; r < matrix.length; r++) {
            String[] inputLine = scanner.nextLine().split("\\s+");

            matrix[r] = inputLine;
        }

        String commandsInput = scanner.nextLine();

        while (!commandsInput.equals("END")) {
            String[] commandsSplit = commandsInput.split("\\s+");
            String command = commandsSplit[0];

            if (commandsSplit.length == 5 && command.equals("swap")) {
                int firstRow = Integer.parseInt(commandsSplit[1]);
                int firstCol = Integer.parseInt(commandsSplit[2]);
                int secondRow = Integer.parseInt(commandsSplit[3]);
                int secondCol = Integer.parseInt(commandsSplit[4]);

                if (isInBounders(matrix, firstRow, firstCol) && isInBounders(matrix, secondRow, secondCol)) {
                    String firstNum = matrix[firstRow][firstCol];
                    String secNum = matrix[secondRow][secondCol];
                    matrix[firstRow][firstCol] = secNum;
                    matrix[secondRow][secondCol] = firstNum;
                    printMatrix(matrix);
                } else {
                    System.out.println("Invalid input!");
                }

            } else {
                System.out.println("Invalid input!");
            }


            commandsInput = scanner.nextLine();
        }
    }

    private static void printMatrix(String[][] matrix) {
        for (String[] row : matrix) {
            for (String col : row) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
    }

    private static boolean isInBounders(String[][] matrix, int row, int col) {
        return row >= 0 && row <= matrix.length && col >= 0 && col <= matrix.length;
    }
}
