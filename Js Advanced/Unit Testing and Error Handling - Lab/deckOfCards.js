function printDeckOfCards(cards) {

    let result = [];
    try {

        cards.forEach(el => {
            let face = el.slice(0, el.length - 1);
            let suit = el.slice(el.length - 1);
           result.push(createCard(face, suit).toString());
        });
        console.log(result.join(' '));
    } catch (error){
        console.log(error.message);

    }

    function createCard(face, suit) {

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660 ',
            H: '\u2665 ',
            D: '\u2666',
            C: '\u2663 '
        }
        if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
      

        return {
            face,
            suit,
            toString() {
                return `${this.face}${suits[this.suit]}`;
            }
        }
    }
  

}
printDeckOfCards(['AS', '10D', '1H', '1C']);
