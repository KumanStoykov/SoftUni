function solve(input) {

    let armies = {};

    for (let info of input) {

        if (info.includes("arrives")) {
            let index = info.indexOf("arrives");
            let leader = info.slice(0, index).trim();

            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {};
            }
        } else if (info.includes("defeated")) {
            let index = info.indexOf("defeated");
            let leader = info.slice(0, index).trim();
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }

        } else if (info.includes(":")) {
            let [leader, army] = info.split(": ");
            let [armyName, armyCount] = army.split(", ");
            armyCount = Number(armyCount);
            if (armyCount < 0 || isNaN(armyCount)) {
                armyCount = 0;
            }

            if (armies.hasOwnProperty(leader)) {
                armies[leader][armyName] = Number(armyCount);
            }

        } else if (info.includes("+")) {
            let [armyName, armyCount] = info.split(" + ");
            armyCount = Number(armyCount);
            if (isNaN(armyCount) || armyCount < 0) {
                armyCount = 0;
            }

            Object.keys(armies).forEach(leader => {

                if (armies[leader].hasOwnProperty(armyName)) {
                    armies[leader][armyName] += armyCount;
                }

            });

        }
    }


    let sortLeader = Object.entries(armies).sort(armyLeader);

    for (let token of sortLeader) {
        let leader = token[0];
        let totalCountLeader = 0;
        let armyCount = Object.values(token[1])
        if (armyCount[0] > 1) {
            totalCountLeader = Object.values(token[1]).reduce((a, b) => a += b);

        }
        let armyToken = Object.entries(token[1]).sort((a, b) => b[1] - a[1]);
        console.log(`${leader}: ${totalCountLeader}`);
        for (let army of armyToken) {
            console.log(`>>> ${army[0]} - ${army[1]}`);

        }




    }


    function armyLeader(firstArmy, secundArmy) {

        let sumFirstArmy = Object.values(firstArmy[1]).reduce((a, b) =>{
            a = Number(a);
            b = Number(b);
            if(isNaN(a)){
                a = 0;
            } else if (isNaN(b)) {
                b = 0;
            } 
            return b += a;
        }, 0);
        let sumSecundArmy =Object.values(secundArmy[1]).reduce((a, b) =>{
            a = Number(a);
            b = Number(b);
            if(isNaN(a)){
                a = 0;
            } else if (isNaN(b)) {
                b = 0;
            } 
            return b += a;
        }, 0);
        let result = sumSecundArmy - sumFirstArmy;

        if (result === 0) {
            return Object.keys(secundArmy).toLocaleString(Object.keys(firstArmy));
        } else {
            return result;
        }

    }
}


// solve(['Rick Burr arrives',
//     'Fergus: Wexamp, 30245',
//     'Rick Burr: Juard, 50000',
//     'Findlay arrives',
//     'Findlay: Britox, 34540',
//     'Wexamp + 6000',
//     'Juard + 1350',
//     'Britox + 4500',
//     'Porter arrives',
//     'Porter: Legion, 55000',
//     'Legion + 302',
//     'Rick Burr defeated',
//     'Porter: Retix, 3205'
// ]);

solve(['Rick Burr arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Findlay arrives',
         'Findlay: Britox, 34540',
    //     'Wexamp + 6000',
    //     'Juard + 1350',
    
    'Porter: Retix, 3205'

]);