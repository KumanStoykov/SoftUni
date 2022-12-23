function convertToObject(obj) {

  let parsed = JSON.parse(obj);

  for (let key in parsed) {
    console.log(`${key}: ${parsed[key]}`);
  }

  console.log(parsed)

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');