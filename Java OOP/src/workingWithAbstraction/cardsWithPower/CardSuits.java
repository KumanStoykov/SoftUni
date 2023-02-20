package workingWithAbstraction.cardsWithPower;

public enum CardSuits {
    CLUBS("CLUBS", 0),
    DIAMONDS( "DIAMONDS", 13),
    HEARTS( "HEARTS", 26),
    SPADES( "SPADES", 39);
    private String name;
    private int power;

    CardSuits(String name, int power) {
        this.name = name;
        this.power = power;
    }

    public int getPower() {
        return power;
    }

}
