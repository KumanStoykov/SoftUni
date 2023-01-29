package definingClasses.pokemonTrainer;

import java.util.ArrayList;
import java.util.List;

public class Trainer {

    private String name;
    private int badges;
    private List<Pokemon> listOfPokemon;

    public Trainer(String name, int badges) {
        this.name = name;
        this.badges = badges;
        listOfPokemon = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public int getBadges() {
        return badges;
    }

    public void setBadges(int badge) {
        badges += badge;
    }

    public void setPokemon(Pokemon pokemon) {
        listOfPokemon.add(pokemon);
    }

    public List<Pokemon> getCollectionOfPokemon() {
        return listOfPokemon;
    }

    public void damagePokemon() {

        for (int i = 0; i < listOfPokemon.size(); i++) {
            if (listOfPokemon.get(i).getHealth() > 10) {
                listOfPokemon.get(i).setHealth(10);
            } else {
                listOfPokemon.remove(i);
                i--;
            }

        }
    }

    @Override
    public String toString() {
        return String.format("%s %d %d", name, badges, listOfPokemon.size());
    }
}
