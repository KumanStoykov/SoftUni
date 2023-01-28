package definingClasses.rawData;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());

        List<Car> cars = new ArrayList<>();

        for (int i = 0; i < rows; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String model = input[0];
            int engineSpeed = Integer.parseInt(input[1]);
            int enginePower = Integer.parseInt(input[2]);
            int cargoWeight = Integer.parseInt(input[3]);
            String cargoType = input[4];

            Car car = new Car(model, engineSpeed, enginePower, cargoWeight, cargoType);

            for (int j = 5; j < 12; j += 2) {
                double tirePressure = Double.parseDouble(input[j]);
                int tireAge = Integer.parseInt(input[j + 1]);

                Tire tire = new Tire(tirePressure, tireAge);

                car.tires.add(tire);
            }
            cars.add(car);
        }

        String command = scanner.nextLine();

        cars.stream()
                .filter(c -> c.getCargoType().equals(command))
                .filter(c -> c.categoriesSort(command))
                .forEach(c -> System.out.println(c.toString()));


    }
}
