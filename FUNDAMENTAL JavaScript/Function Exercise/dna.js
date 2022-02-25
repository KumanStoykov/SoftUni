function printDna(num) {

    let dna = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
  
    let count = 0;
   
  
    for (let i = 0; i < num; i++) {
      
      if (i % 4 === 0) {
       
        console.log(`**${dna[count % 10 ]}${dna[(count % 10)  + 1]}**`);
        
      } else if (i % 4 === 1) {
        
        console.log(`*${dna[count % 10 ]}--${dna[(count % 10)  + 1]}*`);
        
      } else if (i % 4 === 2) {
       
        console.log(`${dna[count % 10 ]}----${dna[(count % 10)  + 1]}`);
        
      } else if (i % 4 === 3) {
       
        console.log(`*${dna[count % 10]}--${dna[(count % 10)  + 1]}*`);
        
      }
      count += 2;
      
  
    }
  }
  printDna(4);