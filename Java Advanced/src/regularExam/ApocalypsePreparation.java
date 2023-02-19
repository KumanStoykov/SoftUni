package regularExam;

import java.util.*;

public class ApocalypsePreparation {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> textileQueue = new ArrayDeque<>();
        Arrays.stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt).forEach(textileQueue::offer);

        ArrayDeque<Integer> medicamentStack = new ArrayDeque<>();
        Arrays.stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt).forEach(medicamentStack::push);

        Map<String, Integer> items = new TreeMap<>();


        while (!textileQueue.isEmpty() && !medicamentStack.isEmpty()) {
            int textile = textileQueue.poll();
            int medicament = medicamentStack.pop();
            int sum = textile + medicament;

            if (sum >= 100) {
                items.putIfAbsent("MedKit", 0);
                items.put("MedKit", items.get("MedKit") + 1);
                if (medicamentStack.size() > 0) {
                    medicamentStack.push(medicamentStack.pop() + Math.max(sum - 100, 0));
                }

            } else if (sum == 40) {
                items.putIfAbsent("Bandage", 0);
                items.put("Bandage", items.get("Bandage") + 1);

            } else if (sum == 30) {
                items.putIfAbsent("Patch", 0);
                items.put("Patch", items.get("Patch") + 1);

            } else {
                medicamentStack.push(medicament + 10);
            }
        }

        if (textileQueue.isEmpty() && medicamentStack.isEmpty()) {
            System.out.println("Textiles and medicaments are both empty.");
        } else if (textileQueue.isEmpty()) {
            System.out.println("Textiles are empty.");
        } else {
            System.out.println("Medicaments are empty.");
        }

        items.entrySet().stream()
                .sorted((l, r) -> r.getValue() - l.getValue())
                .forEach(i -> System.out.println(i.getKey() + " - " + i.getValue()));

        if (!medicamentStack.isEmpty()) {
            String medicamentsJoin = String.join(", ", medicamentStack.stream().map(String::valueOf).toArray(String[]::new));
            System.out.println("Medicaments left: " + medicamentsJoin);
        }
        if (!textileQueue.isEmpty()) {
            String textileJoin = String.join(", ", textileQueue.stream().map(String::valueOf).toArray(String[]::new));
            System.out.println("Textiles left: " + textileJoin);
        }
    }
}
