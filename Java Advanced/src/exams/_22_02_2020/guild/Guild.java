package exams._22_02_2020.guild;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Guild {
    private String name;
    private int capacity;
    private List<Player> roster;

    public Guild(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.roster = new ArrayList<>();
    }

    public void addPlayer(Player player) {
        if (capacity > 0) {
            capacity--;
            roster.add(player);
        }
    }

    public boolean removePlayer(String name) {
        return roster.removeIf(p -> p.getName().equals(name));
    }

    public void promotePlayer(String name) {
        Player currPlayer = roster.stream().filter(p -> p.getName().equals(name))
                .findFirst()
                .orElse(null);
        if (currPlayer != null && !currPlayer.getRank().equals("Member")) {
            currPlayer.setRank("Member");
        }
    }

    public void demotePlayer(String name) {
        Player currPlayer = roster.stream().filter(p -> p.getName().equals(name))
                .findFirst()
                .orElse(null);
        if (currPlayer != null && !currPlayer.getRank().equals("Trial")) {
            currPlayer.setRank("Trial");
        }
    }

    public Player[] kickPlayersByClass(String clazz) {
        Player[] currPlayers = roster.stream().filter(p -> p.getClazz().equals(clazz)).toArray(Player[]::new);
        roster = roster.stream().filter(p -> !p.getClazz().equals(clazz)).collect(Collectors.toList());
        return currPlayers;
    }

    public int count() {
        return roster.size();
    }

    public String report() {
        StringBuilder sb = new StringBuilder();

        sb.append("Players in the guild: ").append(name).append(":").append(System.lineSeparator());
        roster.forEach(p -> sb.append(p.toString()).append(System.lineSeparator()));

        return sb.toString();
    }
}
