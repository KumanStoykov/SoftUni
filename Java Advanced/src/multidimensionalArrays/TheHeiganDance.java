package multidimensionalArrays;

import java.util.Scanner;

public class TheHeiganDance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int playerRow = 7;
        int playerCol = 7;

        double heiganPower = 3000000;
        int playerPower = 18500;

        double heiganDamage = Double.parseDouble(scanner.nextLine());
        String spell = "";

        while (true) {


            if (playerPower >= 0) {
                heiganPower -= heiganDamage;
            }
            if (spell.equals("Cloud")) {
                playerPower -= 3500;
            }

            if (playerPower <= 0 || heiganPower <= 0) {
                break;
            }

            String[] magicCoordinates = scanner.nextLine().split("\\s+");
            String spellName = magicCoordinates[0];
            int spellRow = Integer.parseInt(magicCoordinates[1]);
            int spellCol = Integer.parseInt(magicCoordinates[2]);

            if (isInMagicRange(spellRow, spellCol, playerRow, playerCol)) {
                if (!isInMagicRange(spellRow, spellCol, playerRow - 1, playerCol) && isInBounders(playerRow - 1)) {
                    playerRow -= 1;
                    spell = "";
                } else if (!isInMagicRange(spellRow, spellCol, playerRow + 1, playerCol) && isInBounders(playerRow + 1)) {
                    playerRow += 1;
                    spell = "";
                } else if (!isInMagicRange(spellRow, spellCol, playerRow, playerCol - 1) && isInBounders(playerCol - 1)) {
                    playerCol -= 1;
                    spell = "";
                } else if (!isInMagicRange(spellRow, spellCol, playerRow, playerCol + 1) && isInBounders(playerCol + 1)) {
                    playerCol += 1;
                    spell = "";
                } else {
                    spell = spellName.equals("Cloud") ? "Cloud" : "Eruption";
                    playerPower -= spell.equals("Cloud") ? 3500 : 6000;
                }

            }

        }

        String heigenDefeated = heiganPower > 0 ? String.format("%.2f", heiganPower) : "Defeated!";
        String spellToPrint = spell.equals("Cloud") ? "Plague Cloud" : "Eruption";
        String playerLose = playerPower > 0 ? String.valueOf(playerPower) : "Killed by " + spellToPrint;

        System.out.println("Heigan: " + heigenDefeated);
        System.out.println("Player: " + playerLose);
        System.out.printf("Final position: %d, %d", playerRow, playerCol);
    }

    private static boolean isInMagicRange(int spellRow, int spellCol, int playerRow, int playerCol) {
        return (spellRow - 1 <= playerRow && playerRow <= spellRow + 1) && (spellCol - 1 <= playerCol && playerCol <= spellCol + 1);
    }
    private static boolean isInBounders(int index) {
        return index >= 0 && index < 15;
    }
}
