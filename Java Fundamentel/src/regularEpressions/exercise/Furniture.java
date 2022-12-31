package regularEpressions.exercise;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Furniture {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        double totalSum = 0.0;

        StringBuilder sb = new StringBuilder("Bought furniture:").append(System.lineSeparator());
        String regex = ">>(?<item>[A-Za-z]+)<<(?<price>[0-9]+\\.?[0-9]*)!(?<quantity>[0-9]+)";
        Pattern pattern = Pattern.compile(regex);

        while (!input.equals("Purchase")) {
            Matcher matcher = pattern.matcher(input);
            if (matcher.find()) {
                sb.append(matcher.group("item")).append(System.lineSeparator());
                totalSum += Double.parseDouble(matcher.group("price")) * Double.parseDouble(matcher.group("quantity"));
            }
            input = scanner.nextLine();
        }
        sb.append("Total money spend: ");
        sb.append(String.format("%.2f", totalSum));

        System.out.println(sb.toString());

    }
}
