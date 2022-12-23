function muOnline(input) {

    let health = 100;
    let bitcoins = 0;
    let rooms = input.split("|");

    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        let [command, points] = rooms[i].split(" ");
        points = Number(points);


        if (command === "potion") {
            if (health + points <= 100) {
                health += points;
                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                let remainedHealth = 100 - health
                health = 100;
                console.log(`You healed for ${remainedHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command === "chest") {
            bitcoins += points;
            console.log(`You found ${points} bitcoins.`);

        } else {
            health -= points;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = true;
                break;
            } else {
                console.log(`You slayed ${command}.`);
            }
        }
    }

    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }



}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");