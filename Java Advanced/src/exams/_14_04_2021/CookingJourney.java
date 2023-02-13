package exams._14_04_2021;

import java.util.Scanner;

public class CookingJourney {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());

        char[][] matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().toCharArray();
        }

        int[] playerPosition = findPlayer(matrix);
        int rowPlayer = playerPosition[0];
        int colPlayer = playerPosition[1];

        int money = 0;
        while (money < 50) {
            String command = scanner.nextLine();
            int[] playerMove = move(command, rowPlayer, colPlayer);
            matrix[rowPlayer][colPlayer] = '-';
            rowPlayer = playerMove[0];
            colPlayer = playerMove[1];

            if(isInBounders(matrix, rowPlayer, colPlayer)) {
                if(Character.isDigit(matrix[rowPlayer][colPlayer])) {
                    money += Integer.parseInt(String.valueOf(matrix[rowPlayer][colPlayer]));
                    matrix[rowPlayer][colPlayer] = 'S';
                } else if (matrix[rowPlayer][colPlayer] == 'P') {
                    matrix[rowPlayer][colPlayer] = '-';
                    for (int i = 0; i < matrix.length; i++) {
                        for (int j = 0; j < matrix[i].length; j++) {
                            if(matrix[i][j] == 'P') {
                                rowPlayer = i;
                                colPlayer = j;
                                break;
                            }
                        }
                    }
                    matrix[rowPlayer][colPlayer] = 'S';
                }
            } else {
                break;
            }

        }

        if(money >= 50) {
            System.out.println("Good news! You succeeded in collecting enough money!");
        } else {
            System.out.println("Bad news! You are out of the pastry shop.");
        }
        System.out.println("Money: " + money);

        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c);
            }
            System.out.println();
        }

    }

    private static int[] findPlayer(char[][] matrix) {
        int row = 0;
        int col = 0;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'S') {
                    row = i;
                    col = j;
                    break;
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

    private static boolean isInBounders(char[][] matrix, int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix.length;
    }
}
