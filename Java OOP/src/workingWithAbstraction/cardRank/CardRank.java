package workingWithAbstraction.cardRank;

public enum CardRank {

    ACE("ACE"),
    TWO("TWO"),
    THREE("THREE"),
    FOUR("FOUR"),
    FIVE("FIVE"),
    SIX("SIX"),
    SEVEN("SEVEN"),
    EIGHT("EIGHT"),
    NINE("NINE"),
    TEN("TEN"),
    JACK("JACK"),
    QUEEN("QUEEN"),
    KING("KING");


    private String name;

    CardRank(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("Ordinal value: " + this.ordinal()
                + "; Name value: " + name);
    }
}
