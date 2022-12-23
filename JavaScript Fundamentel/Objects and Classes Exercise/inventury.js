function inventury(herosList) {

    let heros = [];

    for (let list of herosList) {
        let token = list.split(' / ');
        let name = token[0];
        let level = Number(token[1]);
        let item = token[2].split(', ');

        let heroData = {
            name,
            level,
            item,
        }

        heros.push(heroData);
    }

    let sortHeros = heros.sort((a, b) => a.level - b.level);
    
    for (let hero of sortHeros) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.item.sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }




}

inventury([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);