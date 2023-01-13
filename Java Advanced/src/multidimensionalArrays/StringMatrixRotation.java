package multidimensionalArrays;

import java.util.*;

public class StringMatrixRotation {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        List<String> inputWords = new ArrayList<>();
        String[] rotationInput = scanner.nextLine().split("[()]");
        int rotate = Integer.parseInt(rotationInput[1]) % 360;
        String input = scanner.nextLine();
        int longestWord = 0;
        while (!input.equals("END")) {
            inputWords.add(input);
            longestWord = Math.max(input.length(), longestWord);
            input = scanner.nextLine();

        }

        int countRow = 0;
        String[] inputRow;
        String[][] matrix = new String[longestWord][inputWords.size()];

        switch (rotate) {
            case 90:
                countRow = inputWords.size() - 1;
                for (int c = 0; c < inputWords.size(); c++) {
                    inputRow = inputWords.get(countRow--).split("");
                    for (int r = 0; r < inputRow.length; r++) {
                        matrix[r][c] = inputRow[r];
                    }
                }
                printMatrix(matrix);
                break;
            case 180:
                for (int r = inputWords.size() - 1; r >= 0; r--) {
                    inputRow = inputWords.get(r).split("");
                    for (int c = inputRow.length - 1; c >= 0; c--) {
                        System.out.print(inputRow[c]);
                    }
                    System.out.println();
                }
                break;
            case 270:
                for (int c = 0; c < inputWords.size(); c++) {
                    countRow = 0;
                    inputRow = inputWords.get(c).split("");
                    for (int r = matrix.length - 1; r >= 0; r--) {
                        if (inputRow.length == countRow) {
                            break;
                        }
                        matrix[r][c] = inputRow[countRow++];
                    }
                }
                printMatrix(matrix);
                break;
            default:
                for (String row : inputWords) {
                    System.out.println(row);
                }
                break;
        }
    }

    private static void printMatrix(String[][] matrix) {
        for (String[] row : matrix) {
            for (String col : row) {
                if (col != null) {
                    System.out.print(col);
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
