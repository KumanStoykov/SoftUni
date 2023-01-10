package stacksAndQueues.exercise;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class BasicStackOperations {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> numbersStack = new ArrayDeque<>();

        int[] commands = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        int numberToPush = commands[0];
        int numberToPop = commands[1];
        int numberToCheck = commands[2];

        for (int i = 0; i < numberToPush - numberToPop; i++) {
            numbersStack.push(scanner.nextInt());
        }

        if (numbersStack.contains(numberToCheck)) {
            System.out.println("true");
        } else {
            int minNum = Integer.MAX_VALUE;
            if (numbersStack.isEmpty()) {
                minNum = 0;
            } else {
                while (numbersStack.size() != 0) {
                    int currentNum = numbersStack.pop();
                    if (currentNum < minNum) {
                        minNum = currentNum;
                    }

                }

            }
            System.out.println(minNum);
        }

    }
}
