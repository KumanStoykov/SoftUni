package generics.customLIstSorter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class CustomList <T extends Comparable<T>> {

    private List<T> dataList;

    public CustomList() {
        this.dataList = new ArrayList<>();
    }

    public void add(T element) {
        dataList.add(element);
    }

    public T remove(int index) {
        return dataList.remove(index);
    }

    public boolean contains(T element) {
        return dataList.contains(element);
    }

    public void swap(int firstIndex, int secondIndex) {
        T firstItem = dataList.get(firstIndex);
        T secondItem = dataList.get(secondIndex);
        dataList.set(firstIndex, secondItem);
        dataList.set(secondIndex, firstItem);
    }

    public int countGreaterThan(T element) {
        int counter = 0;

        for (T item : dataList) {
            if(item.compareTo(element) > 0) {
                counter++;
            }
        }
        return counter;
    }

    public T getMax() {
        List<T> sortedItems = dataList.stream().sorted().collect(Collectors.toList());
        return sortedItems.get(sortedItems.size() - 1);
    }

    public T getMin() {
        List<T> sortedItems = dataList.stream().sorted().collect(Collectors.toList());
        return sortedItems.get(0);
    }

    public void sort() {
      dataList = dataList.stream().sorted().collect(Collectors.toList());
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();

        for (T item : dataList) {
            sb.append(item).append(System.lineSeparator());
        }
        return sb.toString().trim();
    }
}
