function bookShelf(input) {

    let books = {};
    let shelf = [];

    for (let info of input) {

        if (info.includes("->")) {
            let [shelfId, shelfGenre] = info.split(" -> ");


            if (!books.hasOwnProperty(shelfId)) {
                books[shelfId] = [];
                books[shelfId][shelfGenre] = [];
            }

        } else if (info.includes(":")) {
            let [bookTitle, genre] = info.split(", ");


            Object.keys(books).forEach(shelfId => {
                if (books[shelfId].hasOwnProperty(genre)) {

                    books[shelfId][genre].push(bookTitle);
                }
            })


        }

    }

    let sortedOfBooksCount = Object.entries(books).sort((a, b) => {
        let aLength = Object.values(a[1])[0].length;
        let bLength = Object.values(b[1])[0].length;
        return bLength - aLength;
    });

    for (let shelf of sortedOfBooksCount) {
        let shelfGenre = Object.keys(shelf[1]);
        let booksCount = Object.values(shelf[1])[0].length;

        console.log(`${shelf[0]} ${shelfGenre}: ${booksCount}`);
        Object.values(shelf[1])[0]
        .sort((a, b) => a.localeCompare(b))
        .forEach(book => console.log(`--> ${book}`));
    }



}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);