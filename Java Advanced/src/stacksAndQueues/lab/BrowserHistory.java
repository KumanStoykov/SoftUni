package stacksAndQueues.lab;

import java.util.ArrayDeque;
import java.util.Scanner;

public class BrowserHistory {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> commands = new ArrayDeque<>();
        String input = scanner.nextLine();

        while (!input.equals("Home")) {
            if (input.equals("back")) {
                if (commands.size() <= 1) {
                    System.out.println("no previous URLs");
                } else {
                    commands.pop();
                    System.out.println(commands.peek());
                }
            } else {
                commands.push(input);
                System.out.println(input);
            }
            input = scanner.nextLine();
        }
    }
}
