function plyingCards(face, suit) {

    const suits = {
        S: '\u2660 ', 
        H: '\u2665 ',
        D: '\u2666',
        C: '\u2663 '
    }
    if(face != face.toUpperCase() && suit != suit.toUpperCase()) {
        throw new Error(error);
    }

    return {
        face,
        suit,
        toString(){
            return `${this.face}${suits[this.suit]}`;
        }
    }


}

plyingCards('A', 'S')