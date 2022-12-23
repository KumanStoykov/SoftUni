function arrayManipulator(arr, commandInfo) {

    for (let info of commandInfo) {
        let [command, ...agr] = info.split(" ");

        if (command === "add") {
            let [index, element] = agr;
            index = Number(index);
            element = Number(element);
            arr.splice(index, 0, element);

        } else if (command === "addMany") {
            let [index,...elements] = agr;
            let numbers = elements.map(Number);
            index = Number(index);
            arr.splice(index, 0,...numbers);
           
        } else if (command === "contains") {
            let index = Number(agr);
            let currentIndex = arr.indexOf(index);
            console.log(currentIndex);

        } else if (command === "remove") {
            let index = Number(agr);
            arr.splice(index, 1);
        } else if (command === "shift") {

            let rotate = Number(agr);

            for(let i = 0; i < rotate; i++) {
                let firstNumber = arr.shift();
                arr.push(firstNumber);
            }

        } else if (command === "sumPairs") {

            let sumArr = sumPair(arr);
            arr.splice(0, arr.length);

            sumArr.forEach(el => {
                arr.push(el);

            });

        } else if (command === "print") {
            console.log(`[ ${arr.join(", ")} ]`);
        }


    }

 

    function sumPair(arr) {

        let arrL = arr.length;
        let newArr = [];

        for (let i = 0; i < arrL; i += 2) {

            let numA = Number(arr[i]);
            let numB = Number(arr[i + 1]);

            if (isNaN(numB)) {
                numB = 0;
            }

            let result = numA + numB;

            newArr.push(result);
        }
        return newArr;

    }

    


}


arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);