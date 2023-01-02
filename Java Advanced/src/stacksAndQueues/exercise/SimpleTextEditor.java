package stacksAndQueues.exercise;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Scanner;

public class SimpleTextEditor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countRows = Integer.parseInt(scanner.nextLine());

        ArrayDeque<String> currentText = new ArrayDeque<>();

        for (int i = 0; i < countRows; i++) {
            String[] inputCommands = scanner.nextLine().split("\\s+");
            String command = inputCommands[0];
            String condition = Arrays.stream(inputCommands).count() > 1 ? inputCommands[1] : null;

            switch (command) {
                case "1":
                    String oldText = currentText.peek() != null ? currentText.peek() + condition : condition;
                    currentText.push(oldText);
                    break;
                case "2":
                    erases(currentText, Integer.parseInt(condition));
                    break;
                case "3":
                    if (currentText.peek() != null) {
                        System.out.println(currentText.peek().charAt(Integer.parseInt(condition) - 1));
                    }
                    break;
                case "4":
                    currentText.poll();
                    break;
            }

        }
    }

    private static ArrayDeque<String> erases(ArrayDeque<String> currentStack, int count) {
        String oldText = currentStack.peek();
        if (oldText.length() >= count) {
            String newText = oldText.substring(0, oldText.length() - count);
            currentStack.push(newText);
        }
        return currentStack;
    }
}
