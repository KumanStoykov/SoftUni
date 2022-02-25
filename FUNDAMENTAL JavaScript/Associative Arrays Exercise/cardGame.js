function cardGame(input) {

    let symbolToPoints = {'J': 11, 'Q': 12, 'K': 13, 'A': 14, 'S': 4, 'H': 3, 'D': 2, 'C': 1};
    let playrs = {};
    let results = {};
    
    for (let command of input) {
        let tokens = command.split(': ');
        let playarName = tokens[0];
        let playarCards = tokens[1].split(', ');

        if(!Object.keys(playrs).includes(playarName)) {
            playrs[playarName] = []
        }
        playrs[playarName] = playrs[playarName].concat(playarCards);
    }

   for(let [playarName, playarCards] of Object.entries(playrs)) {
     results[playarName] = 0;

     for (let i = 0; i < playarCards.length; i++) {
         let cards = playarCards[i];
         if(playarCards.indexOf(cards) === i) {

             let cardsAsArray = cards.split('');
             let type = cardsAsArray.pop();
             let power = cardsAsArray.join('');
             let cadrsPoints = 0;
    
             if(Object.keys(symbolToPoints).includes(power)) {
                 cadrsPoints = symbolToPoints[power] * symbolToPoints[type];
             } else {
                 cadrsPoints = Number(power) * symbolToPoints[type];
             }
             results[playarName] += cadrsPoints;
         }
     }
   }
   for (let [key, value] of Object.entries(results)) {
       console.log(`${key}: ${value}`);
   }


}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);