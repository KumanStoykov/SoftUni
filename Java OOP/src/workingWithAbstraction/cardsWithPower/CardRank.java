package workingWithAbstraction.cardsWithPower;

public enum CardRank {

    ACE("ACE", 14),
    TWO("TWO", 2),
    THREE("THREE", 3),
    FOUR("FOUR", 4),
    FIVE("FIVE", 5),
    SIX("SIX", 6),
    SEVEN("SEVEN", 7),
    EIGHT("EIGHT", 8),
    NINE("NINE", 9),
    TEN("TEN", 10),
    JACK("JACK", 11),
    QUEEN("QUEEN", 12),
    KING("KING", 13);


    private String name;
    private int power;

    CardRank(String name, int power) {
        this.name = name;
        this.power = power;
    }

    public int getPower() {
        return power;
    }
}
