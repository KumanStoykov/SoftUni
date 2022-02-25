function theImitationGame(input) {

    let text = input.shift();

    let commandParser = {
        "Move":(text, numOfLetters)=>{
            numOfLetters = Number(numOfLetters);
            text = text.split("");
            let char = text.splice(0, numOfLetters);
            text.push(...char)
            return text.join("");    
        },
        "Insert":(text,index,value)=>{
            index = Number(index);
            text = text.split("")
            text.splice(index, 0, value);                     

            return text.join("");
        },
        "ChangeAll":(text, substring, replacement)=>{
            text = text.split("").map(el => {
              return  el.replace(substring, replacement)
            });

            return text.join("");
        }
    };

    input.forEach(line => {
        if(line !== "Decode") {
            let [command, ...arg] = line.split("|");
            let oldText = text;
            text = commandParser[command](text,...arg);

        }
        
    });
    console.log(`The decrypted message is: ${text}`);



}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]);