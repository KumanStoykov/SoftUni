package definingClasses.google;

import java.util.ArrayList;
import java.util.List;

public class Person {
    private String name;
    private Company company;
    private Car car;
    private List<Pokemon> pokemonList;
    private List<Parents> parentsList;
    private List<Children> childrenList;

    public Person(String name) {
        this.name = name;
        pokemonList = new ArrayList<>();
        parentsList = new ArrayList<>();
        childrenList = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public void setPokemonList(Pokemon pokemon) {
        pokemonList.add(pokemon);
    }

    public void setParentsList(Parents parents) {
        parentsList.add(parents);
    }

    public void setChildrenList(Children children) {
        childrenList.add(children);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();

        sb.append(name).append(System.lineSeparator());
        sb.append("Company: ").append(System.lineSeparator());

        if (company != null) {
            sb.append(company.toString()).append(System.lineSeparator());
        }

        sb.append("Car: ").append(System.lineSeparator());
        if (car != null) {
            sb.append(car.toString()).append(System.lineSeparator());
        }

        sb.append("Pokemon: ").append(System.lineSeparator());
        if (pokemonList.size() != 0) {
            pokemonList.forEach(p -> sb.append(p.toString()).append(System.lineSeparator()));
        }

        sb.append("Parents: ").append(System.lineSeparator());
        if (parentsList.size() != 0) {
            parentsList.forEach(p -> sb.append(p.toString()).append(System.lineSeparator()));
        }

        sb.append("Children: ").append(System.lineSeparator());
        if (childrenList.size() != 0) {
            childrenList.forEach(c -> sb.append(c.toString()).append(System.lineSeparator()));
        }
        return sb.toString();
    }
}
