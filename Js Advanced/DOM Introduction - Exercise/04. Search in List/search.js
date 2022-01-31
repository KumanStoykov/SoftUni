function search() {
   let getUlElements = document.querySelectorAll('#towns li');
   let input = document.querySelector('#searchText').value;
   let matches = 0;

   for (let town of getUlElements) {
            
      if(town.textContent.includes(input) && input !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;

      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
      
      document.querySelector('#result').textContent = `${matches} matches found`;
   
   }
   document.querySelector('#searchText').value = '';
   
   
}
