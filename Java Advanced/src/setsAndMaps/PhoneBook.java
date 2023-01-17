package setsAndMaps;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Scanner;

public class PhoneBook {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, String> phoneBook = new HashMap<>();

        String untilSearch = scanner.nextLine();
        while (!untilSearch.equals("search")) {
            String name = untilSearch.split("-")[0];
            String number = untilSearch.split("-")[1];
            phoneBook.putIfAbsent(name, number);

            untilSearch = scanner.nextLine();
        }
        String untilStop = scanner.nextLine();
        while (!untilStop.equals("stop")) {
            String name = untilStop;

            if (phoneBook.containsKey(name)) {
                phoneBook.forEach((key, value) -> {
                    if (Objects.equals(phoneBook.get(name), value)) {
                        System.out.printf("%s -> %s%n", key, value);
                    }
                });
            } else {
                System.out.println("Contact " + name + " does not exist.");
            }

            untilStop = scanner.nextLine();
        }
    }
}
