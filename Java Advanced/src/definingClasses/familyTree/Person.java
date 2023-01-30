package definingClasses.familyTree;

import java.util.ArrayList;
import java.util.List;

public class Person {
    private String firstName;
    private String lastName;
    private String personBirthday;
    private List<Parents> parentsList;
    private List<Children> childrenList;

    public Person() {
        parentsList = new ArrayList<>();
        childrenList = new ArrayList<>();
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFullName() {
        return firstName + " " + lastName;
    }
    public void setFullName(String fullName) {
        firstName = fullName.split("\\s+")[0];
        lastName = fullName.split("\\s+")[1];
    }

    public String getPersonBirthday() {
        return personBirthday;
    }

    public void setPersonBirthday(String personBirthday) {
        this.personBirthday = personBirthday;
    }

    public void setParents(Parents parents) {
        parentsList.add(parents);
    }

    public void setChildren(Children children) {
        childrenList.add(children);
    }

    public String personData() {
        return firstName + " " + lastName + " " + personBirthday;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();

        sb.append(personData()).append(System.lineSeparator())
                .append("Parents: ").append(System.lineSeparator());

        if(!parentsList.isEmpty()) {
            parentsList.forEach(p -> sb.append(p.toString()).append(System.lineSeparator()));
        }

        sb.append("Children: ").append(System.lineSeparator());

        if(!childrenList.isEmpty()) {
            childrenList.forEach(c -> sb.append(c.toString()).append(System.lineSeparator()));
        }
        return sb.toString();
    }
}
