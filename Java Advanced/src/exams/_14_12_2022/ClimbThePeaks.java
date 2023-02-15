package exams._14_12_2022;

import java.util.*;

public class ClimbThePeaks {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> foodStack = new ArrayDeque<>();
        ArrayDeque<Integer> staminaQueue = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt).forEach(foodStack::push);
        Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt).forEach(staminaQueue::offer);

        Map<String, Integer> conquered = new LinkedHashMap<>();
        conquered.put("Vihren", 80);
        conquered.put("Kutelo", 90);
        conquered.put("Banski Suhodol", 100);
        conquered.put("Polezhan", 60);
        conquered.put("Kamenitza", 70);

        while (!foodStack.isEmpty() && !staminaQueue.isEmpty()) {
            int food = foodStack.pop();
            int stamina = staminaQueue.poll();
            int sum = food + stamina;

            int climb = 0;

            if (conquered.get("Vihren") > 0) {
                climb = sum >= conquered.get("Vihren") ? 0 : conquered.get("Vihren");
                conquered.put("Vihren", climb);
            } else if (conquered.get("Kutelo") > 0) {
                climb = sum >= conquered.get("Kutelo") ? 0 : conquered.get("Kutelo");
                conquered.put("Kutelo", climb);
            } else if (conquered.get("Banski Suhodol") > 0) {
                climb = sum >= conquered.get("Banski Suhodol") ? 0 : conquered.get("Banski Suhodol");
                conquered.put("Banski Suhodol", climb);
            } else if (conquered.get("Polezhan") > 0) {
                climb = sum >= conquered.get("Polezhan") ? 0 : conquered.get("Polezhan");
                conquered.put("Polezhan", climb);
            } else if (conquered.get("Kamenitza") > 0) {
                climb = sum >= conquered.get("Kamenitza") ? 0 : conquered.get("Kamenitza");
                conquered.put("Kamenitza", climb);
            }

        }
        boolean isAllClimbed = conquered.entrySet().stream().allMatch(x -> x.getValue() == 0);

        if (isAllClimbed) {
            System.out.println("Alex did it! He climbed all top five Pirin peaks in one week -> @FIVEinAWEEK");
        } else {
            System.out.println("Alex failed! He has to organize his journey better next time -> @PIRINWINS");
        }
        boolean isAnyClimbed = conquered.entrySet().stream().anyMatch(x -> x.getValue() == 0);

        if (isAnyClimbed) {
            System.out.println("Conquered peaks:");
            conquered.forEach((key, value) -> {
                if (value == 0) {
                    System.out.println(key);
                }
            });
        }


    }
}
