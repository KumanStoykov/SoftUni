function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('#main div button')[0];
    let decodeButton = document.querySelectorAll('#main div button')[1];

    let massageInput = document.querySelectorAll('textarea')[0];
    let lastReceivedMassage = document.querySelectorAll('textarea')[1];

    encodeBtn.addEventListener('click', encodeMessage);

    function encodeMessage(){
        let splitMsg = massageInput.value.split('');
        let textToPrint = [];
        splitMsg.forEach(char => {
            let asciiCode = char.charCodeAt(0);
            let currentChar = String.fromCharCode(asciiCode + 1);
            
            textToPrint.push(currentChar);

        });
        lastReceivedMassage.value = textToPrint.join('');
        massageInput.value = '';
    }

    decodeButton.addEventListener('click', decodeMessage);

    function decodeMessage() {

        let splitMsg = lastReceivedMassage.value.split('').map(char => {
            let ascii = char.charCodeAt(0);
            return String.fromCharCode(ascii - 1);
        });
        lastReceivedMassage.value = splitMsg.join('');       

    }
}