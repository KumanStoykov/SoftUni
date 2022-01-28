function calorieObject(inputArr) {
  const obj = {};
  for (let i = 0; i < inputArr.length; i += 2) {
    obj[inputArr[i]] = Number(inputArr[i + 1]);
  }

  return obj;
}

console.log(calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
