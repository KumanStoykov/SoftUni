package iteratorsAndComparators.stackIterator;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        CustomStack customStack = new CustomStack();

        boolean hasNoElements = false;

        while (!input.equals("END")) {

            if (input.equals("Pop")) {
                try {
                    customStack.pop();
                } catch (IllegalStateException e) {
                    System.out.println(e.getMessage());
                    hasNoElements = true;
                    break;
                }
            } else if (input.contains("Push")) {
                String inputSubstring = input.substring(5).trim();
                String[] inputSplit = inputSubstring.split(", ");

                Integer[] numbers = Arrays.stream(inputSplit).map(Integer::parseInt)
                        .toArray(Integer[]::new);

                Arrays.stream(numbers).forEach(customStack::push);
            }

            input = scanner.nextLine();
        }

        if (!hasNoElements) {
            customStack.forEach(System.out::println);
        }
    }
}
