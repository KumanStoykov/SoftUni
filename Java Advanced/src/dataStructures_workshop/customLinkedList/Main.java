package dataStructures_workshop.customLinkedList;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        DoublyLinkedList list = new DoublyLinkedList();

        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);

        list.addLast(9);
        list.addLast(5);


        System.out.println(Arrays.toString(list.toArray()));
        ;
    }
}
