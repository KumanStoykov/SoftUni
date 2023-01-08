package setsAndMaps;

import java.util.Scanner;
import java.util.TreeSet;

public class PeriodicTable {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());

        TreeSet<String> result = new TreeSet<>();

        for (int i = 0; i < rows; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            for (int j = 0; j < input.length; j++) {
                result.add(input[j]);
            }
        }

        for (String el : result) {
            System.out.print(el + " ");
        }
    }
}
