package functionalProgramming;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class ListOfPredicates {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int range = Integer.parseInt(br.readLine());

        int[] numToDivisible = Arrays.stream(br.readLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        Predicate<Integer> check = i -> {
            for (int n : numToDivisible) {
                if (i % n != 0) {
                    return false;
                }
            }
            return true;
        };

        Consumer<Integer> print = e -> System.out.printf("%d ", e);

        for (int n = 1; n <= range; n++) {
            if (check.test(n)) {
                print.accept(n);
            }
        }
    }
}
