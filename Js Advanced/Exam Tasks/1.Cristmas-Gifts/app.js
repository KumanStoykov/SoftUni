function solution() {
    const addBtn = document.querySelector('.container section div button');
    const inputAddGifts = document.querySelector('input[placeholder="Gift name"]');


    addBtn.addEventListener('click', addGifts);

    function addGifts() {

        const getUlElementToAppend = document.querySelector('.card:nth-child(2) ul');

        if (inputAddGifts.value === '') {
            return;
        }

        const liElement = document.createElement('li');
        liElement.classList.add('gift');
        liElement.textContent = inputAddGifts.value;

        const sendBtn = document.createElement('button');
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = 'Send';
        liElement.appendChild(sendBtn);

        const discardBtn = document.createElement('button');
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';
        liElement.appendChild(discardBtn);
        getUlElementToAppend.appendChild(liElement);

        const allLiElements = Array.from(document.querySelectorAll('.card:nth-child(2) ul li'));
        console.log(allLiElements)
        allLiElements.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(el => getUlElementToAppend.appendChild(el));
        inputAddGifts.value = '';
    }

    //Send Gifts btn

    document.querySelector('.container section:nth-child(2)').addEventListener('click', sendedGifts);

    function sendedGifts(e) {
        const sendGiftSection = document.querySelector('.container section:nth-child(3) ul');
        const getUlElementToAppend = document.querySelector('.card:nth-child(3) ul');

        if (e.target.textContent == 'Send') {
            const currentText = e.target.parentElement.textContent.replace('SendDiscard', '');

            const createLi = document.createElement('li');
            createLi.textContent = currentText;
            createLi.classList.add('gift');
            sendGiftSection.appendChild(createLi);
            //Remove
            e.target.parentElement.remove();

        }
    }
    //Discard btn
    document.querySelector('.container section:nth-child(2)').addEventListener('click', discardedGifts);

    function discardedGifts(e) {
        const discardGiftSection = document.querySelector('.container section:nth-child(4) ul');
        const getUlElementToAppend = document.querySelector('.card:nth-child(4) ul');

        if (e.target.textContent == 'Discard') {
            const currentText = e.target.parentElement.textContent.replace('SendDiscard', '');

            const createLi = document.createElement('li');
            createLi.textContent = currentText;
            createLi.classList.add('gift');
            discardGiftSection.appendChild(createLi);
            //Remove
            e.target.parentElement.remove();

        }
    }

}