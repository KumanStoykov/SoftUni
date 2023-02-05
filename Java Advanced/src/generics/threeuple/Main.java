package generics.threeuple;


import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Threeuple> list = new ArrayList<>();

        String[] namesAndAddress = scanner.nextLine().split("\\s+");
        String[] nameAndBears = scanner.nextLine().split("\\s+");
        String[] nameAndBank = scanner.nextLine().split("\\s+");

        String fullName = namesAndAddress[0] + " " + namesAndAddress[1];
        String address = namesAndAddress[2];
        String city = namesAndAddress[3];
        list.add(new Threeuple<>(fullName, address, city));

        String name = nameAndBears[0];
        int biers = Integer.parseInt(nameAndBears[1]);
        String hesDrunk = nameAndBears[2].equals("drunk") ? "true" : "false";
        list.add(new Threeuple<>(name, biers, hesDrunk));

        name = nameAndBank[0];
        double accountBalance  = Double.parseDouble(nameAndBank[1]);
        String bank = nameAndBank[2];
        list.add(new Threeuple<>(name,accountBalance, bank));

       list.forEach(System.out::println);
    }
}
