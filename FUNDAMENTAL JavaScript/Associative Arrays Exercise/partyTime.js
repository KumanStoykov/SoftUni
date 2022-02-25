function partyTime(input) {

    let list = {
        vip: [],
        regular: []
    }
    let name = input.shift();
    while (name !== 'PARTY') {


        let char = name[0];

        if (!isNaN(char)) {
            list.vip.push(name);
        } else {
            list.regular.push(name);
        }
        name = input.shift();
    }


    input.forEach(el => {
        if (list.vip.includes(el)) {
            let index = list.vip.indexOf(el);
            list.vip.splice(index, 1);
        } else if (list.regular.includes(el)) {
            let index = list.regular.indexOf(el);
            list.regular.splice(index, 1);
        }
    })

    // let guests = Object.values(list)
    // .sort((a, b) => a - b)
    // .join('\n')
    console.log(list.vip.length + list.regular.length);
    console.log(`${list.vip.join('\n')}\n${list.regular.join('\n')}`);




}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'SVQXQCbc'
]);