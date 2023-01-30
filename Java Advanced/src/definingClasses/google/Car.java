package definingClasses.google;

public class Car {
    private String model;
    private int carSpeed;

    public Car(String model, int carSpeed) {
        this.model = model;
        this.carSpeed = carSpeed;
    }

    @Override
    public String toString() {
        return String.format("%s %d", model, carSpeed);
    }
}
