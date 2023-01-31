package exams._17_12_2019;

import java.util.*;
import java.util.stream.Collectors;

public class SantaPresentFactory {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Map<Integer, String> presentsPrice = Map.of(150, "Doll", 250, "Wooden train", 300, "Teddy bear", 400, "Bicycle");
        Map<String, Integer> produciblePresents = new TreeMap<>();

        ArrayDeque<Integer> materialStack = new ArrayDeque<>();
        ArrayDeque<Integer> magicQueue = new ArrayDeque<>();

        int[] materialInput = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        Arrays.stream(materialInput).forEach(materialStack::push);

        int[] magicInput = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt).toArray();
        Arrays.stream(magicInput).forEach(magicQueue::offer);

        while (!magicQueue.isEmpty() && !materialStack.isEmpty()) {
            int materialBox = materialStack.peek();
            int magic = magicQueue.peek();

            if (materialBox == 0 || magic == 0) {
                if(materialBox == 0) {
                    materialStack.pop();
                }
                if(magic == 0) {
                    magicQueue.poll();
                }
                continue;
            }

            int multiplyMaterial = materialBox * magic;

            if (multiplyMaterial > 0) {
                if (presentsPrice.containsKey(multiplyMaterial)) {
                    String currentProduct = presentsPrice.get(multiplyMaterial);
                    produciblePresents.putIfAbsent(currentProduct, 0);
                    int oldProductCount = produciblePresents.get(currentProduct);
                    produciblePresents.put(currentProduct, oldProductCount + 1);
                    materialStack.pop();
                    magicQueue.poll();
                } else {
                    magicQueue.poll();
                    int oldMaterial = materialStack.pop();
                    materialStack.push(oldMaterial + 15);
                }

            } else {
                int subtractMaterial = materialStack.pop() + magicQueue.poll();
                materialStack.push(subtractMaterial);
            }


        }

        if((produciblePresents.containsKey("Doll") && produciblePresents.containsKey("Wooden train"))
                || ((produciblePresents.containsKey("Teddy bear") && produciblePresents.containsKey("Bicycle"))
        )) {
            System.out.println("The presents are crafted! Merry Christmas!");

        } else {
            System.out.println("No presents this Christmas!");
        }

        if(!materialStack.isEmpty()) {
            String str = materialStack.stream().map(Objects::toString).collect(Collectors.joining(", "));
            System.out.printf("Materials left: %s%n", str);
        }
        if (!magicQueue.isEmpty()){
            String str = magicQueue.stream().map(Objects::toString).collect(Collectors.joining(", "));
            System.out.printf("Magic left: %s%n", str);
        }

        for (Map.Entry<String, Integer> present : produciblePresents.entrySet()) {
            System.out.println(present.getKey() + ": " + present.getValue());
        }
    }
}
