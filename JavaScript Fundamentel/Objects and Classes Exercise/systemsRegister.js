function systemsRegister(input) {

    let register = {};

    for (let line of input) {
        let [systemName, component, subComponent] = line.split(" | ");

        if (!register.hasOwnProperty(systemName)) {
            register[systemName] = {};
        }
        if (!register[systemName].hasOwnProperty(component)) {
            register[systemName][component] = [];
        }
        register[systemName][component].push(subComponent);

    }

    let sorted = Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));


    for (let info of sorted) {
        console.log(info);
        let sortedKeys = Object.keys(register[info]).sort((a, b) =>
            Object.keys(register[info][b]).length - Object.keys(register[info][a]).length);

            for (let el of sortedKeys) {
                console.log(`|||${el}`);

                for (let token of (register[info][el])) {
                    console.log(`||||||${token}`);
                }
            }

        }


    }

    systemsRegister([
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'
    ]);