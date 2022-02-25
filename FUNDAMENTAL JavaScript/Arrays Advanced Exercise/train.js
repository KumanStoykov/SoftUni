function train(input) {

    let trains = input.shift().split(' ').map(Number);
    let capacity = Number(input.shift());

    for (const line of input) {
        [comannd, num] = line.split(' ');

        if (comannd === 'Add') {
            let number = Number(num);
            trains.push(number);
        } else {
          let passengers = Number(comannd);
          for(let i = 0; i < trains.length; i++) {
              if(trains[i] + passengers <= capacity) {
                  trains[i] += passengers;
                  break;
              }
          }
        }

    }

    return trains.join(' ');


}

console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]));