package generics.genericCountMethodString;

public class Box<T extends Comparable> {
    private T item;

    public Box(T item) {
        this.item = item;
    }

    public T getItem() {
        return this.item;
    }
    @Override
    public String toString() {
        return String.format(item.toString());
    }
}
