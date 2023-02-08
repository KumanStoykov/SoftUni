package iteratorsAndComparators.strategyPattern;

import java.util.Comparator;

public class PersonNameComparator implements Comparator<Person> {
    @Override
    public int compare(Person first, Person second) {
        if(first.getName().length() == second.getName().length()) {
            char laterOfFirstPerson = first.getName().toLowerCase().charAt(0);
            char laterOfSecondPerson = second.getName().toLowerCase().charAt(0);
            return Character.compare(laterOfFirstPerson, laterOfSecondPerson);
        }
        return Integer.compare(first.getName().length(), second.getName().length());
    }
}
