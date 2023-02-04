package generics.genericSwapMethodIntegers;

public class Box<T> {
    private T item;

    public Box(T item) {
        this.item = item;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(item.getClass().toString().substring(6)).append(": ").append(item);
        return sb.toString();
    }
}
