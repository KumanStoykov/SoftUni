package exams._13_05_2022.easterBasket;

public class Egg {
    private String color;
    private int strength;
    private String shape;

    public Egg(String color, int strength, String shape) {
       setColor(color);
       setStrength(strength);
       setShape(shape);
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    @Override
    public String toString() {
        return String.format("%s egg, with %d strength and %s shape.", getColor(), getStrength(), getShape());
    }
}
