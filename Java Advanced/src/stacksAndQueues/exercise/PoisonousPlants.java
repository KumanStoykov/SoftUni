package stacksAndQueues.exercise;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class PoisonousPlants {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countPlants = Integer.parseInt(scanner.nextLine());
        List<Integer> plants = Arrays.stream(scanner.nextLine().split("\\s+")).map(Integer::parseInt).collect(Collectors.toList());
        boolean plantsIsDead = true;
        int day = 0;

        while (plantsIsDead) {
            List<Integer> indexes = new ArrayList<>();
            int plantsSize = plants.size();
            for (int i = 1; i < plants.size(); i++) {
                boolean isPoisonous = plants.get(i) > plants.get(i - 1);
                if (isPoisonous) {
                    indexes.add(i);
                }
                if (i == 1) {
                    day++;
                }
            }
            if (plants.size() == 1) {
                day++;
            }
            int count = 0;
            for (int i : indexes) {
                plants.remove(i - count++);
            }

            plantsIsDead = plantsSize != plants.size();
        }
        System.out.print(Math.max((day - 1), 1));
    }
}
