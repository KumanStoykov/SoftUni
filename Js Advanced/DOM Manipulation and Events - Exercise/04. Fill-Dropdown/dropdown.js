function addItem() {
   let textInput = document.querySelector('#newItemText');
   let valueInput = document.querySelector('#newItemValue');
   
   const addOption = document.createElement('option');
   addOption.textContent = textInput.value;
   addOption.value = valueInput.value;
   if(textInput.value != ''){

       document.querySelector('#menu').appendChild(addOption);
       document.querySelector('#menu').appendChild(addOption);
   }
   textInput.value = '';
   valueInput.value = '';

}