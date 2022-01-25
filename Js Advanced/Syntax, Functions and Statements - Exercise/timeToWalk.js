function timeToWalk(steps, footLength, studentSpeedInKm) {
    let meterToHome = steps * footLength;
    let pause = Math.floor(meterToHome / 500);

    let time = (meterToHome  / (studentSpeedInKm * 1000)) * 3600;
    let timeWithPause = time + (pause * 60);

    let hour = Math.floor(timeWithPause / 3600);

    timeWithPause -= hour * 3600;

    let min = Math.floor(timeWithPause / 60);

    timeWithPause -= min * 60;

    let seconds = parseInt(Math.ceil(timeWithPause) % 60, 10)
    

    console.log(`${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${seconds < 10 ? '0' + seconds : seconds}`);
}
timeToWalk(2564, 0.70, 5.5);
