package definingClasses.catLady;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Cat> cats = new HashMap<>();

        String command = scanner.nextLine();
        while (!command.equals("End")) {
            String[] inputSplit = command.split("\\s+");
            String breed = inputSplit[0];
            String name = inputSplit[1];
            double specificCharacteristic = Double.parseDouble(inputSplit[2]);

            Cat cat = null;

            switch (breed) {
                case "Siamese":
                    cat = new Siamese(name, specificCharacteristic);
                    break;
                case "Cymric":
                    cat = new Cymric(name, specificCharacteristic);
                    break;
                case "StreetExtraordinaire":
                    cat = new StreetExtraordinaire(name, specificCharacteristic);
            }
            cats.put(name, cat);

            command = scanner.nextLine();
        }
        command = scanner.nextLine();

        System.out.println(cats.get(command).toString());

    }
}
