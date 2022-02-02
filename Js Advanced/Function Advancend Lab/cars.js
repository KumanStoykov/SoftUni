function cars(inputArr) {
    let obj = {};

    let commandEngine = {
        create(name, inherit, parentName) {
            obj[name] = inherit  ?  Object.create(obj[parentName]) : {};
        },
        set(name, key, value) {
            obj[name][key] = value;
        },
        print(name) {
            let result = [];
           for (const key in obj[name]) {
               result.push(`${key}:${obj[name][key]}`);
              
           }
            console.log(result.join(','))
        }

    }

    inputArr.forEach(line => {
        let [command,...rest] = line.split(' ');
        
        commandEngine[command](...rest);
    });


}

console.log(cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']));