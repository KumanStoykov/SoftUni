package definingClasses.familyTree;

import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Person person = new Person();
        List<String> parents = new ArrayList<>();
        List<String> children = new ArrayList<>();

        Map<String, String> allNames = new HashMap<>();

        String personData = scanner.nextLine();
        if (Character.isDigit(personData.charAt(0))) {
            person.setPersonBirthday(personData);
        } else {
            person.setFirstName(personData.split("\\s+")[0]);
            person.setLastName(personData.split("\\s+")[1]);
        }

        String input = scanner.nextLine();

        while (!input.equals("End")) {

            if (input.contains("-")) {
                String[] inputSplit = input.split(" - ");
                String parent = inputSplit[0];
                String child = inputSplit[1];
                parents.add(parent);
                children.add(child);

            } else if (input.split("\\s+").length == 3) {
                String[] inputSplit = input.split("\\s+");
                allNames.put(inputSplit[0] + " " + inputSplit[1], inputSplit[2]);
            }

            input = scanner.nextLine();
        }

        allNames.forEach((fullName, birthday) -> {
            if (fullName.equals(person.getFullName()) || birthday.equals(person.getPersonBirthday())) {
                person.setFullName(fullName);
                person.setPersonBirthday(birthday);
            }
        });
        allNames.remove(person.getFullName());

        for (int i = 0; i < parents.size(); i++) {
            if (parents.get(i).equals(person.getFullName()) || parents.get(i).equals(person.getPersonBirthday())) {
                Children child = new Children();

                if (Character.isAlphabetic(children.get(i).charAt(0))) {
                    child.setFullName(children.get(i));
                    child.setChildrenBirthday(allNames.get(children.get(i)));
                    person.setChildren(child);

                } else if (Character.isDigit(children.get(i).charAt(0))) {
                    String mapName = "";
                    for (Map.Entry<String, String> s : allNames.entrySet()) {
                        if (s.getValue().equals(children.get(i))) {
                            mapName = s.getKey();
                        }
                    }
                    child.setFullName(mapName);
                    child.setChildrenBirthday(children.get(i));
                    person.setChildren(child);
                }
            }
        }

        for (int i = 0; i < children.size(); i++) {
            if (children.get(i).equals(person.getFullName()) || children.get(i).equals(person.getPersonBirthday())) {
                Parents parent = new Parents();

                if (Character.isAlphabetic(parents.get(i).charAt(0))) {
                    parent.setFullName(parents.get(i));
                    parent.setParentBirthday(allNames.get(parents.get(i)));
                    person.setParents(parent);

                } else if (Character.isDigit(parents.get(i).charAt(0))) {
                    String mapName = "";
                    for (Map.Entry<String, String> s : allNames.entrySet()) {
                        if (s.getValue().equals(parents.get(i))) {
                            mapName = s.getKey();

                        }
                    }
                    parent.setFullName(mapName);
                    parent.setParentBirthday(parents.get(i));
                    person.setParents(parent);
                }
            }

        }

        System.out.println(person.toString());
    }
}
