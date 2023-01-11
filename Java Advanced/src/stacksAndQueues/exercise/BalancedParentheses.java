package stacksAndQueues.exercise;

import java.util.ArrayDeque;
import java.util.List;
import java.util.Scanner;

public class BalancedParentheses {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> parenthesesStack = new ArrayDeque<>();

        String[] input = scanner.nextLine().split("");

        List<String> charIn = List.of("(", "[", "{");
        boolean isParentheses = true;

        for (String c : input) {
            if (charIn.contains(c)) {
                parenthesesStack.push(c);
            } else if (!parenthesesStack.isEmpty()) {
                String stackChar = parenthesesStack.pop();
                if (c.equals(")") && !stackChar.equals("(")) {
                    isParentheses = false;
                } else if (c.equals("]") && !stackChar.equals("[")) {
                    isParentheses = false;

                } else if (c.equals("}") && !stackChar.equals("{")) {
                    isParentheses = false;
                }
            } else {
                isParentheses = false;
            }
        }

        String answers = isParentheses && parenthesesStack.size() == 0 ? "YES" : "NO";
        System.out.println(answers);
    }
}
