package definingClasses.familyTree;

public class Parents {
    private String firstName;
    private String lastName;
    private String parentBirthday;

    public void setFullName(String fullName) {
        firstName = fullName.split("\\s+")[0];
        lastName = fullName.split("\\s+")[1];
    }

    public void setParentBirthday(String parentBirthday) {
        this.parentBirthday = parentBirthday;
    }

    @Override
    public String toString() {
        return String.format("%s %s %s", firstName, lastName, parentBirthday);
    }
}
