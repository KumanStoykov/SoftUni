package exams._19_08_2020.vetClinic;

import java.util.ArrayList;
import java.util.List;

public class Clinic {
    private List<Pet> data;
    private int capacity;

    public Clinic(int capacity) {
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public void add(Pet pet) {
        if (capacity >= data.size() + 1) {
            data.add(pet);
        }
    }

    public boolean remove(String name) {
          return data.removeIf(p -> p.getName().equals(name));
    }

    public Pet getPet(String name, String owner) {
        return data.stream().filter(p -> p.getName().equals(name) && p.getOwner().equals(owner))
                .findFirst().orElse(null);
    }

    public Pet getOldestPet() {
        Pet oldestPet = null;
        int currAge = 0;
        for (Pet pet : data) {
            if (pet.getAge() >= currAge) {
                currAge = pet.getAge();
                oldestPet = pet;
            }
        }
        return oldestPet;
    }

    public int getCount() {
        return data.size();
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();

        sb.append("The clinic has the following patients:").append(System.lineSeparator());

        for (Pet pet : data) {
            sb.append(pet.getName())
                    .append(" ")
                    .append(pet.getOwner()).append(System.lineSeparator());
        }

        return sb.toString();
    }
}
