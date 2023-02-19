package regularExam.kindergarten;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Kindergarten {
    private String name;
    private int capacity;
    private List<Child> registry;

    public Kindergarten(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        registry = new ArrayList<>();
    }

    public boolean addChild(Child child) {
        if (capacity > registry.size()) {
            registry.add(child);
            return true;
        }
        return false;
    }

    public boolean removeChild(String firstName) {
        return registry.removeIf(c -> c.getFirstName().equals(firstName));
    }

    public int getChildrenCount() {
        return registry.size();
    }

    public Child getChild(String firstName) {
        return registry.stream().filter(c -> c.getFirstName().equals(firstName))
                .findFirst()
                .orElse(null);
    }

    public String registryReport() {
        StringBuilder sb = new StringBuilder();

        sb.append("Registered children in ").append(name).append(":").append(System.lineSeparator());

        registry.sort(Comparator.comparing(Child::getAge)
                .thenComparing(Comparator.comparing(Child::getFirstName)
                .thenComparing(Comparator.comparing(Child::getLastName))));

        registry.forEach(c -> {
            sb.append("--").append(System.lineSeparator());
            sb.append(c.toString()).append(System.lineSeparator());
        });

        return sb.toString();
    }
}
