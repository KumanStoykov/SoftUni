package workingWithAbstraction.cardRank;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String input = br.readLine();
        System.out.println(input + ":");
        Arrays.stream(CardRank.values()).forEach(c -> System.out.println(c.toString()));

    }
}
