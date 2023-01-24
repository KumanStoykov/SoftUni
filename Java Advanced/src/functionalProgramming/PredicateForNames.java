package functionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Predicate;

public class PredicateForNames {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int maxLength = Integer.parseInt(scanner.nextLine());
        Predicate<String> checkLength = word -> word.length() <= maxLength;

        String[] names = scanner.nextLine().split("\\s+");

        Arrays.stream(names).filter(checkLength).forEach(System.out::println);
    }
}
