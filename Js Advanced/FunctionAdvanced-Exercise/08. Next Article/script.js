function getArticleGenerator(articles) {

   let arr = articles;


   return function show() {    

      if(arr.length > 0) {
        let content = document.querySelector('#content');
        let createArticle = document.createElement('article');
        let para = document.createElement('p');
        para.textContent = arr.shift();
        createArticle.appendChild(para);
        content.appendChild(createArticle);
      }
    }
    
}
