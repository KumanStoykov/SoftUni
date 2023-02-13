package exams._14_04_2021;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class Bouquets {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> tulipsStack = new ArrayDeque<>();
        ArrayDeque<Integer> daffodilsQueue = new ArrayDeque<>();

        Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt).forEach(tulipsStack::push);

        Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt).forEach(daffodilsQueue::offer);

        int bouquets = 0;
        int storeFlowers = 0;

        while (!tulipsStack.isEmpty() && !daffodilsQueue.isEmpty()) {
            int tulip = tulipsStack.peek();
            int daffodil = daffodilsQueue.peek();
            int sumBouquet = tulip + daffodil;

            if (sumBouquet == 15) {
                bouquets++;
                tulipsStack.pop();
                daffodilsQueue.poll();
            } else if (sumBouquet > 15) {
                int oldTulip = tulipsStack.pop();
                tulipsStack.push(oldTulip - 2);
            } else {
                storeFlowers += sumBouquet;
                tulipsStack.pop();
                daffodilsQueue.poll();
            }
        }

        if(storeFlowers >= 15) {
            bouquets += storeFlowers / 15;
        }

        if(bouquets >= 5) {
            System.out.printf("You made it! You go to the competition with %d bouquets!", bouquets);
        } else {
            int neededBouquets = 5 - bouquets;
            System.out.printf("You failed... You need more %d bouquets.", neededBouquets);
        }

    }
}
