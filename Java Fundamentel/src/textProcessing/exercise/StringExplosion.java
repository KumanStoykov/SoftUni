package textProcessing.exercise;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class StringExplosion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> input = Arrays.stream(scanner.nextLine().split("")).collect(Collectors.toList());

        int strengthCount = 0;

        for (int i = 0; i < input.size(); i++) {
            if(input.get(i).equals(">")) {
                strengthCount += Integer.parseInt(input.get(i + 1));
                input.remove(i + 1);
                strengthCount--;
            } else if (strengthCount > 0) {
                input.remove(i);
                i--;
                strengthCount--;
            }

        }

        System.out.println(String.join("", input));

    }
}
