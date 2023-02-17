package exams._13_05_2022.easterBasket;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Basket {
    private String material;
    private int capacity;
    private List<Egg> data;

    public Basket(String material, int capacity) {
        this.material = material;
        this.capacity = capacity;
        data = new ArrayList<>();
    }

    public void addEgg(Egg egg) {
        if(capacity >= data.size() + 1) {
            data.add(egg);
        }
    }

    public boolean removeEgg(String color) {
        return data.removeIf(e -> e.getColor().equals(color));
    }

    public Egg getStrongestEgg() {
       return data.stream()
               .max(Comparator.comparing(Egg::getStrength))
               .orElse(null);
    }

    public Egg getEgg(String color) {
        return data.stream().filter(e -> e.getColor().equals(color))
                .findFirst()
                .orElse(null);
    }

    public int getCount() {
        return data.size();
    }

    public String report() {
        StringBuilder sb = new StringBuilder();

        sb.append(material).append(" basket contains:").append(System.lineSeparator());
        data.forEach(e -> sb.append(e.toString()).append(System.lineSeparator()));
        return sb.toString().trim();
    }
}
