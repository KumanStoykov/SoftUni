package generics.customList;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        CustomList<String> customList = new CustomList();

        String input = scanner.nextLine();

        while (!input.equals("END")) {
            String[] splitInput = input.split("\\s+");
            String command = splitInput[0];

            String element = null;
            int firstIndex = 0;
            int secondIndex = 0;

                    switch (command) {
                        case "Add":
                            element = splitInput[1];
                            customList.add(element);
                            break;
                        case "Remove":
                            firstIndex = Integer.parseInt(splitInput[1]);
                            customList.remove(firstIndex);
                            break;
                        case "Contains":
                            element = splitInput[1];
                            System.out.println(customList.contains(element));;
                            break;
                        case "Swap":
                            firstIndex = Integer.parseInt(splitInput[1]);
                            secondIndex = Integer.parseInt(splitInput[2]);
                            customList.swap(firstIndex, secondIndex);
                            break;
                        case "Greater":
                            element = splitInput[1];
                            System.out.println(customList.countGreaterThan(element));;
                            break;
                        case "Max":
                            System.out.println(customList.getMax());;
                            break;
                        case "Min":
                            System.out.println(customList.getMin());;
                            break;
                        case "Print":
                            System.out.println(customList.toString());;
                            break;
                    }

            input = scanner.nextLine();
        }
    }

}

//Add aa
//Add bb
//Add cc
//Max
//Min
//Greater bb
//Swap 0 2
//Contains aa
//Print
//END

