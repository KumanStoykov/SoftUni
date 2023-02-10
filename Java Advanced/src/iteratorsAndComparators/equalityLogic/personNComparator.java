package iteratorsAndComparators.equalityLogic;

import java.util.Comparator;


public class personNComparator implements Comparator<Person> {

    @Override
    public int compare(Person first, Person second) {

        if (first.getName().compareTo(second.getName()) == 0) {
            return Integer.compare(first.getAge(), second.getAge());
        }
        return first.getName().compareTo(second.getName());

    }
}
