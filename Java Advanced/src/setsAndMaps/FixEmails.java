package setsAndMaps;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class FixEmails {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Map<String, String> emails = new LinkedHashMap<>();

        String command = scanner.nextLine();

        while (!command.equals("stop")) {
            String name = command;
            String email = scanner.nextLine();

            if(!email.endsWith("us") && !email.endsWith("uk") && !email.endsWith("com")) {
                emails.put(name, email);
            }

            command = scanner.nextLine();
        }

        emails.forEach((k, v) -> System.out.println(k + " -> " + v));

    }
}
