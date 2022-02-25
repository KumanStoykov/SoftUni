function rounding(num, fix) {

   if(fix > 15) {
       fix = 15;
   }

   const result = num.toFixed(fix);

    console.log(parseFloat(result));


}

rounding(3.1415926535897932384626433832795, 2);