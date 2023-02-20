package workingWithAbstraction.cardsWithPower;

public class Card {

    private CardRank cardRank;
    private CardSuits cardSuit;

    public Card(CardRank cardRank,CardSuits cardSuit) {
        this.cardRank = cardRank;
        this.cardSuit = cardSuit;
    }

    private int cardPower() {
        return cardRank.getPower() + cardSuit.getPower();
    }

    @Override
    public String toString() {
        return String.format("Card name: %s of %s; Card power: %d", cardRank.name(), cardSuit.name(), cardPower());
    }
}
