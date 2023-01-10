package stacksAndQueues.exercise;

import java.util.*;

public class MaximumElement {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayDeque<Integer> numStack = new ArrayDeque<>();
        int rows = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < rows; i++) {
            int[] commands = Arrays.stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt).toArray();

            switch (commands[0]) {
                case 1:
                    numStack.push(commands[1]);
                    break;
                case 2:
                    numStack.pop();
                    break;
                case 3:
                    System.out.println(Collections.max(numStack));
                    break;
            }
        }
    }

}
