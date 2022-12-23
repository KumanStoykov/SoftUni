function fuelMoney(distance,passengers,price){

    let neededFuel = (distance / 100) * 7;
    let totalFuel = (passengers * 0.100) + neededFuel;

    let neededMoney = totalFuel * price;



    console.log(`Needed money for that trip is ${neededMoney} lv.`);
}
fuelMoney(260, 9, 2.49);