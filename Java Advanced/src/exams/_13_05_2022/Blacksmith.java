package exams._13_05_2022;

import java.util.*;

public class Blacksmith {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> steelQueue = new ArrayDeque<>();
        ArrayDeque<Integer> carbonStack = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).forEach(steelQueue::offer);
        Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).forEach(carbonStack::push);

        Map<String, Integer> swords = new TreeMap<>();

        while (!steelQueue.isEmpty() && !carbonStack.isEmpty()) {
            int steel = steelQueue.poll();
            int carbon = carbonStack.pop();
            int sum = steel + carbon;

            if (sum == 70) {
                swords.putIfAbsent("Gladius", 0);
                swords.put("Gladius", swords.get("Gladius") + 1);
            } else if (sum == 80) {
                swords.putIfAbsent("Shamshir", 0);
                swords.put("Shamshir", swords.get("Shamshir") + 1);
            } else if (sum == 90) {
                swords.putIfAbsent("Katana", 0);
                swords.put("Katana", swords.get("Katana") + 1);
            } else if (sum == 110) {
                swords.putIfAbsent("Sabre", 0);
                swords.put("Sabre", swords.get("Sabre") + 1);
            } else {
                carbonStack.push(carbon + 5);
            }
        }

        if (!swords.isEmpty()) {
            int sumOfSwords = swords.values().stream().reduce(0, Integer::sum);

            System.out.printf("You have forged %d swords.%n", sumOfSwords);
        } else {
            System.out.println("You did not have enough resources to forge a sword.");
        }

        if (steelQueue.isEmpty()) {
            System.out.println("Steel left: none");
        } else {
            String queueJoin = String.join(", ", steelQueue.stream().map(String::valueOf).toArray(String[]::new));
            System.out.printf("Steel left: %s%n", queueJoin);
        }

        if (carbonStack.isEmpty()) {
            System.out.println("Carbon left: none");
        } else {
            String carbonJoin = String.join(", ", carbonStack.stream().map(String::valueOf).toArray(String[]::new));
            System.out.printf("Carbon left: %s%n", carbonJoin);
        }

        swords.forEach((k, v) -> System.out.println(k + ": " + v));
    }
}
