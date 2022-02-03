function argumentInfo() {


    function checkType(input) {
        let arr = [];
        
        for (let element of input) {
            let obj = {};
            obj[typeof element] = element;
            arr.push(obj)
        }
        return arr;
    }

    function checkValues(input) {
        let obj = {};
        for (let el of input) {
            if (!obj.hasOwnProperty(typeof el)) {
                obj[typeof el] = 1;
            } else {
                obj[typeof el] += 1;
            }
        }
        return obj;
    }
    function print(arrType, objValue) {
        arrType.map(type => {
          let key = Object.keys(type);
          console.log(`${key}: ${type[key]}`);
        });
        Object.entries(objValue).sort((a, b) => b[1] - a[1]).map(entry => console.log(`${entry[0]} = ${entry[1]}`));
    }


    print(checkType(arguments), checkValues(arguments));


}

argumentInfo({ name: 'bob' }, 3.333, 9.999);