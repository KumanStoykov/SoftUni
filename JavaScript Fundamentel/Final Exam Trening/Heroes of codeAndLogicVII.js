function codeAndLogicVII(input) {

    let count = Number(input.shift());
    let hero = input.slice(0, count);
    let commands = input.slice(count, input.length - 1);
    let heroes = {};

    for(let line of hero) {
        let [heroName, hitPoints, manaPoints] = line.split(" ");
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);
        if(!heroes.hasOwnProperty(heroName)) {

            heroes[heroName] = {hitPoints, manaPoints};
        }
    }

    
    for (let row of commands) {
        let [...arg] = row.split(" - ");

        if(arg.includes("CastSpell")) {
            let [command, heroName, manaPoints, spell] = arg;
            manaPoints = Number(manaPoints);
            let enough = heroes[heroName].manaPoints - manaPoints;
            if(enough >= 0) {
                heroes[heroName].manaPoints = enough;
                console.log(`${heroName} has successfully cast ${spell} and now has ${enough} MP!`);

            } else {
                console.log(`${heroName} does not have enough MP to cast ${spell}!`);
            }

        } else if (arg.includes("TakeDamage")) {
            let [command, heroName, damage, attacker] = arg;
            damage = Number(damage);
            let enough = heroes[heroName].hitPoints - damage;

            if(enough > 0) {
                heroes[heroName].hitPoints = enough;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${enough} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName]
            }


        } else if (arg.includes("Recharge")) {
            let [command, heroName, amount] = arg;
            amount = Number(amount);
            let mana = heroes[heroName].manaPoints + amount;
            if(mana <= 200) {
                console.log(`${heroName} recharged for ${amount} MP!`);
                heroes[heroName].manaPoints = mana;
               
            } else {
                let manaCurrent = 200 - heroes[heroName].manaPoints;
                console.log(`${heroName} recharged for ${manaCurrent} MP!`);
                heroes[heroName].manaPoints = 200;
            }
        } else if(arg.includes("Heal")) {
            let [command, heroName, amount] = arg;
            amount = Number(amount);
            let heal = heroes[heroName].hitPoints + amount;
            if(heal <= 100) {
                console.log(`${heroName} healed for ${amount} HP!`);
                heroes[heroName].hitPoints = heal;
            } else {
                let currentHeal = 100 - heroes[heroName].hitPoints;
                console.log(`${heroName} healed for ${currentHeal} HP!`);
                heroes[heroName].hitPoints = 100;
            }
        }       
    }
    let sorted = Object.entries(heroes).sort((a, b) =>{
        let healA = Object.entries(a[1]);
        let healB = Object.entries(b[1]);
        let result = healB[0][1] - healA[0][1];
        if(result === 0) {
            return a[0].localeCompare(b[0]);
        } else {
            return result;
        }
    })

    for (let kvp of sorted) {
        console.log(`${kvp[0]}`);
        console.log(`  HP: ${kvp[1].hitPoints}`);
        console.log(`  MP: ${kvp[1].manaPoints}`);
        
    }


}


// codeAndLogicVII([2,
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"
//     ]);

codeAndLogicVII([4,
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 29",
    "Recharge - Adela - 49",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ])