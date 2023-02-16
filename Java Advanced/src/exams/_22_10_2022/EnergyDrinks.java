package exams._22_10_2022;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class EnergyDrinks {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> caffeineStack = new ArrayDeque<>();
        ArrayDeque<Integer> drinksQueue = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split(", ")).map(Integer::parseInt)
                .forEach(caffeineStack::push);
        Arrays.stream(scanner.nextLine().split(", ")).map(Integer::parseInt)
                .forEach(drinksQueue::offer);

        int totalCaffeine = 0;

        while (totalCaffeine <= 300 && !drinksQueue.isEmpty() && !caffeineStack.isEmpty()) {
            int caffeine = caffeineStack.pop();
            int drink = drinksQueue.poll();
            int sum = caffeine * drink;

            if (sum + totalCaffeine <= 300) {
                totalCaffeine += sum;
            } else {
                totalCaffeine = Math.max(totalCaffeine - 30, 0);
                drinksQueue.offer(drink);
            }
        }

        if (drinksQueue.isEmpty()) {
            System.out.println("At least Stamat wasn't exceeding the maximum caffeine.");
        } else {
            String[] drinksArr = drinksQueue.stream().map(String::valueOf).toArray(String[]::new);
            System.out.printf("Drinks left: %s%n", String.join(", ", drinksArr));
        }

        System.out.printf("Stamat is going to sleep with %d mg caffeine.", totalCaffeine);
    }
}
