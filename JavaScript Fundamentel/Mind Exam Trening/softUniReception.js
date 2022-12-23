function softUniReception(input) {

    let students = Number(input.pop());
    let employees = 0;

    for (let personal of input) {
        
        personal = Number(personal);
        employees += personal;
    }

    let currentStudenst = students;
    let counter = 1;

    while(currentStudenst !== 0) {

        if(counter % 4 === 0) {
            counter++;
            continue;
        }

        if(currentStudenst > 0) {
             counter++;
             currentStudenst -= employees;
         } else {
             currentStudenst = 0;
         }
         

    }

    console.log(`Time needed: ${counter - 1}h.`);

    



}


softUniReception(['3','2','5','40']);