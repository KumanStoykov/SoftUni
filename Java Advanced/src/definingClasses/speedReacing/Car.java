package definingClasses.speedReacing;

public class Car {

    private String model;
    private double fuelAmount;
    private double fuelCostPerKm;
    private int distanceTraveled;

    public Car(String model, int fuelAmount, double fuelCostPerKm) {
        this.model = model;
        this.fuelAmount = fuelAmount;
        this.fuelCostPerKm = fuelCostPerKm;
    }

    public String getModel() {
        return model;
    }


    public boolean canDrive(int amountOfKm) {
        double amountAfterDrive = amountOfKm * fuelCostPerKm;

        return !(fuelAmount < amountAfterDrive);
    }

    public void reduceAmountAfterDriving(int amountOfKm) {
        distanceTraveled += amountOfKm;
        fuelAmount -= amountOfKm * fuelCostPerKm;
    }

    @Override
    public String toString() {
        return String.format("%s %.2f %d", model, fuelAmount, distanceTraveled);
    }
}
