package exams._10_02_2023;

import java.util.*;
import java.util.stream.Collectors;

public class Bombs {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> bombEffectsQueue = new ArrayDeque<>();
        ArrayDeque<Integer> bombCasingStack = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt)
                .forEach(bombEffectsQueue::offer);

        Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt)
                .forEach(bombCasingStack::push);


        Map<String, Integer> bombs = new TreeMap<>();
        boolean isSuccesses = false;

        while (!bombEffectsQueue.isEmpty() && !bombCasingStack.isEmpty()) {


            int effect = bombEffectsQueue.peek();
            int casing = bombCasingStack.peek();
            int bombSum = effect + casing;

            bombs.putIfAbsent("Datura Bombs", 0);
            bombs.putIfAbsent("Cherry Bombs", 0);
            bombs.putIfAbsent("Smoke Decoy Bombs", 0);

            if (bombSum == 40 || bombSum == 60 || bombSum == 120) {
                bombEffectsQueue.poll();
                bombCasingStack.pop();

                if (bombSum == 40) {
                    bombs.put("Datura Bombs", bombs.get("Datura Bombs") + 1);
                } else if (bombSum == 60) {
                    bombs.put("Cherry Bombs", bombs.get("Cherry Bombs") + 1);
                } else {
                    bombs.put("Smoke Decoy Bombs", bombs.get("Smoke Decoy Bombs") + 1);
                }
            } else {
                int oldCasing = bombCasingStack.pop();
                bombCasingStack.push(oldCasing - 5);
            }

            isSuccesses = bombs.entrySet().stream().noneMatch(b -> b.getValue() < 3);

            if (isSuccesses && bombs.size() == 3) {
                break;
            }
        }

        if (isSuccesses) {
            System.out.println("Bene! You have successfully filled the bomb pouch!");
        } else {
            System.out.println("You don't have enough materials to fill the bomb pouch.");
        }

        if (bombEffectsQueue.isEmpty()) {
            System.out.println("Bomb Effects: empty");
        } else {
            String bombEffectsJoining = bombEffectsQueue.stream()
                    .map(String::valueOf).collect(Collectors.joining(", "));
            System.out.println("Bomb Effects: " + String.join(", ", bombEffectsJoining));
        }

        if (bombCasingStack.isEmpty()) {
            System.out.println("Bomb Casings: empty");
        } else {
            String bombCasingJoining = bombCasingStack.stream()
                    .map(String::valueOf).collect(Collectors.joining(", "));
            System.out.println("Bomb Casings: " + String.join(", ", bombCasingJoining));
        }

        for (String b : bombs.keySet()) {
            System.out.println(b + ": " + bombs.get(b));
        }
    }
}

