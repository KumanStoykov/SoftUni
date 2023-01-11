package stacksAndQueues.exercise;

import java.util.Scanner;

public class RecursiveFibonacci {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        long res = fibonacci(n + 1, 1, 1);
        System.out.println(res);
    }

    public static long fibonacci(int n, long val, long prev) {
        if(n < 2) return prev;
        return fibonacci(n - 1, val + prev, val);
    }
}
