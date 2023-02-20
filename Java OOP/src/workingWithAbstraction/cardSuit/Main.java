package workingWithAbstraction.cardSuit;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        CardSuits[] cardSuits = CardSuits.values();
        System.out.println(input + ":");
        Arrays.stream(cardSuits).forEach(c -> {
            System.out.println(c.toString());
        });
    }
}
