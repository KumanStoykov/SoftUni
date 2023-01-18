package setsAndMaps;

import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class PopulationCounter {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Map<String, LinkedHashMap<String, Long>> countries = new LinkedHashMap<>();
        Map<String, Long> countiesPopulation = new LinkedHashMap<>();

        String input = scanner.nextLine();

        while (!input.equals("report")) {

            String country = input.split("\\|")[1];
            String city = input.split("\\|")[0];
            long population = Long.parseLong(input.split("\\|")[2]);

            countries.putIfAbsent(country, new LinkedHashMap<>());

            countries.get(country).put(city, population);

            if (countiesPopulation.containsKey(country)) {
                countiesPopulation.put(country, countiesPopulation.get(country) + population);
            } else {
                countiesPopulation.put(country, population);
            }

            input = scanner.nextLine();
        }


        countiesPopulation
                .entrySet()
                .stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .forEach(country -> {
                    System.out.printf("%s (total population: %d)%n", country.getKey(), country.getValue());

                    countries.get(country.getKey())
                            .entrySet()
                            .stream()
                            .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                            .forEach(city -> System.out.printf("=>%s: %d%n", city.getKey(), city.getValue()));
                });


        System.out.println();
    }
}