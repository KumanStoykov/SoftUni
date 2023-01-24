package functionalProgramming;

import java.util.*;

public class CustomComparator {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Comparator<Integer> sortFirstEven = (l, r) -> {
            if (l % 2 != 0 && r % 2 == 0) {
                return 1;
            } else if (l % 2 == 0 && r % 2 != 0) {
                return -1;
            } else {
                if (l < r) {
                    return -1;
                } else {
                    return 1;
                }
            }
        };

        Integer[] nums = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).toArray(Integer[]::new);

        Arrays.sort(nums, sortFirstEven);
        Arrays.stream(nums).forEach(n -> System.out.print(n + " "));
    }
}
