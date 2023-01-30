package definingClasses.google;

public class Children {
    private String childrenName;
    private String childrenBirthday;

    public Children(String childrenName, String childrenBirthday) {
        this.childrenName = childrenName;
        this.childrenBirthday = childrenBirthday;
    }

    @Override
    public String toString() {
        return String.format("%s %s", childrenName, childrenBirthday);
    }
}
