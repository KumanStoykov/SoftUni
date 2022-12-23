package basicSyntax.exercise;

import java.util.Scanner;

public class Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int peopleCount = Integer.parseInt((scanner.nextLine()));
        String type = scanner.nextLine();
        String day = scanner.nextLine();

        double totalPrice = 0.00;

        if (type.equals("Students")) {
            if (day.equals("Friday")) {
                totalPrice = peopleCount * 8.45;
            } else if (day.equals("Saturday")) {
                totalPrice = peopleCount * 9.80;
            } else if (day.equals("Sunday")) {
                totalPrice = peopleCount * 10.46;
            }
        } else if (type.equals("Business")) {
            if (day.equals("Friday")) {
                totalPrice = peopleCount * 10.90;
            } else if (day.equals("Saturday")) {
                totalPrice = peopleCount * 15.60;
            } else if (day.equals("Sunday")) {
                totalPrice = peopleCount * 16;
            }
        } else if (type.equals("Regular")) {
            if (day.equals("Friday")) {
                totalPrice = peopleCount * 15;
            } else if (day.equals("Saturday")) {
                totalPrice = peopleCount * 20;
            } else if (day.equals("Sunday")) {
                totalPrice = peopleCount * 22.50;
            }
        }

        if (type.equals("Regular") && peopleCount >= 10 && peopleCount <= 20) {
            totalPrice -= totalPrice * 0.05;
        } else if (type.equals("Business") && peopleCount >= 100) {
            totalPrice -= (totalPrice / peopleCount) * 10;
        } else if (type.equals("Students") && peopleCount >= 30) {
            totalPrice -= totalPrice * 0.15;
        }

        System.out.printf("Total price: %.2f", totalPrice);
    }
}
