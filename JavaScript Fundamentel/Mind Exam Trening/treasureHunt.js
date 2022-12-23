function treasureHunt(input) {

    let chest = input.shift().split("|");
    let endCommand = input.pop();

    for (let info of input) {
        let [command, ...arg] = info.split(" ");

        if(command === "Loot") {
            for (let el of arg) { 
                if(!chest.includes(el)) {
                    chest.unshift(el);
                }  
            }

        } else if (command === "Drop") {
            let [index] = arg.map(Number);

            if(chest.length - 1 > index && index >= 0) {
                let pushItem = chest.slice(index, index + 1);
                chest.splice(index, 1);
                chest.push(pushItem.join(""));
            }
            
        } else if (command === "Steal") {
            let [count] = arg.map(Number);

            let deletedItem = chest.splice(-count,count);
            console.log(deletedItem.join(", "));
        }
        
    }
    let sum = 0;

    for (let el of chest) {
        sum += el.length;  
    }
    let result = (sum / chest.length).toFixed(2);

    
    if(chest.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${result} pirate credits.`);

    }



}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]));