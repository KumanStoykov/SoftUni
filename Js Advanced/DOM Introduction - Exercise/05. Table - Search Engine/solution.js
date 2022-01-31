function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      let inputField = document.querySelector('#searchField').value;
      let getElementsTbody = document.querySelectorAll('tbody tr');
      
      for (let student of getElementsTbody) {
         if(student.textContent.includes(inputField) && inputField != '') {
            student.classList.add('select');           
            
         } else if(inputField == '') {
            student.classList.remove('select');
         }
         
      }  
      document.querySelector('#searchField').value = '';
       
   }

   document.querySelector('#searchField').addEventListener('keypress', clearInput);

   function clearInput() {
      let getElementsTbody = document.querySelectorAll('tbody tr');

      getElementsTbody.forEach(student => student.classList.remove('select'));
   }
      
}