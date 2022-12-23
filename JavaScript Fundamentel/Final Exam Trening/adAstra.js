function adAstra(input) {
    input = input[0];

    let list = [];
    let pattern = /([\#|\|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,4})\1/gm;
    let match  
    while(match = pattern.exec(input)) {
       let products = {
            name: match[2],
            date: match[3],
            calorie: match[4]
        }
        list.push(products);
    }

    let calorieSum = 0;
    list.forEach(info => {
       
        calorieSum += Number(info.calorie);
    })
    let days = Math.floor(calorieSum / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    list.forEach(info => {
        console.log(`Item: ${info.name}, Best before: ${info.date}, Nutrition: ${info.calorie}`);
    });
}


adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);