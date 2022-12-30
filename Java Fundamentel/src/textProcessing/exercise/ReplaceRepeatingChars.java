package textProcessing.exercise;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ReplaceRepeatingChars {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> chars = Arrays.stream(scanner.nextLine().split("")).collect(Collectors.toList());
        List<String> uniqueChars = new ArrayList<>();

        for (String aChar : chars) {
            boolean isInList = uniqueChars.size() != 0 && !aChar.equals(uniqueChars.get(uniqueChars.size() - 1));

            if (isInList) {
                uniqueChars.add(aChar);
            } else if (uniqueChars.size() == 0) {
                uniqueChars.add(aChar);
            }
        }
        System.out.println(String.join("", uniqueChars));
    }
}
