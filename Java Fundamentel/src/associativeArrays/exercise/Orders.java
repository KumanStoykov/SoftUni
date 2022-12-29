package associativeArrays.exercise;

import java.util.*;

public class Orders {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        Map<String, Map<String, Double>> products = new HashMap<>();
        Map<String, Double> productsToPrint = new LinkedHashMap<>();

        while (!input.equals("buy")) {
            String[] inputData = input.split("\\s+");
            String productName = inputData[0];
            Double price = Double.parseDouble(inputData[1]);
            Double quantity = Double.parseDouble(inputData[2]);

            if (products.containsKey(productName)) {
                Double oldQuantity = products.get(productName).get("oldQuantity");
                Double newTotalSum = price * (oldQuantity + quantity);
                productsToPrint.put(productName, newTotalSum);

                products.get(productName).put("oldQuantity", oldQuantity + quantity);
            } else {
                products.put(productName, new HashMap<>());
                products.get(productName).put("oldPrice", price);
                products.get(productName).put("oldQuantity", quantity);
                productsToPrint.put(productName, price * quantity);
            }

            input = scanner.nextLine();
        }
        productsToPrint.forEach((k, v) -> System.out.printf("%s -> %.2f%n", k, v));
    }
}
