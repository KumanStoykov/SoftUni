package definingClasses.pokemonTrainer;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String command = scanner.nextLine();

        Trainer trainer;
        Pokemon pokemon;
        List<Trainer> trainers = new ArrayList<>();

        while (!command.equals("Tournament")) {
            String[] commandSplit = command.split("\\s+");
            String trainerName = commandSplit[0];
            String pokemonName = commandSplit[1];
            String element = commandSplit[2];
            int health = Integer.parseInt(commandSplit[3]);

            pokemon = new Pokemon(pokemonName, element, health);

            boolean hasTrainer = trainers.stream()
                    .anyMatch(t -> t.getName().equals(trainerName));

            if (!hasTrainer) {
                trainer = new Trainer(trainerName, 0);
                trainers.add(trainer);
            } else {
                trainer = trainers.stream()
                        .filter(t -> t.getName().equals(trainerName))
                        .findFirst()
                        .get();
                ;
            }

            trainer.setPokemon(pokemon);

            command = scanner.nextLine();
        }

        command = scanner.nextLine();

        while (!command.equals("End")) {
            String commandElement = command;

            for (Trainer t : trainers) {
                boolean hasPokemonEl = false;
                for (Pokemon p : t.getCollectionOfPokemon()) {
                    if (p.getElement().equals(commandElement)) {
                        hasPokemonEl = true;
                        break;
                    }
                }
                if (hasPokemonEl) {
                    t.setBadges(1);
                } else {
                    t.damagePokemon();
                }
            }


            command = scanner.nextLine();
        }
        trainers
                .stream()
                .sorted(Comparator.comparing(Trainer::getBadges).reversed().thenComparing(Trainer::getBadges))
                .forEach(t -> System.out.println(t.toString()));
    }
}
