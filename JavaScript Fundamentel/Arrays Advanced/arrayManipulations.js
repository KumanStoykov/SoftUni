function arrayManipulations(input) {

    let nums = input
        .shift()
        .split(' ');

    for (const line of input) {
        let [command, first, second] = line.split(' ');

        if (command === 'Add') {
            nums.push(first);
        } else if (command === 'Remove') {
            let index = nums.indexOf(first);
            if (index !== -1) {
                nums.splice(index, 1);
            }
        } else if (command === 'RemoveAt') {
            nums.splice(first, 1);
        } else if (command === 'Insert') {
            let index = Number(second);
            nums.splice(index, 0, first);
        }
    }

    return nums.join(' ');



}
console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]));