const ChristmasMovies = require('./02. Christmas Movies_Resources');
const expect = require('chai').expect;

describe('ChristmasMove', () => {
    it('Istance without parameter', () => {
        let christmas = new ChristmasMovies();
        expect(christmas.movieCollection).to.eql([]);
        expect(christmas.movieCollection.length).to.deep.equal(0);
        expect(christmas.watched).to.eql({});
        expect(christmas.actors).to.deep.equal([]);
        expect(christmas.actors.length).to.deep.equal(0);

    });
    describe('buyMovie', () => {
        it('Should when move is undefined', () => {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin', 'Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
        });
        it('Should when move actors is semi', () => {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
        });
        it('Should when is Error', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'] });
            expect(() => christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.throw(Error,`You already own Home Alone in your collection!`);
        });
        it('Should when actors is not correct', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);

            expect(christmas.actors).to.eql([]);
        });
    });
    describe('Discard Move', () => {
        it('Should when is normal delete', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'The Grinch', actors: ['Benedict Cumberbatch', 'Pharrell Williams'] });
            christmas.watched['The Grinch'] = 1;
            expect(christmas.discardMovie('The Grinch')).to.equal('You just threw away The Grinch!');
        });
        it('Should when is in collection but not in watched', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'The Grinch', actors: ['Benedict Cumberbatch', 'Pharrell Williams'] });

            expect(() => christmas.discardMovie('The Grinch')).to.throw(Error, `The Grinch is not watched!`);
        });
        it('Should when is not in movieCollection', () => {
            let christmas = new ChristmasMovies();
            expect(() => christmas.discardMovie('The Grinch')).to.throw(Error, `The Grinch is not at your collection!`);
        });
        it('Should when is delete from watched', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'The Grinch', actors: ['Benedict Cumberbatch', 'Pharrell Williams'] });
            christmas.watched['The Grinch'] = 1;
            christmas.discardMovie('The Grinch');
            expect(christmas.watched).to.eql({});
        });
        it('Should when is delete from movieCollection', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'The Grinch', actors: ['Benedict Cumberbatch', 'Pharrell Williams'] });
            christmas.movieCollection.push({ name: 'Last Christmas', actors: ['Emilia Clarke', 'Henry Golding'] })
            christmas.watched['The Grinch'] = 1;
            christmas.discardMovie('The Grinch');
            expect(christmas.movieCollection).to.eql([{ name: 'Last Christmas', actors: ['Emilia Clarke', 'Henry Golding'] }]);
        });
    });
    describe('Watch Movie', () => {
        it('Should when is Error', () => {
            let christmas = new ChristmasMovies();
            expect(() => christmas.watchMovie('Home Alone')).to.throw(Error, 'No such movie in your collection!');
        });
        it('Should when is not increment', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'The Grinch', actors: ['Benedict Cumberbatch', 'Pharrell Williams'] });
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('The Grinch');
            expect(christmas.watched).to.eql({ 'The Grinch': 2 });
        });
    });

    describe('Favorite Movie', () => {
        it('Should when length is more then 0 and with 1 move', () => {
            let christmas = new ChristmasMovies();
            christmas.watched['The Grinch'] = 1;
            expect(christmas.favouriteMovie()).to.equal(`Your favourite movie is The Grinch and you have watched it 1 times!`);
        });
        it('Should when length is more then 0', () => {
            let christmas = new ChristmasMovies();
            christmas.watched['Home Alone'] = 3;
            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 3 times!');
        });
        it('Should when is not correct sort', () => {
            let christmas = new ChristmasMovies();
            christmas.watched['Home Alone'] = 3;
            christmas.watched['Home Alone 2'] = 1;
            christmas.watched['The Grinch'] = 4
            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is The Grinch and you have watched it 4 times!');
        });
        it('Should when is Error', () => {
            let christmas = new ChristmasMovies();
            expect(() => christmas.favouriteMovie('Home Alone')).to.throw(Error, 'You have not watched a movie yet this year!');
        });
    });
    describe('Most Starred Actor', () => {

        it('Should when is Error', () => {
            let christmas = new ChristmasMovies();
            expect(() => christmas.mostStarredActor('Home Alone')).to.throw(Error, 'You have not watched a movie yet this year!');
        });
        it('Should when normal return', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection = [{ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'] }, { name: 'Home Alone 2', actors: ['Macaulay Culkin'] }, { name: 'Last Christmas', actors: ['Emilia Clarke', 'Henry Golding'] }];
            expect(christmas.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 2 movies!');
        });
        it('Should when sort correct', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection = [{ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'] }, { name: 'Home Alone 2', actors: ['Macaulay Culkin'] }, { name: 'Last Christmas', actors: ['Emilia Clarke', 'Henry Golding'] }, { name: 'Last Christmas', actors: ['Emilia Clarke', 'Henry Golding'] }, { name: 'Last Christmas', actors: ['Emilia Clarke', 'Henry Golding'] }];
            expect(christmas.mostStarredActor()).to.equal('The most starred actor is Emilia Clarke and starred in 3 movies!');
        });
    });
});