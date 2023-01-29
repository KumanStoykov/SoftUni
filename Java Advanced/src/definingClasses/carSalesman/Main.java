package definingClasses.carSalesman;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int inputRows = Integer.parseInt(scanner.nextLine());

        List<Engine> engines = new ArrayList<>();
        List<Car> cars = new ArrayList<>();

        for (int i = 0; i < inputRows; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String model = input[0];
            String power = input[1];
            String efficiency = null;
            String displacement = null;

            Engine engine = null;
            switch (input.length) {
                case 2:
                    engine = new Engine(model, power);
                    break;
                case 3:
                    if (Character.isDigit(input[2].charAt(0))) {
                        efficiency = input[2];
                        engine = new Engine(model, power, Integer.parseInt(efficiency));
                    } else {
                        displacement = input[2];
                        engine = new Engine(model, power, displacement);
                    }
                    break;
                case 4:
                    efficiency = input[2];
                    displacement = input[3];
                    engine = new Engine(model, power, Integer.parseInt(efficiency), displacement);
                    break;
            }
            engines.add(engine);
        }

        inputRows = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < inputRows; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String model = input[0];
            Engine engine = engines.stream().filter(e -> e.getModel().equals(input[1])).findFirst().orElse(null);
            String weight = null;
            String color = null;

            Car car = null;

            switch (input.length) {
                case 2:
                    car = new Car(model, engine);
                    break;
                case 3:
                    if (Character.isDigit(input[2].charAt(0))) {
                        weight = input[2];
                        car = new Car(model, engine, Integer.parseInt(weight));
                    } else {
                        color = input[2];
                        car = new Car(model, engine, color);
                    }
                    break;
                case 4:
                    weight = input[2];
                    color = input[3];
                    car = new Car(model, engine, Integer.parseInt(weight), color);
                    break;
            }
            cars.add(car);
        }

       cars.forEach(c -> System.out.println(c.toString()));

    }

}
