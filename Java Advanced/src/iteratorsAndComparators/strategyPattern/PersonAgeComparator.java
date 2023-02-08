package iteratorsAndComparators.strategyPattern;

import java.util.Comparator;

public class PersonAgeComparator implements Comparator<Person> {
    @Override
    public int compare(Person first, Person second) {
        return Integer.compare(first.getAge(), second.getAge());
    }
}
