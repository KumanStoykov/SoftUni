package multidimensionalArrays;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class ReverseMatrixDiagonal {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int rowMatrix = scanner.nextInt();
        int colMatrix = scanner.nextInt();
        scanner.nextLine();

        int[][] matrix = new int[rowMatrix][colMatrix];

        for (int r = 0; r < matrix.length; r++) {
            int[] inputRow = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt).toArray();
            matrix[r] = inputRow;
        }

        ArrayDeque<String> stack = new ArrayDeque<>();
        StringBuilder sb = new StringBuilder();

        int forRotation = (colMatrix * (rowMatrix + 1)) / 2;

        for (int r = 0; r <= forRotation; r++) {
            for (int c = 0; c <= r; c++) {
                int i = r - c;
                if (i < matrix.length && c < colMatrix) {
                    sb.append(matrix[i][c]).append(" ");
                }
            }
            stack.push(sb.toString());
            sb.setLength(0);
        }
        while (!stack.isEmpty()) {
            System.out.println(stack.pop());
        }
    }
}



