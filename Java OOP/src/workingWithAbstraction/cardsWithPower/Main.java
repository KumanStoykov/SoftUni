package workingWithAbstraction.cardsWithPower;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String rank = br.readLine();
        String suit = br.readLine();

        Card card = new Card(CardRank.valueOf(rank), CardSuits.valueOf(suit));

        System.out.println(card.toString());


    }
}
