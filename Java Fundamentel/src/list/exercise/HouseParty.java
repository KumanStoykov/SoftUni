package list.exercise;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class HouseParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countRows = Integer.parseInt(scanner.nextLine());

        List<String> gastList = new ArrayList<>();

        for (int i = 0; i < countRows; i++) {
            String[] people = scanner.nextLine().split(" is ");
            String name = people[0];
            String command = people[people.length - 1];

            if (command.equals("not going!")) {
                if (gastList.contains(name)){
                    gastList.remove(name);
                } else {
                    System.out.printf("%s is not in the list!%n", name);
                }
            } else {
                if (!gastList.contains(name)){
                    gastList.add(name);
                } else {
                    System.out.printf("%s is already in the list!%n", name);
                }
            }
        }
        gastList.forEach(System.out::println);
    }
}
