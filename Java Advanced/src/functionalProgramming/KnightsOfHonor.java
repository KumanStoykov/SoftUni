package functionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;

public class KnightsOfHonor {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Consumer<String> printSirName = name -> System.out.println("Sir " + name);

        Arrays.stream(scanner.nextLine().split("\\s+"))
                .forEach(printSirName);
    }
}
