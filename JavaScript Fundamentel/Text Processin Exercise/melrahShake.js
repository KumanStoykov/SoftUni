function melrahShake(input) {

    let str = input[0];
    let pattern = input[1];

    while (pattern.length !== 0) {

        let firstIndex = str.indexOf(pattern);
        let lastIndex = str.lastIndexOf(pattern);

        if (firstIndex > -1 && lastIndex > -1 && firstIndex !== lastIndex) {
            str = str.split("");
            str.splice(firstIndex, pattern.length);
            str = str.join("");
            lastIndex = str.lastIndexOf(pattern);
            str = str.split("");
            str.splice(lastIndex, pattern.length);
            str = str.join("");
            
            console.log("Shaked it.");
            let index = Math.floor(pattern.length / 2);
            pattern = pattern.replace(pattern[index], "");
        } else {
            break;
        }
    }

    console.log("No shake.");
    console.log(str);
}


// melrahShake(['astalavista baby',
//     'a'
// ]);
melrahShake(['##mtm!!mm.mm*mtm.#',
    "#"
]);