package definingClasses.rawData;

import java.util.ArrayList;
import java.util.List;

public class Car {
    private String model;
    private int engineSpeed;
    private int enginePower;
    private int cargoWeight;
    private String cargoType;

    List<Tire> tires;


    public Car(
            String model,
            int engineSpeed,
            int enginePower,
            int cargoWeight,
            String cargoType
    ) {
        this.model = model;
        this.engineSpeed = engineSpeed;
        this.enginePower = enginePower;
        this.cargoWeight = cargoWeight;
        this.cargoType = cargoType;
        this.tires = new ArrayList<>();
    }

    public String getCargoType() {
        return cargoType;
    }

    public boolean categoriesSort(String command) {

        if(command.equals("fragile")) {
            return tires.stream().anyMatch(t -> t.getTirePressure() < 1);
        } else {
            return enginePower > 250;
        }
    }

    @Override
    public String toString() {
        return String.format("%s", model);
    }

}
