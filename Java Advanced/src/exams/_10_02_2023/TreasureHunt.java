package exams._10_02_2023;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class TreasureHunt {
    static int playerRow = 0;
    static int playerCol = 0;
    static List<String> path = new ArrayList<>();
    static char[][] matrix;

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int[] matrixDimension = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        int rowMatrix = matrixDimension[0];
        int colMatrix = matrixDimension[1];

        matrix = new char[rowMatrix][];


        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().replace(" ", "").toCharArray();
        }

        findPlayer(matrix);

        String command = scanner.nextLine();

        while (!command.equals("Finish")) {

            moving(command, rowMatrix, colMatrix);

            command = scanner.nextLine();
        }

        if (matrix[playerRow][playerCol] == 'X') {
            System.out.println("I've found the treasure!");
            System.out.println("The right path is " + String.join(", ", path));
        } else {
            System.out.println("The map is fake!");
        }
    }

    private static void findPlayer(char[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {

                if (matrix[i][j] == 'Y') {
                    playerRow = i;
                    playerCol = j;
                }
            }
        }
    }

    private static void moving(String command, int rowMatrix, int colMatrix) {
        switch (command) {
            case "up":
                if (playerRow - 1 >= 0 && matrix[playerRow - 1][playerCol] != 'T') {
                    playerRow--;
                    path.add("up");
                }
                break;
            case "down":
                if (playerRow + 1 < rowMatrix && matrix[playerRow + 1][playerCol] != 'T') {
                    path.add("down");
                    playerRow++;
                }
                break;
            case "left":
                if (playerCol - 1 >= 0 && matrix[playerRow][playerCol - 1] != 'T') {
                    path.add("left");
                    playerCol--;
                }
                break;
            case "right":
                if (playerCol + 1 < colMatrix && matrix[playerRow][playerCol + 1] != 'T') {
                    path.add("right");
                    playerCol++;
                }
                break;
        }
    }
}

