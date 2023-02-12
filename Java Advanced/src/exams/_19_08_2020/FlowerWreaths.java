package exams._19_08_2020;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class FlowerWreaths {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> liliesStack = new ArrayDeque<>();
        ArrayDeque<Integer> rosesQueue = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split(", "))
                .forEach(l -> liliesStack.push(Integer.parseInt(l)));

        Arrays.stream(scanner.nextLine().split(", "))
                .forEach(r -> rosesQueue.offer(Integer.parseInt(r)));

        int resFromLilieAndRose = 0;
        int wreath = 0;

        while (!liliesStack.isEmpty() && !rosesQueue.isEmpty()) {

            int lilie = liliesStack.peek();
            int rose = rosesQueue.peek();
            int wreathsSum = lilie + rose;

            if (wreathsSum == 15) {
                wreath++;
                rosesQueue.poll();
                liliesStack.pop();
            } else if (wreathsSum > 15) {
                int oldLilie = liliesStack.pop();
                liliesStack.push(oldLilie - 2);
            } else {
                liliesStack.pop();
                rosesQueue.poll();
                resFromLilieAndRose += wreathsSum;
            }
        }

        if (resFromLilieAndRose > 15) {
            wreath += resFromLilieAndRose / 15;
        }

        if (wreath > 4) {
            System.out.printf("You made it, you are going to the competition with %d wreaths!%n", wreath);
        } else {
            int neededWreath = 5 - wreath;
            System.out.printf("You didn't make it, you need %d wreaths more!%n", neededWreath);

        }
    }
}
