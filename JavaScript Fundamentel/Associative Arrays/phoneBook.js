function phoneB(input) {

    let phoneBook = {};

    for (let el of input) {
        let singleRow = el.split(' ');
        let name = singleRow[0];
        let phoneNumber = singleRow[1];

       phoneBook[name] = phoneNumber;
    }

    for (const key in phoneBook) {
     console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneB(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);