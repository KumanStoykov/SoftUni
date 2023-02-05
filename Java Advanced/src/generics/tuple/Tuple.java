package generics.tuple;

public class Tuple<T,E> {

    private T firstItem;
    private E secondItem;

    public Tuple(T firstItem, E secondItem) {
        this.firstItem = firstItem;
        this.secondItem = secondItem;
    }

    public T getFirstItem() {
        return firstItem;
    }

    public void setFirstItem(T firstItem) {
        this.firstItem = firstItem;
    }

    public E getSecondItem() {
        return secondItem;
    }

    public void setSecondItem(E secondItem) {
        this.secondItem = secondItem;
    }

    @Override
    public String toString() {
        return String.format(firstItem + " -> " + secondItem);
    }
}
