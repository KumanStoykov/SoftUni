package functionalProgramming;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;
import java.util.function.Function;

public class CustomMinFunction {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Function<Integer[], Integer> smallestNum =
                n -> Arrays.stream(n).min(Comparator.naturalOrder()).orElse(0);


        Integer[] input = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).toArray(Integer[]::new);

        System.out.println(smallestNum.apply(input));
    }
}
