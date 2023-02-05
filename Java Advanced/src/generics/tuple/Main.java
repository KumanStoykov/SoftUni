package generics.tuple;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


       String[] namesAndCity = scanner.nextLine().split("\\s+");
       String[] nameAndBears = scanner.nextLine().split("\\s+");
       String[] intAndDouble = scanner.nextLine().split("\\s+");

       String fullName = namesAndCity[0] + " " + namesAndCity[1];
        Tuple<String, String> namesPlace = new Tuple<>(fullName, namesAndCity[2]);
        Tuple<String, Integer> nameBears = new Tuple<>(nameAndBears[0], Integer.parseInt(nameAndBears[1]));
        Tuple<Integer, Double> intDouble = new Tuple<>(Integer.parseInt(intAndDouble[0]), Double.parseDouble(intAndDouble[1]));

        System.out.println(namesPlace.toString());
        System.out.println(nameBears.toString());
        System.out.println(intDouble.toString());
    }
}
