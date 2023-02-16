package exams._25_06_2022;

import java.util.*;

public class ItsChocolateTime {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Double> milkQueue = new ArrayDeque<>();
        ArrayDeque<Double> cacaoStack = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Double::parseDouble).forEach(milkQueue::offer);
        Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Double::parseDouble).forEach(cacaoStack::push);

        Map<String, Integer> chocolates = new TreeMap<>();

        while (!milkQueue.isEmpty() && !cacaoStack.isEmpty()) {
            double milk = milkQueue.poll();
            double cacao = cacaoStack.pop();
            double sum = (cacao / (milk + cacao)) * 100;

            if (sum == 30) {
                chocolates.putIfAbsent("Milk Chocolate", 0);
                chocolates.put("Milk Chocolate", chocolates.get("Milk Chocolate") + 1);
            } else if (sum == 50) {
                chocolates.putIfAbsent("Dark Chocolate", 0);
                chocolates.put("Dark Chocolate", chocolates.get("Dark Chocolate") + 1);
            } else if (sum == 100) {
                chocolates.putIfAbsent("Baking Chocolate", 0);
                chocolates.put("Baking Chocolate", chocolates.get("Baking Chocolate") + 1);
            } else {
                milkQueue.offer(milk + 10);
            }
        }

        if(chocolates.size() == 3) {
            System.out.println("It’s a Chocolate Time. All chocolate types are prepared.");
        } else {
            System.out.println("Sorry, but you didn't succeed to prepare all types of chocolates.");
        }

        chocolates.forEach((k, v) -> System.out.println("# " + k + " --> " + v));
    }
}
