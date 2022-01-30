function attachEventsListeners() {

    let convertToMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,

    } 
    
    let inputFrom = document.querySelector('#inputDistance');
    let output = document.querySelector('#outputDistance');
    const convertBtn = document.querySelector('#convert');

    convertBtn.addEventListener('click', convertFunc);

    function convertFunc() {

        let inputUnits = document.querySelector('#inputUnits');
        let outputUnits = document.querySelector('#outputUnits');

        let inputMakeToMeter = convertToMeter[inputUnits.value] * Number(inputFrom.value);

        output.value = Number(inputMakeToMeter) / convertToMeter[outputUnits.value];

    }


}