function roadRadar(km, area) {

    km = Number(km);
    let status = '';

    if(area === 'motorway') {
        if(km <= 130) {
            console.log(`Driving ${km} km/h in a 130 zone`);

        } else {
            if(km > 130 && km <= 150) {
                status = 'speeding';
            } else if (km > 150 && km <= 170) {
                status = 'excessive speeding';
            } else if (km > 170) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${km - 130} km/h faster than the allowed speed of 130 - ${status}`);
        }

    } else if (area === 'interstate'){
        if(km <= 90) {
            console.log(`Driving ${km} km/h in a 90 zone`);

        } else {
            if(km > 90 && km <= 110) {
                status = 'speeding';
            } else if (km > 110 && km <= 130) {
                status = 'excessive speeding';
            } else if (km > 130) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${km - 90} km/h faster than the allowed speed of 90 - ${status}`);
        }

    } else if (area === 'city'){
        if(km <= 50) {
            console.log(`Driving ${km} km/h in a 50 zone`);

        } else {
            if(km > 50 && km <= 70) {
                status = 'speeding';
            } else if (km > 70 && km <= 90) {
                status = 'excessive speeding';
            } else if (km > 90) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${km - 50} km/h faster than the allowed speed of 50 - ${status}`);
        }
 
    } else if (area === 'residential') {
        if(km <= 20) {
            console.log(`Driving ${km} km/h in a 20 zone`);

        } else {
            if(km > 20 && km <= 40) {
                status = 'speeding';
            } else if (km > 40 && km <= 60) {
                status = 'excessive speeding';
            } else if (km > 60) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${km - 20} km/h faster than the allowed speed of 20 - ${status}`);
        }
    }




}

roadRadar(200, 'motorway');