function hardWords([text, words]) {

    words = words.sort((a, b) => b.length - a.length);
    words.forEach(word => {
        text = text.replace('_'.repeat(word.length), word);
    });

    console.log(text)

}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);




// function solve(string) {

//     let words = string[1];
//     let boyText = string[0];
//     let count = 0;


//     for (let char of boyText) {

//         if (char === "_") {
//             count++;
//         } else if (char !== "_" && count > 0) {

//             for (let word of words) {

//                 if (word.length === count) {
//                     let repeat = "_".repeat(count);
//                     boyText = boyText.replace(repeat, word);
//                 }

//             }
//             count = 0;
//         }




//     }
    
//     console.log(boyText);

// }