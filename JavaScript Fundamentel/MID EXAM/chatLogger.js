function chatLogger(input) {

    let lastCommand = input.pop();
    let chatArr = [];

    for (let info of input) {
        let [command, ...arg] = info.split(" ");

        if (command === "Chat") {
            let [message] = arg;
            chatArr.push(message);

        } else if (command === "Delete") {
            let [message] = arg;
            let indexOf = chatArr.indexOf(message);

            if (indexOf >= 0) {
                chatArr.splice(indexOf, 1);
            }

        } else if (command === "Edit") {
            let [message, editVersion] = arg;
            let indexOf = chatArr.indexOf(message);

            if (indexOf >= 0) {
                chatArr.splice(indexOf, 1, editVersion);
            }
        } else if (command === "Pin") {
            let [message] = arg;
            let indexOf = chatArr.indexOf(message);

            if (indexOf >= 0) {
                let newWord = chatArr.splice(indexOf, 1).toString();
                chatArr.push(newWord);
            }

        } else if (command === "Spam") {
            arg.map((el) => {
                chatArr.push(el);
            })
        }

    }

    for (let chat of chatArr) {
        console.log(chat);
        
    }


}

chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"]);