package exams._22_10_2022;

import java.util.Scanner;

public class RallyRacing {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int dimension = Integer.parseInt(scanner.nextLine());
        String carNumber = scanner.nextLine();

        char[][] matrix = new char[dimension][];

        for (int i = 0; i < matrix.length; i++) {
            matrix[i] = scanner.nextLine().replace(" ", "").toCharArray();
        }

        int rowCar = 0;
        int colCar = 0;

        int totalKm = 0;
        boolean isFinish = false;

        String command = scanner.nextLine();

        while (!command.equals("End")) {
            int[] playerMove = move(command, rowCar, colCar);
            rowCar = playerMove[0];
            colCar = playerMove[1];

            if (matrix[rowCar][colCar] == 'T') {
                matrix[rowCar][colCar] = '.';
                totalKm += 30;
                for (int i = 0; i < matrix.length; i++) {
                    for (int j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] == 'T') {
                            rowCar = i;
                            colCar = j;
                        }
                    }
                }
                matrix[rowCar][colCar] = '.';
            } else if (matrix[rowCar][colCar] == 'F') {
                totalKm += 10;
                isFinish = true;
                break;
            } else if (matrix[rowCar][colCar] == '.') {
                totalKm += 10;
            }

            command = scanner.nextLine();
        }
        if (isFinish) {
            System.out.printf("Racing car %s finished the stage!%n", carNumber);
        } else {
            System.out.printf("Racing car %s DNF.%n", carNumber);
        }

        System.out.printf("Distance covered %d km.%n", totalKm);

        matrix[rowCar][colCar] = 'C';

        for (char[] chars : matrix) {
            for (char c : chars) {
                System.out.print(c);
            }
            System.out.println();
        }
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