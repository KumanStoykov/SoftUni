package functionalProgramming;

import java.util.*;
import java.util.function.Consumer;
import java.util.function.Function;

public class ReverseAndExclude {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Function<int[], int[]> reverseFunc = arr -> {
            int[] reversedArr = new int[arr.length];
            for (int i = arr.length - 1; i >= 0; i--) {
                reversedArr[(arr.length - 1) - i] = arr[i];
            }
            return reversedArr;
        };

        Consumer<int[]> printArr = arr -> {
            Arrays.stream(arr).forEach(e -> System.out.print(e + " "));
        };

        int[] arrNums = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        int divisor = Integer.parseInt(scanner.nextLine());

        int[] filteredArr = Arrays.stream(arrNums)
                .filter(e -> e % divisor != 0).toArray();


        printArr.accept(reverseFunc.apply(filteredArr));
    }
}
