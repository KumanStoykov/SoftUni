package iteratorsAndComparators.equalityLogic;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Set<Person> peopleTree = new TreeSet<>(new personNComparator());
        Set<Person> peopleHash = new HashSet<>();

        int rows = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < rows; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String name = input[0];
            int age = Integer.parseInt(input[1]);
            Person person = new Person(name, age);
            peopleTree.add(person);
            peopleHash.add(person);
        }

        System.out.println(peopleTree.size());
        System.out.println(peopleHash.size());

    }
}
