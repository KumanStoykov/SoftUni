package setsAndMaps;

import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class UniqueUsernames {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());

        Set<String> uniqueWords = new LinkedHashSet<>();

        for (int i = 0; i < rows; i++) {
            String wordInput = scanner.nextLine();
            uniqueWords.add(wordInput);
        }

        uniqueWords.forEach(System.out::println);
    }
}
