function centuriesToMinutes(num) {

    num = Number(num);

    let centuries =  100;
    let years = centuries * num;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);


}

centuriesToMinutes(1)