function dungeonestDark(arr) {

    let healt = 100;
    let coins = 0;
    let rooms = arr[0].split("|");
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        let roomArr = rooms[i].split(" ");
        let item = roomArr[0];
        let n = Number(roomArr[1]);

        if (item === "potion") {
            if (100 - healt <= n) {
                n = 100 - healt;
            }
            healt += n;
            console.log(`You healed for ${n} hp.`);
            console.log(`Current health: ${healt} hp.`);
        } else if (item === "chest") {
            coins += n;
            console.log(`You found ${n} coins.`);
        } else {
            healt -= n;
            if (healt > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                isDead = true
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${healt}`);
    }

}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);