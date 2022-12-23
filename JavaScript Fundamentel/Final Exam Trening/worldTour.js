function worldTour(input) {

    let travelList = input.shift();

    let commandParser = {
        "Add Stop": (travelList, index, str) => {
            index = Number(index);
            let char = travelList[index].charCodeAt(0);
            if (char > 64 && char < 91 || char === 58) {
                travelList = travelList.split("");
                travelList.splice(index, 0, str);
                console.log(travelList.join(""));
                return travelList.join("");
            }
            console.log(travelList);
            return travelList;
        },
        "Remove Stop": (travelList, startIndex, endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let probe = travelList.substring(startIndex, endIndex);
            let index = probe.indexOf(":");

            if (index === -1 && startIndex >= 0 && endIndex < travelList.length) {


                let forReplace = travelList.substring(startIndex, endIndex + 1);
                travelList = travelList.replace(forReplace, "");
                console.log(travelList);
                return travelList;

            }
            console.log(travelList);
            return travelList;

        },
        "Switch": (travelList, oldStr, newStr) => {
            let index = travelList.indexOf(oldStr);
            if (index !== -1) {
                travelList = travelList.replace(oldStr, newStr);
                console.log(travelList);
                return travelList;
            }
            console.log(travelList);
            return travelList;
        }

    }

    input.forEach(line => {
        if (line !== "Travel") {
            let [command, ...arg] = line.split(":");
            let oldTravel = travelList;
            travelList = commandParser[command](travelList, ...arg);
        }

    });

    console.log(`Ready for world tour! Planned stops: ${travelList}`);


}


worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);

// worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
//     "Add Stop:3:Nigeria",
//     "Remove Stop:4:8",
//     "Switch:Albania: Azərbaycan",
//     "Travel"]);