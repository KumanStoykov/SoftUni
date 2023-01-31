package exams._17_12_2019.christmas;

import java.util.ArrayList;
import java.util.List;

public class Bag {
    private String color;
    private int capacity;
    private List<Present> data;

    public Bag(String color, int capacity) {
        this.color = color;
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public String getColor() {
        return color;
    }

    public int getCapacity() {
        return capacity;
    }

    public int count() {
        return data.size();
    }

    public void add(Present present) {
        data.add(present);
    }

    public boolean remove(String name) {
        if (data.contains(name)) {
            data.remove(name);
            return true;
        }
        return false;
    }

    public Present	heaviestPresent() {
      double heavies = 0.0;
      Present present = null;

        for (int i = 0; i < data.size(); i++) {
            if(heavies < data.get(i).getWeight()) {
                heavies = data.get(i).getWeight();
                present = data.get(i);
            }
        }
        return present;
    }

    public Present getPresent(String name) {
        for (int i = 0; i < data.size(); i++) {
            if(data.get(i).getName().equals(name)) {
                return data.get(i);
            }
        }
        return null;
    }

    public String report() {
       StringBuilder sb = new StringBuilder();

       sb.append(color).append(" bag contains:").append(System.lineSeparator());
        for (Present p : data) {
            sb.append(p).append(System.lineSeparator());
        }
        return sb.toString();
    }


}
