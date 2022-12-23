function passwordReset(input) {

    let text = input.shift();
    let str = "";

    while (input[0] !== "Done") {
        let [...arg] = input.shift().split(" ");

        if (arg.includes("TakeOdd")) {
            text = text.split("").filter((char, index) => index % 2 !== 0).join("");
            console.log(text);
        } else if (arg.includes("Cut")) {
            let [command, index, length] = arg;
            index = Number(index);
            length = Number(length);
            str = text.substr(index, length);
            text = text.replace(str, "");
            console.log(text);
        } else if (arg.includes("Substitute")) {
            let [command, substring, substitute] = arg;
            let index = text.indexOf(substring);

            if (index !== -1) {

                text = text.replace(new RegExp(substring, "g"), substitute);

                console.log(text);

            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${text}`)

}


passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]));