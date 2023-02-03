package exams._22_02_2020;


import java.util.Scanner;

public class ReVolt {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());
        int countCommands = Integer.parseInt(scanner.nextLine());

        char[][] matrix = new char[dimension][];

        int rowPlayer = 0;
        int colPlayer = 0;

        for (int i = 0; i < matrix.length; i++) {
            char[] inputRow = scanner.nextLine().toCharArray();
            matrix[i] = new char[inputRow.length];

            for (int j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = inputRow[j];
                if (inputRow[j] == 'f') {
                    rowPlayer = i;
                    colPlayer = j;
                }
            }
        }
        int newRow = rowPlayer;
        int newCol = colPlayer;
        boolean isWon = false;

        while (countCommands-- != 0 && !isWon) {
            String command = scanner.nextLine();

            int[] newPosition = checkNewPosition(matrix, command, newRow, newCol);
            newRow = newPosition[0];
            newCol = newPosition[1];


            if (matrix[newRow][newCol] == 'B') {
                int[] bonusMoved = checkNewPosition(matrix, command, newRow, newCol);
                newRow = bonusMoved[0];
                newCol = bonusMoved[1];
            }
            if (matrix[newRow][newCol] == '-') {
                matrix[rowPlayer][colPlayer] = '-';
                rowPlayer = newRow;
                colPlayer = newCol;
                matrix[rowPlayer][colPlayer] = 'f';
            }
            if (matrix[newRow][newCol] == 'F') {
                matrix[rowPlayer][colPlayer] = '-';
                rowPlayer = newRow;
                colPlayer = newCol;
                matrix[rowPlayer][colPlayer] = 'f';
                isWon = true;
            }
            if(matrix[newRow][newCol] == 'T'){
                newRow = rowPlayer;
                newCol = colPlayer;
            }

        }

        if (isWon) {
            System.out.println("Player won!");
        } else {
            System.out.println("Player lost!");
        }

        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c);
            }
            System.out.println();
        }
    }

    private static int[] movedPlayer(String command, int row, int col) {
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

    private static int[] checkNewPosition(char[][] matrix, String command, int rowPlayer, int colPlayer) {
        int[] move = movedPlayer(command, rowPlayer, colPlayer);
        int row = move[0];
        int col = move[1];

        if (row < 0) {
            row = matrix.length - 1;
        }
        if (row >= matrix.length) {
            row = 0;
        }
        if (col < 0) {
            col = matrix.length - 1;
        }
        if (col >= matrix.length) {
            col = 0;
        }
        return new int[]{row, col};
    }
}
