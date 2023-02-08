package iteratorsAndComparators.froggy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Integer[] input = Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt).toArray(Integer[]::new);

        Lake lake = new Lake(input);

        List<String> printList = new ArrayList<>();

        for (Integer num : lake) {
            printList.add(String.valueOf(num));
        }
        System.out.println(String.join(", ", printList));

        scanner.nextLine();
    }
}
