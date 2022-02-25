function factDigits(n) {

   let result = Number.bi(factorial(n));
   
   function factorial(num) {
      if(num < 1) {
         return 0;
      } else if (num < 2){
         return 1;
      }
      return num * factorial(num - 1);
   }
   let length = result.toString().length;
   return length;
   
 }
 console.log(factDigits(777));