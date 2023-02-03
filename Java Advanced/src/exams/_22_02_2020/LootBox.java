package exams._22_02_2020;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class LootBox {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> firstRowQueue = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt).collect(Collectors.toCollection(ArrayDeque::new));

        ArrayDeque<Integer> secondRowStack = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine()
                .split("\\s+"))
                .mapToInt(Integer::parseInt)
                .forEach(secondRowStack::push);
        int lootValue = 0;
        while (firstRowQueue.size() != 0 && secondRowStack.size() != 0) {
            int firstNum = firstRowQueue.peek();
            int secondNum = secondRowStack.peek();
            int sumOfNumbers = firstNum + secondNum;

            if(sumOfNumbers % 2 != 0) {
                firstRowQueue.offer(secondRowStack.pop());
            } else {
                lootValue += sumOfNumbers;
                firstRowQueue.poll();
                secondRowStack.pop();
            }
        }

        if(firstRowQueue.isEmpty()) {
            System.out.println("First lootbox is empty");
        } else if(secondRowStack.isEmpty()) {
            System.out.println("Second lootbox is empty");
        }

        if(lootValue > 99){
            System.out.println("Your loot was epic! Value: " + lootValue);
        } else {
            System.out.println("Your loot was poor... Value: " + lootValue);

        }

    }
}
