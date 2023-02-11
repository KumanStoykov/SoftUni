package exams._10_02_2023.rabbits;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Cage {
    private String name;
    private int capacity;
    private List<Rabbit> data;

    public Cage(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void add(Rabbit rabbit) {
        data.add(rabbit);
    }

    public boolean removeRabbit(String name) {
        return data.removeIf(n -> n.getName().equals(name));
    }

    public void removeSpecies(String species) {
        data.removeIf(n -> n.getSpecies().equals(species));
    }

    public Rabbit sellRabbit(String name) {
        Rabbit currRabbit = data.stream().filter(r -> r.getName().equals(name)).findFirst().get();
        currRabbit.setAvailable(false);
        return currRabbit;
    }

    public List<Rabbit> sellRabbitBySpecies(String species) {
        List<Rabbit> rabbits = data.stream().filter(r -> r.getSpecies().equals(species))
                .collect(Collectors.toList());

        rabbits.forEach(e -> e.setAvailable(false));
        return rabbits;
    }

    public int count() {
        return data.stream().filter(Rabbit::isAvailable).collect(Collectors.toList()).size();
    }

    public String report() {
        StringBuilder sb = new StringBuilder();

        List<Rabbit> available = data.stream().filter(Rabbit::isAvailable).collect(Collectors.toList());

        sb.append("Rabbits available at ").append(name).append(":").append(System.lineSeparator());
        available.forEach(r -> sb.append(r.toString()).append(System.lineSeparator()));
        return sb.toString();
    }
}

