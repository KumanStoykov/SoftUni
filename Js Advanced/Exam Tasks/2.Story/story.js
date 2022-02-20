class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        let likeLength = this._likes.length;
        if (likeLength === 0) {
            return `${this.title} has 0 likes`;
        } else if (likeLength === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${likeLength - 1} others like this story!`;
    }

    like(username) {

        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {

        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }
    comment(username, content, id) {
        let findId = this._comments.find(com => com.id === id);
        let obj = {};

        if (id == undefined || findId == undefined) {
        obj = {
            id: this._comments.length + 1,
            username,
            content,
            replies: [],
        }
        this._comments.push(obj);
        return `${username} commented on ${this.title}`;
        }

        let rep = {
            id: Number(`${findId.id}.${findId.replies.length + 1}`),
            username,
            content,
        }
        findId.replies.push(rep); 
        return "You replied successfully";
    }

    toString(sortingType) {
        let toPrint = [];
        let comment = this._comments;

        toPrint.push(`Title: ${this.title}`);
        toPrint.push(`Creator: ${this.creator}`);
        toPrint.push(`Likes: ${this._likes.length}`);
        toPrint.push(`Comments:`);

        if(comment.length === 0) {
            return toPrint.join('\n');
        }

        if(sortingType === 'asc') {
            comment.sort((a, b) => a.id - b.id).map(com => {
                toPrint.push(`-- ${com.id}. ${com.username}: ${com.content}`);
                if(com.replies.length > 0) {
                    com.replies
                    .sort((a, b) => a.id - b.id)
                    .map(el => toPrint.push(`--- ${el.id}. ${el.username}: ${el.content}`));
                }
            });
            return toPrint.join('\n');
        } else if (sortingType === 'desc') {
            comment.sort((a, b) => b.id - a.id).map(com => {
                toPrint.push(`-- ${com.id}. ${com.username}: ${com.content}`);
                if(com.replies.length > 0) {
                    com.replies
                    .sort((a, b) => b.id - a.id)
                    .map(el => toPrint.push(`--- ${el.id}. ${el.username}: ${el.content}`));
                }
            });
            return toPrint.join('\n');
        } else {
            comment.sort((a, b) => a.username.localeCompare(b.username)).map(com => {
                toPrint.push(`-- ${com.id}. ${com.username}: ${com.content}`);
                if(com.replies.length > 0) {
                    com.replies
                    .sort((a, b) => a.username.localeCompare(b.username))
                    .map(el => toPrint.push(`--- ${el.id}. ${el.username}: ${el.content}`));
                }
            });
            return toPrint.join('\n');
        }
    }
}

// let art = new Story("My Story", "Anny");
// art.like("John"), "John liked My Story!";
// art.likes, "John likes this story!";
// art.like("Ivan"),"Ivan liked My Story!";
// art.like("Steven"), "Steven liked My Story!";
// art.likes, "John and 2 others like this story!";
// art.comment("Anny", "Some Content"),"Anny commented on My Story";
// art.comment("Ammy", "New Content", 1),"You replied successfully";
// art.comment("Zane", "Reply", 2),"Zane commented on My Story";
// art.comment("Jessy", "Nice :)"), "Jessy commented on My Story";
// art.comment("SAmmy", "Reply@", 2), "You replied successfully" ;

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log(art.toString('asc'))
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
