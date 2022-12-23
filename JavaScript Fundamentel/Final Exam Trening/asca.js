function santasNewList(input) {

    let children = {};
    let presents = {};

    while(input[0] !== "END") {
        let row = input.shift().split("->");
        let name = row[0];
        let type = row[1];
        let points = Number(row[2]);

        if(name === "Remove") {
            let currentName = type;
            delete children[currentName];

        } else {
            if(!children.hasOwnProperty(name)) {
                children[name] = points;
            } else if(children.hasOwnProperty(name)) {
                children[name] += points;

            }
            if(!presents.hasOwnProperty(type)) {
                    presents[type] = points;
            } else if (presents.hasOwnProperty(type)) {
                presents[type] += points;
            }

        }
    }
    let sortChildren = Object.entries(children).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    console.log('Children:')
    sortChildren.forEach(el => console.log(`${el[0]} -> ${el[1]}`));
    console.log('Presents:')
    Object.entries(presents).forEach(el => console.log(`${el[0]} -> ${el[1]}`));




}


santasNewList(["Teddy->Clothes->8",
    "Johny->Toys->10",
    "Freddie->Candy->30",
    "Johny->Candy->20",
    "Carrie->Phone->1",
    "Carrie->Tablet->1",
    "Carrie->Candy->10",
    "Teddy->Toys->5",
    "Remove->Teddy",
    "END"]
    );