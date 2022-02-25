function houseParty(arr) {

    let guest = [];

    for (let infoLine of arr) {
        let info = infoLine.split(' ');
        let name = info[0];

        if (!info.includes('not')) {

            if (!guest.includes(name)) {
                guest.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {

            if (guest.includes(name)) {
                guest = guest.filter((guestName) => guestName !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    return guest.join('\n');



}
console.log(houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]));