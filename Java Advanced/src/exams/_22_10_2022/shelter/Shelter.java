package exams._22_10_2022.shelter;

import java.util.ArrayList;
import java.util.List;

public class Shelter {
    private int capacity;
    private List<Animal> data;

    public Shelter(int capacity) {
        this.capacity = capacity;
        data = new ArrayList<>();
    }

    public void add(Animal animal) {
        if(data.size() + 1 <= capacity) {
            data.add(animal);
        }
    }

    public boolean remove(String name) {
        return data.removeIf(a -> a.getName().equals(name));
    }

    public Animal getAnimal(String name, String caretaker) {
        return data.stream().filter(a -> a.getName().equals(name) && a.getCaretaker().equals(caretaker))
                .findFirst()
                .orElse(null);
    }

    public Animal getOldestAnimal() {
        Animal animal = null;
        int oldest = 0;

        for (Animal a : data) {
            if (a.getAge() > oldest) {
                oldest = a.getAge();
                animal = a;
            }
        }
        return animal;
    }

    public int getCount() {
        return data.size();
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();

        sb.append("The shelter has the following animals:").append(System.lineSeparator());

        data.forEach(a -> {
            sb.append(a.getName()).append(" ").append(a.getCaretaker())
                    .append(System.lineSeparator());
        });

        return sb.toString();
    }
}
