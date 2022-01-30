function attachEventsListeners() {

    let daysBtn = document.querySelector('#daysBtn');
    let hoursBtn = document.querySelector('#hoursBtn');
    let minutesBtn = document.querySelector('#minutesBtn');
    let secondsBtn = document.querySelector('#secondsBtn');

    let valueDays = document.querySelector('#days');
    let valueHours = document.querySelector('#hours');
    let valueMinutes = document.querySelector('#minutes');
    let valueSeconds = document.querySelector('#seconds');
    
    daysBtn.addEventListener('click', daysFunc);
    hoursBtn.addEventListener('click', hoursFunc);
    minutesBtn.addEventListener('click', minutesFunc);
    secondsBtn.addEventListener('click', secondsFunc);


    function daysFunc() {
        let currDay = Number(valueDays.value);
        
        let hours = currDay * 24;
        let minutes = currDay * 24 * 60;
        let seconds = currDay * 24 * 60 * 60;
        valueHours.value = hours;
        valueMinutes.value = minutes;
        valueSeconds.value = seconds;
    }
    function hoursFunc() {
        let currHours = Number(valueHours.value);
        
        let days = currHours / 24;
        let minutes = currHours * 60;
        let secund = currHours * 60 * 60;
        valueDays.value = days;
        valueMinutes.value = minutes;
        valueSeconds.value = secund;
    }
    function minutesFunc() {
        let currMinute = Number(valueMinutes.value);
        
        let days = currMinute / 24 / 60;
        let hours = currMinute / 60;
        let secund = currMinute * 60;
        valueDays.value = days;
        valueHours.value = hours;
        valueSeconds.value = secund;

    }
    function secondsFunc() {
        let currSecund = Number(valueSeconds.value);
        
        let days = currSecund / 24 / 60 / 60;
        let hours = currSecund / 60 / 60;
        let minutes = currSecund / 60;

        valueDays.value = days;
        valueHours.value = hours;
        valueMinutes.value = minutes;
    }
}