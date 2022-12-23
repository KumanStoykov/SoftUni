function movies(inputArr) {

    let films = [];

    for (let comannd of inputArr) {

        if (comannd.includes('addMovie')) {
            let [addMovieComannd, ...movieName] = comannd.split(' ');
            let movieNameAsString = movieName.join(' ');
            let movieObject = {
                name: movieNameAsString,
                director: '',
                date: '',

            }
            films.push(movieObject);
        } else if (comannd.includes('directedBy')) {
            let [name, director] = comannd.split(' directedBy ');
            let movie = films.find(m => m.name === name);

            if (movie) {
                movie.director = director
            }

        } else if (comannd.includes('onDate')) {
            let [name, date] = comannd.split(' onDate ');
            let movie = films.find(mObj => mObj.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }

    films.forEach(films => {
        if (films.name && films.date && films.director) {
            console.log(JSON.stringify(films));
        }
    })



}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);