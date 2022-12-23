function guineaPig(input) {

    let food = Number(input.shift()) * 1000;
    let hay = Number(input.shift()) * 1000;
    let cover = Number(input.shift()) * 1000;
    let pigWeight = Number(input.shift()) * 1000;
    let isEnough = true;

    for(let i = 1; i <= 30; i++) {

        food -= 300;

        if(food <= 0) {
            isEnough = false;
            console.log("Merry must go to the pet store!");
            break;
        }


        if(i % 2 === 0) {
            let remainHay = food * 0.05;
            hay -= remainHay;
            if(hay <= 0) {
                isEnough = false;
                console.log("Merry must go to the pet store!");
                break;
            }

        } 
         if (i % 3 === 0) {
            cover = cover - (pigWeight / 3);
            if(cover <= 0) {
                isEnough = false;
                console.log("Merry must go to the pet store!");
                break;
            }
        }
    }

    food = (food / 1000).toFixed(2);
    hay = (hay / 1000).toFixed(2);
    cover = (cover / 1000).toFixed(2);

    if(isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${food}, Hay: ${hay}, Cover: ${cover}.`)
        
    }

    


}

guineaPig(["10", 
"5", 
"5.2", 
"1"]);

// guineaPig(["1", 
// "1.5", 
// "3", 
// "1.5"
// ]);