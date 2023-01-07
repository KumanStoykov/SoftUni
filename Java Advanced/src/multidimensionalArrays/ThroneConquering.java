package multidimensionalArrays;

import java.util.Scanner;

public class ThroneConquering {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int parisEnergy = Integer.parseInt(scanner.nextLine());

        int dimension = Integer.parseInt(scanner.nextLine());

        int helenRow = 0;
        int helenCol = 0;
        int parisRow = 0;
        int parisCol = 0;

        boolean isAbducted = false;

        String[][] matrix = fillMatrix(scanner, dimension);

        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c].equals("H")) {
                    helenRow = r;
                    helenCol = c;
                }
                if (matrix[r][c].equals("P")) {
                    parisRow = r;
                    parisCol = c;
                }
            }
        }

        while (true) {

            String[] commands = scanner.nextLine().split("\\s+");

            String parisCommand = commands[0];
            int enemyRow = Integer.parseInt(commands[1]);
            int enemyCol = Integer.parseInt(commands[2]);

            if (isInBounders(matrix, enemyRow, enemyCol)) {
                matrix[enemyRow][enemyCol] = "S";
            }

            if (parisCommand.equals("up") && isInBounders(matrix, parisRow - 1, parisCol)) {
                matrix[parisRow][parisCol] = "-";
                if (matrix[parisRow - 1][parisCol].equals("S")) {
                    parisEnergy -= 2;
                }
                parisRow--;
            } else if (parisCommand.equals("down") && isInBounders(matrix, parisRow + 1, parisCol)) {
                matrix[parisRow][parisCol] = "-";
                if (matrix[parisRow + 1][parisCol].equals("S")) {
                    parisEnergy -= 2;
                }
                parisRow++;
            } else if (parisCommand.equals("left") && isInBounders(matrix, parisRow, parisCol - 1)) {
                matrix[parisRow][parisCol] = "-";
                if (matrix[parisRow][parisCol - 1].equals("S")) {
                    parisEnergy -= 2;
                }
                parisCol--;
            } else if (parisCommand.equals("right") && isInBounders(matrix, parisRow, parisCol + 1)) {
                matrix[parisRow][parisCol] = "-";
                if (matrix[parisRow][parisCol + 1].equals("S")) {
                    parisEnergy -= 2;
                }
                parisCol++;
            }
            parisEnergy--;

            if (parisRow == helenRow && parisCol == helenCol) {
                matrix[parisRow][parisCol] = "-";
                isAbducted = true;
                break;
            }

            if (parisEnergy <= 0) {
                matrix[parisRow][parisCol] = "X";
                break;
            }
            matrix[parisRow][parisCol] = "P";
        }
        parisEnergy = Math.max(parisEnergy, 0);
        String parisStatus = parisEnergy > 0 || isAbducted ? String.format("Paris has successfully abducted Helen! Energy left: %d", parisEnergy)
                : String.format("Paris died at %d;%d.", parisRow, parisCol);

        System.out.println(parisStatus);

        for (String[] row : matrix) {
            for (String col : row) {
                System.out.print(col);
            }
            System.out.println();
        }
    }

    private static boolean isInBounders(String[][] matrix, int row, int col) {
        return row < matrix.length && row >= 0 && col < matrix.length && col >= 0;
    }

    private static String[][] fillMatrix(Scanner scanner, int dimension) {
        String[][] matrix = new String[dimension][];

        for (int r = 0; r < dimension; r++) {
            String[] inputRow = scanner.nextLine().split("");
            matrix[r] = inputRow;
        }
        return matrix;
    }
}