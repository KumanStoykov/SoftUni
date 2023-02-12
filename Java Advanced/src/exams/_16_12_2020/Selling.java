package exams._16_12_2020;

import java.util.Scanner;

public class Selling {
    public static char[][] matrix;
    public static int playerRow = 0;
    public static int playerCol = 0;

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());

        matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().toCharArray();
        }
        findPlayer();
        int money = 0;
        while (money < 50) {
            String command = scanner.nextLine();
            matrix[playerRow][playerCol] = '-';
            move(command);

            if (isInBounders()) {
                if (Character.isDigit(matrix[playerRow][playerCol])) {
                    int clientMoney = Integer.parseInt(String.valueOf(matrix[playerRow][playerCol]));
                    money += clientMoney;
                    matrix[playerRow][playerCol] = 'S';

                } else if (matrix[playerRow][playerCol] == 'O') {
                    matrix[playerRow][playerCol] = '-';
                    int pillarsRow = 0;
                    int pillarCol = 0;

                    for (int i = 0; i < matrix.length; i++) {
                        for (int j = 0; j < matrix[i].length; j++) {
                            if (matrix[i][j] == 'O') {
                                pillarsRow = i;
                                pillarCol = j;
                            }
                        }
                    }
                    playerRow = pillarsRow;
                    playerCol = pillarCol;
                }
            } else {
                break;
            }
        }
        if (money > 49) {
            System.out.println("Good news! You succeeded in collecting enough money!");
        } else {
            System.out.println("Bad news, you are out of the bakery.");
        }

        System.out.printf("Money: %d%n", money);

        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c);
            }
            System.out.println();
        }
    }

    private static boolean isInBounders() {
        return playerRow >= 0 && playerRow < matrix.length && playerCol >= 0 && playerCol < matrix.length;
    }

    private static void move(String command) {
        switch (command) {
            case "up":
                playerRow--;
                break;
            case "down":
                playerRow++;
                break;
            case "left":
                playerCol--;
                break;
            case "right":
                playerCol++;
                break;
        }
    }

    private static void findPlayer() {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 'S') {
                    playerRow = i;
                    playerCol = j;
                }
            }
        }
    }
}
