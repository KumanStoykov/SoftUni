
package workingWithAbstraction.greedyTimes;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        long vhod = Long.parseLong(scanner.nextLine());
        String[] seif = scanner.nextLine().split("\\s+");

        var torba = new LinkedHashMap<String, LinkedHashMap<String, Long>>();
        long zlato = 0;
        long kamuni = 0;
        long mangizi = 0;

        for (int i = 0; i < seif.length; i += 2) {
            String name = seif[i];
            long broika = Long.parseLong(seif[i + 1]);

            String kvoE = "";

            if (name.length() == 3) {
                kvoE = "Cash";
            } else if (name.toLowerCase().endsWith("gem")) {
                kvoE = "Gem";
            } else if (name.toLowerCase().equals("gold")) {
                kvoE = "Gold";
            }

            if (kvoE.equals("")) {
                continue;
            } else if (vhod < torba.values().stream().map(Map::values).flatMap(Collection::stream).mapToLong(e -> e).sum() + broika) {
                continue;
            }

            switch (kvoE) {
                case "Gem":
                    if (!torba.containsKey(kvoE)) {
                        if (torba.containsKey("Gold")) {
                            if (broika > torba.get("Gold").values().stream().mapToLong(e -> e).sum()) {
                                continue;
                            }
                        } else {
                            continue;
                        }
                    } else if (torba.get(kvoE).values().stream().mapToLong(e -> e).sum() + broika > torba.get("Gold").values().stream().mapToLong(e -> e).sum()) {
                        continue;
                    }
                    break;
                case "Cash":
                    if (!torba.containsKey(kvoE)) {
                        if (torba.containsKey("Gem")) {
                            if (broika > torba.get("Gold").values().stream().mapToLong(e -> e).sum()) {
                                continue;
                            }
                        } else {
                            continue;
                        }
                    } else if (torba.get(kvoE).values().stream().mapToLong(e -> e).sum() + broika > torba.get("Gem").values().stream().mapToLong(e -> e).sum()) {
                        continue;
                    }
                    break;
            }

            if (!torba.containsKey(kvoE)) {
                torba.put((kvoE), new LinkedHashMap<String, Long>());
            }

            if (!torba.get(kvoE).containsKey(name)) {
                torba.get(kvoE).put(name, 0L);
            }


            torba.get(kvoE).put(name, torba.get(kvoE).get(name) + broika);
            if (kvoE.equals("Gold")) {
                zlato += broika;
            } else if (kvoE.equals("Gem")) {
                kamuni += broika;
            } else if (kvoE.equals("Cash")) {
                mangizi += broika;
            }
        }

        for (var x : torba.entrySet()) {
            Long sumValues = x.getValue().values().stream().mapToLong(l -> l).sum();

            System.out.println(String.format("<%s> $%s", x.getKey(), sumValues));

            x.getValue().entrySet().stream().sorted((e1, e2) -> e2.getKey().compareTo(e1.getKey())).forEach(i -> System.out.println("##" + i.getKey() + " - " + i.getValue()));

        }
    }
}