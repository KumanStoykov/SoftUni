package definingClasses.google;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Person> personList = new ArrayList<>();

        String command = scanner.nextLine();

        while (!command.equals("End")) {
            String[] input = command.split("\\s+");
            String name = input[0];
            String subClass = input[1];

            boolean personIsExisting = personList.stream().anyMatch(p -> p.getName().equals(name));
            Person person;
            if (!personIsExisting) {
                person = new Person(name);
                personList.add(person);
            } else {
                person = personList
                        .stream()
                        .filter(p -> p.getName().equals(name))
                        .findAny()
                        .get();
            }

            switch (subClass) {
                case "company":
                    String companyName = input[2];
                    String department = input[3];
                    double salary = Double.parseDouble(input[4]);
                    Company company = new Company(companyName, department, salary);
                    person.setCompany(company);
                    break;
                case "car":
                    String carModel = input[2];
                    int carSpeed = Integer.parseInt(input[3]);
                    Car car = new Car(carModel, carSpeed);
                    person.setCar(car);
                    break;
                case "pokemon":
                    String pokemonName = input[2];
                    String pokemonType = input[3];
                    Pokemon pokemon = new Pokemon(pokemonName, pokemonType);
                    person.setPokemonList(pokemon);
                    break;
                case "parents":
                    String parentName = input[2];
                    String parentBirthday = input[3];
                    Parents parents = new Parents(parentName, parentBirthday);
                    person.setParentsList(parents);
                    break;
                case "children":
                    String childrenName = input[2];
                    String childrenBirthday = input[3];
                    Children children = new Children(childrenName, childrenBirthday);
                    person.setChildrenList(children);
                    break;
            }


            command = scanner.nextLine();
        }

        String nameToPrint = scanner.nextLine();

        personList.stream()
                .filter(p -> p.getName().equals(nameToPrint))
                .forEach(p -> System.out.println(p.toString()));


    }
}

