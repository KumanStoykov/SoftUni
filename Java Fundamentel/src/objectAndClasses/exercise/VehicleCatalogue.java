package objectAndClasses.exercise;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class VehicleCatalogue {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Vehicle> vehicleList = new ArrayList<>();

        String command = "";

        while (!command.equals("End")) {
            String[] inputVehicle = scanner.nextLine().split("\\s+");
            command = inputVehicle[0];
            if (!command.equals("End")) {
                Vehicle currentVehicle = new Vehicle(inputVehicle[0], inputVehicle[1], inputVehicle[2], Integer.parseInt(inputVehicle[3]));
                vehicleList.add(currentVehicle);
            }
        }
        while (!command.equals("Close the Catalogue")) {
            command = scanner.nextLine();
            if (!command.equals("Close the Catalogue")) {

                for (Vehicle vehicle : vehicleList) {
                    if (command.equals(vehicle.getModel())) {
                        System.out.print(vehicle.toString());
                    }
                }
            }
        }
        double carPowerAvg = vehicleList.stream()
                .filter(car -> car.getType().equals("car"))
                .mapToDouble(Vehicle::getHorsePower).average().orElse(0.0);
        double truckPowerAvg = vehicleList.stream()
                .filter(truck -> truck.getType().equals("truck"))
                .mapToDouble(Vehicle::getHorsePower).average().orElse(0.0);

        System.out.printf("Cars have average horsepower of: %.2f.%n", carPowerAvg);
        System.out.printf("Trucks have average horsepower of: %.2f.", truckPowerAvg);
    }

    public static class Vehicle {
        private String type;
        private String model;
        private String color;
        private int horsePower;

        public Vehicle(String type, String model, String color, int horsePower) {
            this.type = type;
            this.model = model;
            this.color = color;
            this.horsePower = horsePower;
        }

        @Override
        public String toString() {
            String bigCapitalType = this.type.substring(0, 1).toUpperCase() + this.type.substring(1);
            return String.format("Type: %s%n" +
                                 "Model: %s%n" +
                                 "Color: %s%n" +
                                 "Horsepower: %S%n",
                                 bigCapitalType, this.model, this.color, this.horsePower);
        }

        public String getType() {
            return this.type;
        }

        public String getModel() {
            return this.model;
        }

        public int getHorsePower() {
            return this.horsePower;
        }
    }
}
