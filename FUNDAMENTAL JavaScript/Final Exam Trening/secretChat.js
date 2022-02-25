function secretChat(input) {

    let chatText = input.shift();
    
    let commandParser = {
        "InsertSpace":(chatText, index) => {
            index = Number(index);
           chatText = chatText.split("");
            chatText.splice(index, 0, " ");
            chatText = chatText.join("");
            console.log(chatText);
            return chatText;
        },
        "Reverse":(chatText, newSubstring) => {
            let index = chatText.indexOf(newSubstring);
            
            if(index !== -1) {
                let revers = newSubstring.split("").reverse().join("");
               chatText = chatText.split("");
               chatText.splice(index, newSubstring.length); 
               chatText = chatText.join("").concat(revers);        
                
                
                console.log(chatText);
                return chatText;

            } else {
                console.log("error");
                return chatText;
            }
        },
        "ChangeAll":(chatText, substring, replacement)=> {
             let regEx = RegExp(substring, "g");
             chatText = chatText.replace(regEx,replacement);
            console.log(chatText);
            return chatText;
        }
    }

    input.forEach(line => {

        if(line !== "Reveal") {
            let [command, ...arg] = line.split(":|:");
            let oldText = chatText;
            chatText = commandParser[command](chatText,...arg);
        }
        
    });
    console.log(`You have a new text message: ${chatText}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);