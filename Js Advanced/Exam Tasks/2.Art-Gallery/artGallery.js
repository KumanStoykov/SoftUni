class ArtGallery {
    constructor(create) {
        this.create = create;
        this.possibleArticles = {'picture': 200, 'photo': 50, 'item': 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);
        articleModel = articleModel.toLowerCase();
        const checkName = this.listOfArticles.find(art => art.articleName === articleName);

        if(!(this.possibleArticles).hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!");
        }
        
        let obj = {articleModel, articleName, quantity};
        if(!checkName) {
            this.listOfArticles.push(obj);
        } else {
            checkName.quantity += quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let checkName = this.guests.find(name => name.guestName === guestName);
        let points = 0;

        if(checkName) {
            throw new Error(`${guestName} has already been invited.`);
        }
        if(personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        } else {
            points = 50;
        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {
        let currentArticle = this.listOfArticles.find(artName => artName.articleName === articleName);
        let currentGuest = this.guests.find(guest => guest.guestName === guestName);

        if(currentArticle === undefined || currentArticle.articleModel !== articleModel) {
            throw new Error(`This article is not found.`);
        }
        if(currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        if(!currentGuest) {
            return `This guest is not invited.`;
        }

        if(this.possibleArticles[articleModel] > currentGuest.points) {
            return `You need to more points to purchase the article.`;
        } else {
           currentGuest.points -= this.possibleArticles[articleModel];
           currentGuest.purchaseArticle += 1;
           currentArticle.quantity -= 1;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;

    }
    showGalleryInfo(criteria) {
        let output = [];
        
        if(criteria === 'article') {
            output.push("Articles information:");
            this.listOfArticles.forEach(el => output.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`));
            return output.join('\n');
        }
        output.push("Guests information:");
        this.guests.forEach(el => output.push(`${el.guestName} - ${el.purchaseArticle}`));
        return output.join('\n');
    }
}


const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


