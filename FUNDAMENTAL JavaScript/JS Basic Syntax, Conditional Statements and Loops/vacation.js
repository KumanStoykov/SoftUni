function vacation(peaple, type, day) {

    let countPeaple = Number(peaple);
    let price = 0;

    if (day === "Friday") {
        if (type === "Students") {
            price = 8.45;
        } else if (type === "Business") {
            price = 10.90;
        } else if (type === "Regular") {
            price = 15;
        }
    } else if (day === "Saturday") {
        if (type === "Students") {
            price = 9.80;
        } else if (type === "Business") {
            price = 15.60;
        } else if (type === "Regular") {
            price = 20;
        }
    } else if (day === "Sunday") {
        if (type === "Students") {
            price = 10.46;
        } else if (type === "Business") {
            price = 16;
        } else if (type === "Regular") {
            price = 22.50;
        }
    }

    let sum = price * countPeaple;


    if (type === "Students" && countPeaple >= 30) {
        sum *= 0.85; 
    }else if (type === "Business" && countPeaple >= 100){
        sum = price * (countPeaple - 10);
    }else if(type === "Regular" && countPeaple >= 10 && countPeaple <= 20){
        sum *= 0.95;
    }




    console.log(`Total price: ${sum.toFixed(2)}`);



}
vacation(30, "Students", "Sunday");