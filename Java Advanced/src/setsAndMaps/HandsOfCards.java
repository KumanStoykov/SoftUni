package setsAndMaps;


import java.io.IOException;
import java.util.*;

public class HandsOfCards {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        LinkedHashMap<String, Integer> playersResults = new LinkedHashMap<>();
        LinkedHashMap<String, List<String>> playersAllCards = new LinkedHashMap<>();

        String[] command = scanner.nextLine().split(": ");

        while (!command[0].equals("JOKER")) {
            String name = command[0];
            String[] cards = command[1].split(", ");

            playersResults.putIfAbsent(name, 0);
            playersAllCards.putIfAbsent(name, new ArrayList<>());

            for (String card : cards) {
                playersAllCards.get(name).add(card);
            }

            command = scanner.nextLine().split(": ");
        }
        for (Map.Entry<String, List<String>> player : playersAllCards.entrySet()) {
            HashSet<String> uniqueCards = new HashSet<>(player.getValue());

            int currentPlayerSum = cardSum(uniqueCards);
            playersResults.put(player.getKey(), currentPlayerSum);
        }

        playersResults.forEach((key, value) -> System.out.println(key + ": " + value));
    }

    private static int cardSum(HashSet<String> playerCards) {
        Map<String, Integer> cardsTypes = Map.of(
                "J", 11,
                "Q", 12,
                "K", 13,
                "A", 14,
                "C", 1,
                "D", 2,
                "H", 3,
                "S", 4
        );
        int sum = 0;
        for (String x : playerCards) {
            String cardPower = x.length() > 2 ? x.substring(0, 2) : x.substring(0, 1);
            String cardType = x.length() > 2 ? x.substring(2, 3) : x.substring(1, 2);

            if (Character.isDigit(cardPower.charAt(0))) {
                sum += Integer.parseInt(cardPower) * cardsTypes.get(cardType);
            } else {
                sum += cardsTypes.get(cardPower) * cardsTypes.get(cardType);
            }
        }
        return sum;
    }
}
