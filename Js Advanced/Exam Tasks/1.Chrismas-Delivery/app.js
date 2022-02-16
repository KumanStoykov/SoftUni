function solution() {
    const addBtn = document.querySelector('.card button');

    const allSections = Array.from(document.querySelectorAll('.card ul'));
    const listOfGifts = allSections[0];
    const sentGifts = allSections[1];
    const discardedGifts = allSections[2];

    const inputField = document.querySelector('input[placeholder="Gift name"]');

    addBtn.addEventListener('click', addGifts);

    function addGifts() {
        const sendBtn = createElement('button', { id: 'sendButton' }, 'Send');
        const discardBtn = createElement('button', { id: 'discardButton' }, 'Discard');

        const present = createElement('li', { class: 'gift' }, inputField.value.trim(),
            sendBtn,
            discardBtn
        );
        listOfGifts.appendChild(present);
        Array.from(listOfGifts.querySelectorAll('li'))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(el => listOfGifts.appendChild(el));

        sendBtn.addEventListener('click', () => {
            present.removeChild(sendBtn);
            present.removeChild(discardBtn);
            sentGifts.appendChild(present);
        });
        discardBtn.addEventListener('click', () => {
            present.removeChild(sendBtn);
            present.removeChild(discardBtn);
            discardedGifts.appendChild(present);
        });

        inputField.value = '';
    }

    function createElement(type, attr, ...component) {
        const element = document.createElement(type);

        for (let item in attr) {

            if (item == 'class') {
                element.classList.add(attr[item]);
            } else {
                element[item] = attr[item];
            }
        }
        for (let item of component) {
            if (typeof item == 'number' || typeof item == 'string') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }

}