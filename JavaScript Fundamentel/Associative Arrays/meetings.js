function meeting(input) {

    let owned = {};

    for (let el of input) {
        let [day, name] = el.split(' ');
        

        if(owned.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            owned [day] = name;
            console.log(`Scheduled for ${day}`);
        }
  
    }
    for (const key in owned) {
        console.log(`${key} -> ${owned[key]}`);
    }


}
meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);