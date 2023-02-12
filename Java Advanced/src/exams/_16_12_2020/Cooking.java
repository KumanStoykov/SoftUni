package exams._16_12_2020;

import java.util.*;
import java.util.stream.Collectors;

public class Cooking {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> liquidQueue = new ArrayDeque<>();
        ArrayDeque<Integer> ingredientStack = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split("\\s+"))
                .forEach(l -> liquidQueue.offer(Integer.parseInt(l)));
        Arrays.stream(scanner.nextLine().split("\\s+"))
                .forEach(i -> ingredientStack.push(Integer.parseInt(i)));

        Map<String, Integer> foods = new TreeMap<>();
        foods.put("Bread", 0);
        foods.put("Cake", 0);
        foods.put("Fruit Pie", 0);
        foods.put("Pastry", 0);

        while (!liquidQueue.isEmpty() && !ingredientStack.isEmpty()) {
            int liquid = liquidQueue.peek();
            int ingredient = ingredientStack.peek();
            int ingredientSum = liquid + ingredient;

            if (ingredientSum == 25) {
                liquidQueue.poll();
                ingredientStack.pop();
                foods.put("Bread", foods.get("Bread") + 1);
            } else if (ingredientSum == 50) {
                liquidQueue.poll();
                ingredientStack.pop();
                foods.put("Cake", foods.get("Cake") + 1);
            } else if (ingredientSum == 75) {
                liquidQueue.poll();
                ingredientStack.pop();
                foods.put("Pastry", foods.get("Pastry") + 1);
            } else if (ingredientSum == 100) {
                liquidQueue.poll();
                ingredientStack.pop();
                foods.put("Fruit Pie", foods.get("Fruit Pie") + 1);
            } else {
                liquidQueue.poll();
                int oldInd = ingredientStack.pop();
                ingredientStack.push(oldInd + 3);
            }
        }

        boolean hasAllFoods = foods.entrySet().stream().allMatch(f -> f.getValue() > 0);

        if(hasAllFoods) {
            System.out.println("Wohoo! You succeeded in cooking all the food!");
        } else {
            System.out.println("Ugh, what a pity! You didn't have enough materials to cook everything.");
        }

        if(liquidQueue.isEmpty()) {
            System.out.println("Liquids left: none");
        } else {
            String[] toStringArr = liquidQueue.stream().map(String::valueOf).toArray(String[]::new);
            System.out.printf("Liquids left: %s%n", String.join(", ", toStringArr));
        }

        if(ingredientStack.isEmpty()) {
            System.out.println("Ingredients left: none");
        } else {
            String[] toStringArr = ingredientStack.stream().map(String::valueOf).toArray(String[]::new);
            System.out.printf("Ingredients left: %s%n", String.join(", ", toStringArr));
        }

        for (String f : foods.keySet()) {
            System.out.printf("%s: %d%n", f, foods.get(f));
        }
    }
}
