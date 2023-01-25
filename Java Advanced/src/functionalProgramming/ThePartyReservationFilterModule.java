package functionalProgramming;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ThePartyReservationFilterModule {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> names = Arrays.stream(scanner.nextLine().split("\\s+")).collect(Collectors.toList());

        String input = scanner.nextLine();

        List<String> commands = new ArrayList<>();

        while (!input.equals("Print")) {
            if (input.startsWith("Add")) {
                commands.add(input);
            } else {
                String oldCommand = input.replace("Remove", "Add");
                commands.remove(oldCommand);
            }

            input = scanner.nextLine();
        }

        for (String command : commands) {
            String[] commandSplit = command.split(";");
            String filter = commandSplit[1];
            String condition = commandSplit[2];

            names.removeIf(nameIsExisting(filter, condition));
        }
        System.out.println(String.join(" ", names));
    }

    private static Predicate<String> nameIsExisting(String filter, String condition) {
        switch (filter) {
            case "Starts with": return str -> str.startsWith(condition);
            case "Ends with": return str -> str.endsWith(condition);
            case "Contains": return str -> str.contains(condition);
            case "Length": return str -> str.length() == Integer.parseInt(condition);
            default: return str -> false;
        }
    }
}
