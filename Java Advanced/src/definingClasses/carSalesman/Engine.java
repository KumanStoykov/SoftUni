package definingClasses.carSalesman;

public class Engine {
    private String model;
    private String power;
    private int displacement;
    private String efficiency;

    public Engine(String model, String power, int displacement, String efficiency) {
        this.model = model;
        this.power = power;
        this.displacement = displacement;
        this.efficiency = efficiency;
    }

    public Engine(String model, String power, int displacement) {
        this(model, power, displacement, "n/a");
    }

    public Engine(String model, String power, String efficiency) {
        this(model, power, 0, efficiency);
    }

    public Engine(String model, String power) {
        this(model, power, 0, "n/a");
    }

    public String getModel() {
        return model;
    }

    public String getPower() {
        return power;
    }

    public int getDisplacement() {
        return displacement;
    }

    public String getEfficiency() {
        return efficiency;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(model).append(": ").append(System.lineSeparator())
                .append("Power: ").append(power).append(System.lineSeparator())
                .append("Displacement: ").append(displacement > 0 ? displacement : "n/a").append(System.lineSeparator())
                .append("Efficiency: ").append(efficiency).append(System.lineSeparator());
        return sb.toString();
    }

}
