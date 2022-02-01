function solve() {
   let active = true;
   let addProduct = document.querySelectorAll('.product-add');
   let checkout = document.querySelector('.checkout');
   let textarea = document.querySelector('textarea');
   let allProducts = [];
   let sum = 0;

   for (let currentBtn of addProduct) {


      currentBtn.addEventListener('click', addItems);



   }

   function addItems(e) {
      let name = e.currentTarget.parentNode.querySelector('.product-title').textContent;
      let money = e.currentTarget.parentNode.querySelector('.product-line-price').textContent;
      sum += Number(money);
     if(active) {
      if (!allProducts.includes(name)) {
         allProducts.push(name);
      }
      textarea.textContent += `Added ${name} for ${money} to the cart.\n`;
     }
   }

   checkout.addEventListener('click', totalPrice);

   function totalPrice() {
      textarea.textContent += `You bought ${allProducts.join(', ')} for ${sum.toFixed(2)}.`;
      checkout.disabled = true;
      active = false;

      // for (let btn of document.querySelectorAll('.add-product')) {
      //    btn.disabled = true;

      // }
   }


}