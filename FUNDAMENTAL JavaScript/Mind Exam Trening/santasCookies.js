function santaCookies(dateArr) {

    let countBatch = dateArr.shift();
    let sumOfBoxes = 0;


    for(let i = 0; i < dateArr.length - 1; i += 3) {
        let flour = dateArr[i];
        let sugar = dateArr[i + 1];
        let cocoa = dateArr[i + 2];

        let flourCups = Math.floor(flour / 140);
        let sugarSpoons = Math.floor(sugar / 20);
        let cocoaSpoons = Math.floor(cocoa / 10);
        
        let filter = Math.min(flourCups,sugarSpoons, cocoaSpoons);
        let cookies = Math.floor(((170 * filter) / 25));
       


        let box = Math.floor(cookies / 5)
       
        
        
        if(flourCups < 1 || sugarSpoons < 1 || cocoaSpoons < 1) {
            console.log("Ingredients are not enough for a box of cookies.");
        } else {
            console.log(`Boxes of cookies: ${box}`);
            sumOfBoxes += box;
        }

    }

    console.log(`Total boxes: ${sumOfBoxes}`);


}

santaCookies([2,
    200,
    300,
    500,
    200,
    200,
    50,
    ]);

    // santaCookies([1,
    //     14000,
    //     2000,
    //     1000,
    //     ]);