function pianist(input) {

    let countPieces = Number(input.shift());
    let pieces = input.splice(0, countPieces);
    let songs = {};

    for(let line of pieces) {
        let [piece, composer, key] = line.split("|");

        if(!songs.hasOwnProperty(piece)) {
            songs[piece] = {composer, key};

        }
    }

    while(input[0] !== "Stop") {
        let [command,...arg] = input.shift().split("|");

        if(command === "Add") {
            let [piece, composer, key] = arg;
            if(songs.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                songs[piece] = {composer,key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === "Remove") {
            let [piece, composer,key] = arg;
            if(songs.hasOwnProperty(piece)) {
                console.log(`Successfully removed ${piece}!`);
                delete songs[piece];
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }


        } else if (command === "ChangeKey") {
            let [piece, newKey] = arg;
            if(songs.hasOwnProperty(piece)) {
                songs[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    let sorted = Object.entries(songs).sort((a,b) => a[0].localeCompare(b[0]));

    sorted.forEach(info => {
        console.log(`${info[0]} -> Composer: ${info[1].composer}, Key: ${info[1].key}`);
    })

}


pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);