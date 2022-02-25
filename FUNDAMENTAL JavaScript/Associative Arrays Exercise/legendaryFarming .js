function solve(input) {

    input = input.toLowerCase().split(" ");

    let farmingSpecial = {
        fragments: 0,
        shards: 0,
        motes: 0
    };
    let junk = {};
    let legendary = [];
    let inputL = input.length;

    for (let i = 0; i < inputL; i += 2) {
        let quantity = Number(input[i]);
        let material = input[i + 1];

        if (material === "fragments") {

            farmingSpecial[material] += quantity;
            if (farmingSpecial[material] >= 250) {
                farmingSpecial[material] -= 250;                
                legendary.push("Valanyr");
                break;
            }

        } else if (material === "shards") {

            farmingSpecial[material] += quantity;

            if (farmingSpecial[material] >= 250) {
                farmingSpecial[material] -= 250;               
                legendary.push("Shadowmourne");
                break;
            }

        } else if (material === "motes") {

            farmingSpecial[material] += quantity;

            if (farmingSpecial[material] >= 250) {
                farmingSpecial[material] -= 250;
               
                legendary.push("Dragonwrath");
                break;
            }
        } else {
            if (!junk.hasOwnProperty(material)) {
                junk[material] = quantity;

            } else {
                junk[material] += quantity;
            }
        }

    }

    let sortedSpecial = Object.entries(farmingSpecial).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunk = Object.keys(junk).sort((a, b) => a.localeCompare(b));

       console.log(`${legendary.join("")} obtained!`);
    
    sortedSpecial.forEach(el => console.log(`${el[0]}: ${el[1]}`));
    sortedJunk.forEach(el => console.log(`${el}: ${junk[el]}`));
}


solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 8 Shards 86 Motes 7 stones 19 silver');