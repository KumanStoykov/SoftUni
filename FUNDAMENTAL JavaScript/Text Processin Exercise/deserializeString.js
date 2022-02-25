function deserializeString(input) {

    let str = [];

    while(input[0] !== "end") {
        let row = input.shift();
        let char = row.split(":");
        let indexOfChar = char[1].split("/");

        for (let index of indexOfChar) {
            index = Number(index);

            str[index] = char[0];
 
        }
    }
    console.log(str.join(""));

}


deserializeString(['a:0/2/4/6',
'b:1/3/5',
'end']);