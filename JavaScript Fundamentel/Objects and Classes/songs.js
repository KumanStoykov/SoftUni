function solving(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;

        }
    }
    let songs = [];
    let numberOfSongs = Number(input.shift());
    let typeSearch = input.pop();
   

    for (let index = 0; index < numberOfSongs; index++) {
        let [type, name, time] = input[index].split('_');
        songs.push(new Song(type, name, time))  
    }

    

    if(typeSearch === 'all') {
       printSongs(songs)
    } else {
        let searchSoung = songs.filter((s) => s.type === typeSearch);
        printSongs(searchSoung);
    }

    function printSongs(songs) {
        for (const song of songs) {
            console.log(song.name);
        }
    }



}

solving([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);