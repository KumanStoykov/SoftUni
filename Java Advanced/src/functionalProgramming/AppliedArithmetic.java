package functionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.BiFunction;
import java.util.function.Consumer;

public class AppliedArithmetic {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        BiFunction<Integer[], String, Integer[]> arithmetics = (intArray, command) -> {
            switch (command) {
                case "add": return Arrays.stream(intArray).map(x -> x + 1).toArray(Integer[]::new);
                case "multiply": return Arrays.stream(intArray).map(x -> x * 2).toArray(Integer[]::new);
                case "subtract": return Arrays.stream(intArray).map(x -> x - 1).toArray(Integer[]::new);
                default: return intArray;
            }
        };

        Consumer<Integer[]> printArray = intArray -> Arrays.stream(intArray).forEach(x -> System.out.print(x + " "));;

        Integer[] numbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).toArray(Integer[]::new);

        String command = scanner.nextLine();
        boolean hasPrinted = false;
        while (!command.equals("end")) {

            if(command.equals("print")) {
               printArray.accept(numbers);
                System.out.println();
                hasPrinted = true;
            } else {
              numbers = arithmetics.apply(numbers, command);
            }

            command = scanner.nextLine();
        }

        if (!hasPrinted) printArray.accept(numbers);
    }
}
