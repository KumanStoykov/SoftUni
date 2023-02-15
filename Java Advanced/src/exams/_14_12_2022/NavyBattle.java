package exams._14_12_2022;

import java.util.Scanner;

public class NavyBattle {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());

        char[][] matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().toCharArray();
        }

        int submarineHealth = 3;
        int cruisers = 3;

        int[] submarinePosition = findSubmarine(matrix);
        int row = submarinePosition[0];
        int col = submarinePosition[1];

        while (submarineHealth != 0 && cruisers != 0) {
            String command = scanner.nextLine();

            matrix[row][col] = '-';
            int[] move = move(command, row, col);
            row = move[0];
            col = move[1];

            if (matrix[row][col] == '*') {
                submarineHealth--;
                matrix[row][col] = 'S';
            } else if (matrix[row][col] == 'C') {
                cruisers--;
                matrix[row][col] = 'S';
            }

        }

        if (submarineHealth == 0) {
            System.out.printf("Mission failed, U-9 disappeared! Last known coordinates [%d, %d]!%n", row, col);
        } else {
            System.out.println("Mission accomplished, U-9 has destroyed all battle cruisers of the enemy!");
        }

        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c);
            }
            System.out.println();
        }
    }

    private static int[] findSubmarine(char[][] matrix) {
        int row = 0;
        int col = 0;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'S') {
                    row = i;
                    col = j;
                }
            }
        }
        return new int[]{row, col};
    }

    private static int[] move(String command, int row, int col) {
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
}
