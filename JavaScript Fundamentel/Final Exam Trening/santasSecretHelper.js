function santaSecretHelper(input) {

    let subtractNum = input.shift();
    let endCommand = input.pop();

    let newStr = [];

    input.map(line => {
        line = line.split("");
        let str = "";
        line.map(el => {
            el = el.charCodeAt() - subtractNum;
            str += String.fromCharCode(el);

        })

        newStr.push(str);
    });
    newStr.push(endCommand);
    let names = [];

    while (newStr[0] !== "end") {
        let row = newStr.shift();
        let pattern = /@([A-Za-z]+)[^@\-!:>]*!([GN])!/g;       
       let match = pattern.exec(row);

        if (match !== null) {
          let name = match[1];
          let behavior = match[2];

            if (behavior === "G") {
                
                names.push(name);

            }
        }

    }

    console.log(names.join("\n"));

}

santaSecretHelper([4,
    "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
    "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
    ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    "DReh}e=<4lhzj1%K%",
    "end"
]);