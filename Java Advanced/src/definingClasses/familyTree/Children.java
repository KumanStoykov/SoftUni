package definingClasses.familyTree;

public class Children {
    private String firstName;
    private String lastName;
    private String childrenBirthday;

    public void setFullName(String fullName) {
        firstName = fullName.split("\\s+")[0];
        lastName = fullName.split("\\s+")[1];
    }

    public void setChildrenBirthday(String childrenBirthday) {
        this.childrenBirthday = childrenBirthday;
    }

    @Override
    public String toString() {
        return String.format("%s %s %s", firstName, lastName, childrenBirthday);
    }
}
