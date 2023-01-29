package definingClasses.carSalesman;

public class Car {
    private String model;
    private Engine engine;
    private int weight;
    private String color;


    public Car(String model, Engine engine, int weight, String color) {
        this.model = model;
        this.engine = engine;
        this.weight = weight;
        this.color = color;
    }

    public Car(String model, Engine engine, int weight) {
        this(model, engine, weight, "n/a");
    }

    public Car(String model, Engine engine, String color) {
        this(model, engine, 0, color);
    }

    public Car(String model, Engine engine) {
        this(model, engine, 0, "n/a");
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(model).append(": ").append(System.lineSeparator())
                .append(engine.toString())
                .append("Weight: ").append(weight > 0 ? weight : "n/a").append(System.lineSeparator())
                .append("Color: ").append(color);
        return sb.toString();
    }

}
