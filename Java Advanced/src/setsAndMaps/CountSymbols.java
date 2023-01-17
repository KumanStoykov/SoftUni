package setsAndMaps;

import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class CountSymbols {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split("");

        if (input.length > 0 && !input[0].equals("")) {
            TreeMap<String, Integer> wordsCounter = new TreeMap<>();

            for (String c : input) {

                if (wordsCounter.containsKey(c)) {
                    int oldCount = wordsCounter.get(c) + 1;
                    wordsCounter.put(c, oldCount);
                } else {
                    wordsCounter.put(c, 1);
                }
            }

            for (Map.Entry<String, Integer> word : wordsCounter.entrySet()) {
                System.out.printf("%s: %d time/s%n", word.getKey(), word.getValue());
            }
        }

    }
}
