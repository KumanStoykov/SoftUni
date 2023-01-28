package definingClasses.speedReacing;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int carRows = Integer.parseInt(scanner.nextLine());

        List<Car> cars = new ArrayList<>();

        for (int i = 0; i < carRows; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String model = input[0];
            int fuelAmount = Integer.parseInt(input[1]);
            double fuelCostPerKm = Double.parseDouble(input[2]);

            Car car = new Car(model, fuelAmount, fuelCostPerKm);
            cars.add(car);
        }

        String command = scanner.nextLine();

        while (!command.equals("End")) {
            String model = command.split("\\s+")[1];
            int amountOfKm = Integer.parseInt(command.split("\\s+")[2]);

            Car currentCar = cars.stream()
                    .filter(c -> c.getModel().equals(model))
                    .findFirst().get();

            if(currentCar.canDrive(amountOfKm)) {
                currentCar.reduceAmountAfterDriving(amountOfKm);
            } else {
                System.out.println("Insufficient fuel for the drive");
            }
            command = scanner.nextLine();
        }

        cars.forEach(c -> System.out.println(c.toString()));
    }
}
