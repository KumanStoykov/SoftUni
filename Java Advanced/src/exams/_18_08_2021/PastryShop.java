package exams._18_08_2021;

import java.util.*;

public class PastryShop {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> liquidsQueue = new ArrayDeque<>();
        ArrayDeque<Integer> ingredientsStack = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).forEach(liquidsQueue::offer);
        Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).forEach(ingredientsStack::push);

        Map<String, Integer> products = new LinkedHashMap<>();
        products.put("Biscuit", 0);
        products.put("Cake", 0);
        products.put("Pie", 0);
        products.put("Pastry", 0);

        while (!liquidsQueue.isEmpty() && !ingredientsStack.isEmpty()) {
            int liquid = liquidsQueue.poll();
            int ingredient = ingredientsStack.pop();
            int sum = liquid + ingredient;

            switch (sum) {
                case 25:
                    products.put("Biscuit", products.get("Biscuit") + 1);
                    break;
                case 50:
                    products.put("Cake", products.get("Cake") + 1);
                    break;
                case 75:
                    products.put("Pastry", products.get("Pastry") + 1);
                    break;
                case 100:
                    products.put("Pie", products.get("Pie") + 1);
                    break;
                default:
                    ingredientsStack.push(ingredient + 3);
                    break;
            }
        }

        boolean isSuccessful = products.entrySet().stream().allMatch(p -> p.getValue() >= 1);

        if (isSuccessful) {
            System.out.println("Great! You succeeded in cooking all the food!");
        } else {
            System.out.println("What a pity! You didn't have enough materials to cook everything.");
        }

        if (liquidsQueue.isEmpty()) {
            System.out.println("Liquids left: none");
        } else {
            String[] liquidsArr = liquidsQueue.stream().map(String::valueOf).toArray(String[]::new);
            System.out.println("Liquids left: " + String.join(", ", liquidsArr));
        }

        if (ingredientsStack.isEmpty()) {
            System.out.println("Ingredients left: none");
        } else {
            String[] ingredientsArr = ingredientsStack.stream().map(String::valueOf).toArray(String[]::new);
            System.out.println("Ingredients left: " + String.join(", ", ingredientsArr));
        }

        products.entrySet().forEach(p -> System.out.println(p.getKey() + ": " + p.getValue()));
    }
}
