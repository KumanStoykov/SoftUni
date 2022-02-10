function solution() {

    class Post{
        constructor(title, content) {
            this.title = title;
            this.content = content;
            this.toPrint = [`Post: ${this.title}`, `Content: ${this.content}`];           
        }

        toString() {
            return this.toPrint.join('\n');
        }
    }
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(str) {
            this.comments.push(str);
        }

        toString() {
            if(this.comments.length == 0) {
                this.toPrint.push(`Rating: ${this.likes - this.dislikes}`)
                return super.toString();
            }
            this.toPrint.push(`Rating: ${this.likes - this.dislikes}`, `Comments:`);
            this.comments.forEach(el => this.toPrint.push(` * ${el}`));
            return super.toString();
        }

    }
    class BlogPost extends Post{
        constructor(title, content, views) {
            super(title, content);
            this.views = views;            
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            this.toPrint.push(`Views: ${this.views}`);
            return super.toString();
        }
    }
    return{Post, SocialMediaPost, BlogPost};
}

const classes = solution();
let post = new classes.Post("Post", "Content");

// console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
let blgPost = new classes.BlogPost("TestTitle", "TestContent", 0);
blgPost.view()
blgPost.view()
blgPost.view()
console.log(blgPost.view())

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
