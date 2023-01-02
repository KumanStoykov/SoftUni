package stacksAndQueues.lab;

import java.util.ArrayDeque;
import java.util.Scanner;

public class PrinterQueue {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        ArrayDeque<String> printQueue = new ArrayDeque<>();

        while (!input.equals("print")) {

            if (input.equals("cancel")) {
                if (printQueue.size() == 0) {
                    System.out.println("Printer is on standby");
                } else {
                    System.out.printf("Canceled %s%n", printQueue.poll());
                }
            } else {
                printQueue.offer(input);

            }
            input = scanner.nextLine();
        }
        printQueue.forEach(System.out::println);
    }
}
