package regularEpressions.exercise;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;


public class Race {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        LinkedHashMap<String, Integer> racers = new LinkedHashMap<>();
        Arrays.stream(scanner.nextLine().split(", ")).forEach(x -> racers.put(x, 0));
        String input = scanner.nextLine();

        String regexLetters = "[A-Za-z]+";
        String regexDigits = "[0-9]";
        Pattern patternLetters = Pattern.compile(regexLetters);
        Pattern patternDigits = Pattern.compile(regexDigits);

        while (!input.equals("end of race")) {
            Matcher matcherLetters = patternLetters.matcher(input);
            Matcher matcherDigits = patternDigits.matcher(input);
            StringBuilder racerName = new StringBuilder();
            int racerKm = 0;

            while (matcherLetters.find()) {
                racerName.append(matcherLetters.group());
            }

            if (racers.containsKey(racerName.toString())) {
                while (matcherDigits.find()) {
                    racerKm += Integer.parseInt(matcherDigits.group());
                }
                int oldKm = racers.get(racerName.toString());
                racers.put(racerName.toString(), oldKm + racerKm);
            }

            input = scanner.nextLine();
        }
        List<String> sortedRacers = racers.entrySet()
                .stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .limit(3)
                .map(entry -> entry.getKey())
                .collect(Collectors.toList());

        System.out.printf("1st place: %s%n", sortedRacers.get(0));
        System.out.printf("2nd place: %s%n", sortedRacers.get(1));
        System.out.printf("3rd place: %s%n", sortedRacers.get(2));

    }
}
