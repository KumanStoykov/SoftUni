function create(words) {

   let content = document.querySelector('#content');


   for (let word of words) {

      let div = document.createElement('div');
      let para = document.createElement('p');
      para.style.display = 'none'

      para.textContent = word;
      div.appendChild(para);
      content.appendChild(div);
      div.style.cursor = 'pointer'
      div.addEventListener('click', (e) => {
         if (para.style.display === 'none') {

            e.target = para.style.display = 'block';
         } else {
            e.target = para.style.display = 'none';
         }

      });
   }

}