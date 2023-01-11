package stacksAndQueues.exercise;

import java.util.ArrayDeque;
import java.util.Scanner;

public class InfixToPostfix {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> outputQueue = new ArrayDeque<>();
        ArrayDeque<String> operatorStack = new ArrayDeque<>();

        String[] input = scanner.nextLine().split("\\s+");

        for (String c : input) {

            if (Character.isDigit(c.charAt(0)) || Character.isAlphabetic(c.charAt(0))) {
                outputQueue.offer(c);
            } else if (!c.equals("(")) {
                String lastOperator = operatorStack.peek() == null ? "" : operatorStack.peek();
                int currPrecedence = precedencePower(c);
                int lastOpPrecedence = precedencePower(lastOperator);

                if (currPrecedence == lastOpPrecedence) {
                    outputQueue.offer(operatorStack.pop());
                    operatorStack.push(c);
                } else if (currPrecedence < lastOpPrecedence && !c.equals(")")) {
                    while (currPrecedence < lastOpPrecedence || operatorStack.size() == 0) {
                        outputQueue.offer(operatorStack.pop());
                        lastOpPrecedence = precedencePower(operatorStack.peek());
                    }
                    if (currPrecedence == lastOpPrecedence) {
                        outputQueue.offer(operatorStack.pop());
                        operatorStack.push(c);
                    } else {
                        operatorStack.push(c);
                    }
                } else if (c.equals(")")) {
                    while (!operatorStack.peek().equals("(")) {
                        outputQueue.offer(operatorStack.pop());
                    }
                    operatorStack.pop();
                } else {
                    operatorStack.push(c);
                }
            } else {
                operatorStack.push(c);
            }

        }
        while (operatorStack.size() != 0) {
            outputQueue.offer(operatorStack.pop());
        }
        while (outputQueue.size() != 0) {
            System.out.print(outputQueue.poll() + " ");
        }
    }

    private static int precedencePower(String operator) {
        switch (operator) {
            case "-":
                return 2;
            case "+":
                return 2;
            case "*":
                return 3;
            case "/":
                return 3;
            default:
                return 0;
        }
    }


}
