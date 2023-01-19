package setsAndMaps;

import java.util.*;

public class LegendaryFarming {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Map<String, Integer> keyMaterials = new TreeMap<>(Map.of("fragments", 0, "motes", 0, "shards", 0));
        Map<String, Integer> junks = new TreeMap<>();

        boolean isWin = false;

        while (true) {
            String[] input = scanner.nextLine().split("\\s+");

            for (int i = 1; i <= input.length; i += 2) {
                int count = Integer.parseInt(input[i - 1]);
                String model = input[i].toLowerCase();

                if (keyMaterials.containsKey(model)) {
                    keyMaterials.put(model, keyMaterials.get(model) + count);
                } else {
                    junks.putIfAbsent(model, 0);
                    junks.put(model, junks.get(model) + count);
                }

                if (keyMaterials.containsKey(model) && keyMaterials.get(model) > 249) {
                    isWin = true;
                    printResult(keyMaterials, junks, model);
                    break;
                }
            }

            if (isWin) {
                break;
            }
        }
    }

    private static void printResult(Map<String, Integer> keyMaterials, Map<String, Integer> junks, String model) {
        keyMaterials.put(model, keyMaterials.get(model) - 250);
        switch (model) {
            case "shards": System.out.println("Shadowmourne obtained!"); break;
            case "fragments": System.out.println("Valanyr obtained!"); break;
            case "motes": System.out.println("Dragonwrath obtained!"); break;
        }

        keyMaterials.entrySet().stream().sorted(Map.Entry.comparingByValue(Comparator.reverseOrder())).forEach(e -> {
                System.out.printf("%s: %d%n", e.getKey(), e.getValue());
        });
        junks.forEach((k, v) -> System.out.printf("%s: %d%n", k, v));
    }
}
