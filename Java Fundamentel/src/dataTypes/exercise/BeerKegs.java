package dataTypes.exercise;

import java.util.Scanner;

public class BeerKegs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        byte groups = Byte.parseByte(scanner.nextLine());
        String biggestKeg = "";
        double biggestVolume = 0;
        for (int i = 0; i < groups; i++) {
            String model = scanner.nextLine();
            float radius = Float.parseFloat(scanner.nextLine());
            int height = Integer.parseInt(scanner.nextLine());

            double volume = Math.PI * Math.pow(radius, 2) * height;

            if (volume > biggestVolume) {
                biggestVolume = volume;
                biggestKeg = model;
            }
        }
        System.out.println(biggestKeg);
    }
}
