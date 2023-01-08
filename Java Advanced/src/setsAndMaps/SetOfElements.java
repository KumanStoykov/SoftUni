package setsAndMaps;

import java.util.*;

public class SetOfElements {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimensions = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        LinkedHashSet<Integer> firstSet = new LinkedHashSet<>();
        HashSet<Integer> secondSet = new HashSet<>();

        for (int i = 0; i < dimensions[0]; i++) {
            firstSet.add(Integer.parseInt(scanner.nextLine()));
        }
        for (int i = 0; i < dimensions[1]; i++) {
            secondSet.add(Integer.parseInt(scanner.nextLine()));
        }
        firstSet.retainAll(secondSet);
        for (int num : firstSet) {
          System.out.print(num + " ");
        }
    }
}
