function activationKeys(input) {

    let key = input.shift();

    while(input[0] !== "Generate") {
        let [command, ...arg] = input.shift().split(">>>");

        if(command === "Contains") {
            let [substring] = arg;
            let indexOf = key.indexOf(substring);

            if(indexOf !== -1){
                console.log(`${key} contains ${substring}`);

            } else {
                console.log(`Substring not found!`);
            }

        } else if (command === "Flip") {
            let [cases, starIndex, endIndex] = arg;
            let sliceKey = key.slice(starIndex, endIndex);

            if(cases === "Upper") {
             key = key.replace(sliceKey, sliceKey.toUpperCase());
                console.log(key);
            } else {
                key = key.replace(sliceKey, sliceKey.toLowerCase());
                console.log(key);
            }
        } else if (command === "Slice") {
            let [startIndex, endIndex] = arg;
            let textToChange = key.slice(startIndex, endIndex);
            key = key.replace(textToChange,"");
            console.log(key);

        }


    }
    console.log(`Your activation key is: ${key}`);

}


activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>OPQ",
"Contains>>>deF",
"Generate"]);