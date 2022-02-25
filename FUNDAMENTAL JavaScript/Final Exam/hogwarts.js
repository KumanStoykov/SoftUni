function hogwarts(input) {

    let text = input.shift();

    let commandParser = {
        "Abjuration": (text) => {
            text = text.split("").map(el => el.toUpperCase());
            text = text.join("");
            console.log(text);
            return text;
        },
        "Necromancy": (text) => {
            text = text.split("").map(el => el.toLowerCase());
            text = text.join("");
            console.log(text);
            return text;
        },
        "Illusion": (text, index, letter) => {
            index = Number(index);
            
            if (text.length - 1>= index && index >= 0) {
                text = text.split("")
                text.splice(index, 1, letter);
                text = text.join("");
                console.log("Done!");
                return text;
            } else {
                console.log("The spell was too weak.");
                return text;
            }
        },
        "Divination": (text, first, secund) => {

            if (text.includes(first)) {

                let regEx = RegExp(first, "g");
                text = text.replace(regEx, secund);
                console.log(text);
            }
            return text;
        },
        "Alteration": (text, substring) => {
            if (text.includes(substring)) {
                text = text.replace(substring, "");
                console.log(text);

            }
            return text;
        }
    }

    input.forEach(line => {
        if (line !== "Abracadabra") {
            let [command, ...arg] = line.split(" ");

            if (command === "Abjuration" || command === "Necromancy" || command === "Illusion" || command === "Divination" || command === "Alteration") {
                text = commandParser[command](text, ...arg);
            } else {
                console.log("The spell did not work!");
            }
        }
    });
}


hogwarts(((["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"])
));