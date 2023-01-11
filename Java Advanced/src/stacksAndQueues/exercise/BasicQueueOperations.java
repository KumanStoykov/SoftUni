package stacksAndQueues.exercise;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class BasicQueueOperations {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> queue = new ArrayDeque<>();

        int[] commands = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();

        int numberToPush = commands[0];
        int numberToPop = commands[1];
        int numberToCheck = commands[2];

        for (int i = 0; i < numberToPush; i++) {
            queue.offer(scanner.nextInt());
            if(numberToPush - numberToPop <= i) {
                queue.poll();
            }
        }

        if (queue.contains(numberToCheck)) {
            System.out.println("true");
        } else {
            int minNum = Integer.MAX_VALUE;
            if (queue.isEmpty()) {
                minNum = 0;
            } else {
                minNum = Collections.min(queue);

            }
            System.out.println(minNum);
        }
    }
}
