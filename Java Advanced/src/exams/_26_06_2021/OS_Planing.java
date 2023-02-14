package exams._26_06_2021;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class OS_Planing {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> tasksStack = new ArrayDeque<>();
        ArrayDeque<Integer> threadsQueue = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt)
                .forEach(tasksStack::push);

        Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .forEach(threadsQueue::offer);

        int valueOfTask = Integer.parseInt(scanner.nextLine());

        while (true) {
            int task = tasksStack.peek();
            int thread = threadsQueue.peek();

            if (task == valueOfTask) {
                break;
            }

            if (thread >= task) {
                tasksStack.pop();
                threadsQueue.poll();
            } else {
                threadsQueue.poll();
            }
        }

        System.out.printf("Thread with value %d killed task %d%n", threadsQueue.peek(), valueOfTask);
        String[] strArr = threadsQueue.stream().map(String::valueOf).toArray(String[]::new);
        System.out.println(String.join(" ", strArr));
    }
}
