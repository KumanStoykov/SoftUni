package stacksAndQueues.exercise;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class Robotics {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String[] robotsInput = scanner.nextLine().split(";");
        String[] timeInput = scanner.nextLine().split(":");

        int hour = Integer.parseInt(timeInput[0]);
        int minutes = Integer.parseInt(timeInput[1]);
        int seconds = Integer.parseInt(timeInput[2]);

        LocalTime time = LocalTime.of(hour, minutes, seconds);
        DateTimeFormatter timeFormatter = DateTimeFormatter.ISO_TIME;

        String[] robots = new String[robotsInput.length];
        int[] robotWorkTime = new int[robotsInput.length];
        int[] workProcess = new int[robotsInput.length];

        ArrayDeque<String> products = new ArrayDeque<>();

        for (int i = 0; i < robotsInput.length; i++) {
            String[] robotSplit = robotsInput[i].split("-");
            robots[i] = robotSplit[0];
            workProcess[i] = Integer.parseInt(robotSplit[1]);
        }

        String command = scanner.nextLine();
        while (!command.equals("End")) {
            products.offer(command);
            command = scanner.nextLine();
        }

        int currTime = 0;

        while (products.size() != 0) {
            String product = products.poll();
            boolean isWorking = false;

            currTime++;

            for (int i = 0; i < robots.length; i++) {

                if (robotWorkTime[i] == 0 && !isWorking) {
                    isWorking = true;
                    robotWorkTime[i] = workProcess[i];

                    System.out.printf("%s - %s [%s]%n", robots[i], product, time.plusSeconds(currTime).format(timeFormatter));
                }
                if (robotWorkTime[i] > 0) {
                    robotWorkTime[i]--;
                }
            }

            if (!isWorking) {
                products.offer(product);

            }
        }
    }
}
