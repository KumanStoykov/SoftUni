function printAndSum(start,end){

    let sum = 0;
    let diff = "";

    for(i = start; i <= end; i++){

        sum += i;

        diff += "" + i + " ";


    }
    console.log(diff);
    console.log(`Sum: ${sum}`);


}
printAndSum(5, 10)