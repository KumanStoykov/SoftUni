function convertToJSON(name, lastName, hairColor) {

    let obj = {
        name,
        lastName,
        hairColor
    }
    let toStr = JSON.stringify(obj);
    

    console.log(toStr);


}

convertToJSON('George',
'Jones',
'Brown');