function radioCrystals(input) {

    let neededThickness = input.shift();
  
    for (let crystal of input) {


        let cut = 0;
        let lap = 0;
        let grid = 0;
        let etch = 0;

        console.log(`Processing chunk ${crystal} microns`);

        if(crystal < neededThickness) {
            crystal += 1;
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${crystal} microns`);
            break;

        }

        while(crystal !== neededThickness) {
            

            if(crystal / 4 >= neededThickness) {
                crystal /= 4;
                cut++;
                if(crystal / 4 < neededThickness) {
                    crystal = Math.floor(crystal);
                    console.log(`Cut x${cut}`);
                    console.log(`Transporting and washing`);
                }
            } else if(crystal * 0.80 >= neededThickness) {

                crystal *= 0.80;
                lap++;
                if(crystal * 0.80 < neededThickness) {
                    crystal = Math.floor(crystal);
                    console.log(`Lap x${lap}`);
                    console.log(`Transporting and washing`);
                }

            } else if (crystal - 20 >= neededThickness) {

                crystal -= 20;
                grid++;
                if(crystal - 20 < neededThickness) {
                    crystal = Math.floor(crystal);
                    console.log(`Grind x${grid}`);
                    console.log(`Transporting and washing`);
                }

            } else if (crystal - 2 >= neededThickness - 1) {

                crystal -= 2;
                etch++;
                if(crystal - 2 < neededThickness - 1) {
                    crystal = Math.floor(crystal);
                    console.log(`Etch x${etch}`);
                    console.log(`Transporting and washing`);
                    if (crystal === neededThickness - 1) {
                        crystal += 1;
                        console.log(`X-ray x1`);
                        break;
        
                    }
                }
            } 

        }

        console.log(`Finished crystal ${crystal} microns`);
        
    }



}


radioCrystals([1375, 1374]);