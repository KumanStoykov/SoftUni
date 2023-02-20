package workingWithAbstraction.cardSuit;

public enum CardSuits {
    CLUBS("CLUBS"),
    DIAMONDS( "DIAMONDS"),
    HEARTS( "HEARTS"),
    SPADES( "SPADES");
    private String name;

    CardSuits(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("Ordinal value: " + this.ordinal()
                + "; Name value: " + getName());
    }
}
