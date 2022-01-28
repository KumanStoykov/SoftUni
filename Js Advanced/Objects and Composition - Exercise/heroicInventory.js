function heroicInventory(inputArr) {

    let jsonArr = [];

    for (let hero of inputArr) {

        let [name, level,restItem] = hero.split(' / ');
       
        

        let heroObj = {
            name,
            level: Number(level),
            items: restItem ? restItem.split(', '): [],
        };
        jsonArr.push(heroObj);

    }
    return JSON.stringify(jsonArr);


}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / ',
    'Hes / 1 / Desolator, Sentinel, Antara']
));