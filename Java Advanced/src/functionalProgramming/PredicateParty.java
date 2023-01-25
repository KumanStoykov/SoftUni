package functionalProgramming;

import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateParty {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<String> names = Arrays.stream(scanner.nextLine().split("\\s+"))
                .collect(Collectors.toList());

        String input = scanner.nextLine();

        while (!input.equals("Party!")) {

            String command = input.split("\\s+")[0];
            String subCommand = input.split("\\s+")[1];
            String condition = input.split("\\s+")[2];

            if (command.equals("Remove")) {
                names.removeIf(nameIsExisting(subCommand, condition));
            } else if (command.equals("Double")) {
                for (int i = 0; i < names.size(); i++) {
                    String name = names.get(i);
                    if (nameIsExisting(subCommand, condition).test(name)) {
                        names.add(i++, name);
                    }
                }
            }

            input = scanner.nextLine();
        }
        printNames(names);
    }

    private static void printNames(List<String> names) {
        if (!names.isEmpty()) {
            Collections.sort(names);
            System.out.println(String.join(", ", names) + " are going to the party!");
        } else {
            System.out.println("Nobody is going to the party!");
        }
    }

    private static Predicate<String> nameIsExisting(String subCommand, String condition) {
        switch (subCommand) {
            case "StartsWith": return str -> str.startsWith(condition);
            case "EndsWith": return str -> str.endsWith(condition);
            case "Length": return str -> str.length() == Integer.parseInt(condition);
            default: return str -> false;
        }
    }
}

