function addressBook(input) {

    let addrBook = {};

    for (let el of input) {
        let [name, address] = el.split(':');

        addrBook[name] = address;
    }
    
    let enterie = Object.entries(addrBook);
    let sort = enterie.sort((a, b) => a[0].localeCompare(b[0]));

   for (let key of sort) {
       console.log(`${key[0]} -> ${key[1]}`);
   }

    
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);