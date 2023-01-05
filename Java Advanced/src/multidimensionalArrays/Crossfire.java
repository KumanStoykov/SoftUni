package multidimensionalArrays;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Crossfire {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        List<List<Integer>> matrix = fillMatrix(scanner);

        String command = scanner.nextLine();
        while (!command.equals("Nuke it from orbit")) {
            int[] input = Arrays.stream(command.split("\\s+"))
                    .mapToInt(Integer::parseInt).toArray();
            int bombRow = input[0];
            int bombCol = input[1];
            int bombRange = input[2];


            for (int i = bombRow - bombRange; i <= bombRow + bombRange; i++) {
                if (bombIsInRange(matrix, i, bombCol) && i != bombRow) {
                    matrix.get(i).remove(bombCol);
                }
            }

            for (int i = bombCol + bombRange; i >= bombCol - bombRange; i--) {
                if (bombIsInRange(matrix, bombRow, i)) {
                    matrix.get(bombRow).remove(i);
                }
            }

            matrix.removeIf(List::isEmpty);
            command = scanner.nextLine();
        }
        printMatrix(matrix);
    }


    private static List<List<Integer>> fillMatrix(Scanner scanner) {
        int[] dimension = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        List<List<Integer>> matrix = new ArrayList<>();
        int counter = 1;

        for (int r = 0; r < dimension[0]; r++) {
            matrix.add(new ArrayList<>());
            for (int c = 0; c < dimension[1]; c++) {
                matrix.get(r).add(counter);
                counter++;
            }
        }
        return matrix;
    }

    private static boolean bombIsInRange(List<List<Integer>> matrix, int r, int c) {
        return r >= 0 && r < matrix.size() && c >= 0 && c < matrix.get(r).size();
    }

    private static void printMatrix(List<List<Integer>> matrix) {

        for (List<Integer> row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }
}
