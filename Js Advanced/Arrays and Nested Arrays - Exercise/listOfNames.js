function listOfNames(list) {
    let sorted = list.sort((a, b) => a.localeCompare(b));
    return sorted.map((el, index) => `${index + 1}.${el}`).join('\n');


}

listOfNames(["John", "Bob", "Christina", "Ema"]);