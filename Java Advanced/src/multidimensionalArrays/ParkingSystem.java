package multidimensionalArrays;

import java.util.Scanner;

public class ParkingSystem {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String[] dimension = scanner.nextLine().split("\\s+");

        int rowMatrix = Integer.parseInt(dimension[0]);
        int colMatrix = Integer.parseInt(dimension[1]);

        boolean[][] matrix = new boolean[rowMatrix][colMatrix];
        String command = scanner.nextLine();

        for (int i = 0; i < matrix.length; i++) {
            matrix[i][0] = true;
        }

        while (!command.equals("stop")) {
            String[] commandsSplit = command.split("\\s+");

            int entryPoint = Integer.parseInt(commandsSplit[0]);
            int row = Integer.parseInt(commandsSplit[1]);
            int col = Integer.parseInt(commandsSplit[2]);

            int steps = 0;
            boolean isFindPlace = false;

            steps += Math.abs(entryPoint - row) + 1;

            if (!matrix[row][col]) {
                matrix[row][col] = true;
                steps += col;
                isFindPlace = true;
            } else {
                int previesCol = col - 1;
                int nextCol = col + 1;
                int loop = colMatrix;

                while (loop != 0) {
                    if (previesCol > 0 && !matrix[row][previesCol]) {
                        matrix[row][previesCol] = true;
                        steps += previesCol;
                        isFindPlace = true;
                        break;
                    }
                    if (nextCol < colMatrix && !matrix[row][nextCol]) {
                        matrix[row][nextCol] = true;
                        steps += nextCol;
                        isFindPlace = true;
                        break;
                    }

                    previesCol--;
                    nextCol++;
                    loop--;
                }
            }

            if (isFindPlace) {
                System.out.println(steps);
            } else {
                System.out.printf("Row %d full%n", row);
            }
            command = scanner.nextLine();
        }
    }
}
