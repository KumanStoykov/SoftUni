function tseamAccount(input) {

    let seamAccount = input.shift().split(" ");


    for (let info of input) {
        let [command, game] = info.split(" ");

        if(command === "Play!") {
            break;
        }

        if (command === "Install") {
            seamAccount.push(game);
        } else if (command === "Uninstall") {
            let indexOfGame = seamAccount.indexOf(game);

            if (seamAccount.includes(game)) {
                seamAccount.splice(indexOfGame, 1);
            }

        } else if (command === "Update"){
            let indexOfGame = seamAccount.indexOf(game);

            if (seamAccount.includes(game)) {
                seamAccount.splice(indexOfGame, 1);
                seamAccount.push(game);
            }

        } else if (command === "Expansion"){
            let [elOne, elTwo] = game.split("-");
            let indexOfGame = seamAccount.indexOf(elOne);
            let pushExpansion = `${elOne}:${elTwo}`;

            if (seamAccount.includes(elOne)) {
                seamAccount.splice(indexOfGame + 1, 0, pushExpansion)
               
            }
        }

    }

    console.log(seamAccount.join(" "));


}

// tseamAccount(['CS WoW Diablo',
//     'Install LoL',
//     'Uninstall WoW',
//     'Update Diablo',
//     'Expansion CS-Go',
//     'Play!'
// ]);

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion WoW-warcraft!',
'Play!']);