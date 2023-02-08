package iteratorsAndComparators.stackIterator;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class CustomStack implements Iterable<Integer> {

    private List<Integer> stack;

    public CustomStack() {
        this.stack = new ArrayList<>();
    }

    public void push(Integer num) {
        stack.add(0, num);
    }

    public Integer pop() {
        if (stack.isEmpty()) {
            throw new IllegalStateException("No elements");
        }
        return stack.remove(0);
    }

    public int getLength() {
        return stack.size();
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<Integer>() {
            private int index;
            private boolean isFirstTime = false;

            @Override
            public boolean hasNext() {
                return index < stack.size();
            }

            @Override
            public Integer next() {
                Integer element = stack.get(index);
                index++;
                if (index == stack.size() && !isFirstTime) {
                    index = 0;
                    isFirstTime = true;
                }
                return element;
            }
        };
    }
}

