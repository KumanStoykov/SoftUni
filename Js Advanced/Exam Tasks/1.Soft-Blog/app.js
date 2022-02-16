function solve() {
   const btnCreate = document.querySelector('.btn.create');

   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');

   const postSection = document.querySelector('.site-content main section');

   btnCreate.addEventListener('click', createBtnFunc);

   function createBtnFunc(e) {
      e.preventDefault();

      console.log(title)

      let articleElement = document.createElement("article");

      let h1 = document.createElement('h1');
      h1.textContent = title.value;
      articleElement.appendChild(h1);

      let pCategory = document.createElement('p');
      pCategory.textContent = `Category:`;
      let strongCategory = document.createElement('strong');
      strongCategory.textContent = category.value;
      pCategory.appendChild(strongCategory);
      articleElement.appendChild(pCategory);

      let pCreator = document.createElement('p');
      pCreator.textContent = `Creator:`;
      let strongCreator = document.createElement('strong');
      strongCreator.textContent = author.value;
      pCreator.appendChild(strongCreator);
      articleElement.appendChild(pCreator);

      let pContent = document.createElement('p');
      pContent.textContent = content.value;
      articleElement.appendChild(pContent);

      let divBtn = document.createElement('div');
      divBtn.classList.add('buttons');

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      divBtn.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', (e) => {
         articleElement.remove();
      })

      let archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      divBtn.appendChild(archiveBtn);

      let archiveSection = document.querySelector('.archive-section ol');

      archiveBtn.addEventListener('click', () => {
         let liElementArchive = document.createElement('li');
         liElementArchive.textContent = h1.textContent;
         archiveSection.appendChild(liElementArchive);
         Array.from(archiveSection.querySelectorAll('li'))
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => archiveSection.appendChild(li));
         articleElement.remove();
      });

      articleElement.appendChild(divBtn);

      postSection.appendChild(articleElement);
   }   
}
