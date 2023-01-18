package setsAndMaps;

import java.util.*;

public class LogsAggregator {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Map<String, TreeSet<String>> users = new TreeMap<>();
        Map<String, Integer> userDurations = new HashMap<>();

        int rows = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < rows; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String ip = input[0];
            String user = input[1];
            int duration = Integer.parseInt(input[2]);

            users.putIfAbsent(user, new TreeSet<>());
            users.get(user).add(ip);
            userDurations.putIfAbsent(user, 0);
            userDurations.put(user, userDurations.get(user) + duration);
        }

        users.forEach((k, v) -> {
            System.out.printf("%s: %d [%s]%n", k, userDurations.get(k), String.join(", ", v));
        });

    }
}

