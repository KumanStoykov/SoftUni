function comments(input) {

    let commentsDate = {};
    let arrUser = [];
    let arrArticle = [];
    let counter = 0;

    for (let info of input) {

        if (info.includes("user")) {
            let userName = info.split("user ")[1].trim();

            if (!arrUser.includes(userName)) {
                arrUser.push(userName);
            }
        } else if (info.includes("article")) {
            let articleName = info.split("article")[1].trim();
            if (!arrArticle.includes(articleName)) {
                commentsDate[articleName] = {};
                arrArticle.push(articleName);
            }
        } else if (info.includes(":")) {
            let infoOfUser = info.split(": ");
            let [userName, articleName] = infoOfUser[0].split(" posts on ");
            let [commentTitle, commentContent] = infoOfUser[1].split(", ");
            let string = commentTitle.concat(` - ${commentContent}`);
            
                counter++
            if (arrUser.includes(userName) && arrArticle.includes(articleName)) {
                if(commentTitle !== undefined && commentContent !== undefined) {
                    let name = userName.concat(counter)
                    commentsDate[articleName][name] = string;
                }
            }
        }
    }
    let sorted = Object.entries(commentsDate)
        .sort(sortedOfLength);

    for (let info of sorted) {
        console.log(`Comments on ${info[0]}`);
        Object.entries(info[1]).sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(el => console.log(`--- From user ${el[0].slice(0, -1)}: ${el[1]}`));

    }
    function sortedOfLength(a, b) {
        let bLength = Object.values(b[1]).length;
        let aLength = Object.values(a[1]).length;
        return bLength - aLength;
    }
}
// comments(['user aUser123',
//     'someUser posts on someArticle: NoTitle, stupidComment',
//     'article Books', 'article Movies', 'article Shopping',
//     'user someUser', 'user uSeR4', 'user lastUser',
//     'uSeR4 posts on Books: I like books, I do really like them',
//     'uSeR4 posts on Movies: I also like movies, I really do',
//     'someUser posts on Shopping: title, I go shopping every day',
//     'someUser posts on Movies: Like, I also like movies very much'
// ]);

comments(['user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby', 'article Steven', 'user Liam', 'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'Mark posts on Steven: ttle, run'
])