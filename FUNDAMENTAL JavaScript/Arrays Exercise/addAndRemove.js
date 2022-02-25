function addAndRemove(str) {

    let newArr = [];

    for (let index = 0; index < str.length; index++) {
        const element = str[index];

        if (element === "add") {
            newArr.push(index + 1);
        } else if (element === "remove") {

            newArr.pop();

        }
    }

    if (newArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join(" "));
    }


}
addAndRemove(['remove', 'remove', 'remove', "add", "remove", "add", "add", "remove", "remove"]);