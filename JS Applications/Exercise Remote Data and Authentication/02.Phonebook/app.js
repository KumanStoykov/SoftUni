function attachEvents() {

    document.querySelector('#btnLoad').addEventListener('click', load);

    document.querySelector('#btnCreate').addEventListener('click', createPhoneNumber);

    document.querySelector('#phonebook').addEventListener('click', deletePhone);

}
const uriBase = `http://localhost:3030/jsonstore/phonebook`;

const phoneBook = document.querySelector('#phonebook');

function load() {

    fetch(uriBase)
        .then(res => {
            if (res.ok == false || res.status != 200) {
                throw new Error('Error')
            }
            return res.json();
        })
        .then(addPhoneBook)
        .catch(err => alert(err.message));
}

function addPhoneBook(data) {
    phoneBook.replaceChildren();
    console.log(data)

    Object.values(data).forEach(p => {
        const liElement = document.createElement('li');
        liElement.textContent = `${p.person}: ${p.phone}`;

        let buttonElement = document.createElement('button');
        buttonElement.setAttribute('id', p._id);
        buttonElement.textContent = 'Delete';

        liElement.appendChild(buttonElement);
        phoneBook.appendChild(liElement);
    });
}

function createPhoneNumber() {
    const personName = document.querySelector('#person');
    const phoneNumber = document.querySelector('#phone');

    if ((!personName.value) || (!phoneNumber.value)) {
        return;
    }
    fetch(uriBase, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            person: personName.value.trim(),
            phone: phoneNumber.value.trim()
        })
    })
        .then(res => {
            if (res.ok == false) {
                throw new Error('Error');
            }
            load();
            return res.json();
        })
        .catch(err => alert(err.message));

    personName.value = '';
    phoneNumber.value = '';
}

function deletePhone(e) {

    const currentId = e.target.id;
   
    if(e.target.textContent === 'Delete') {

        fetch(`${uriBase}/${currentId}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok == false) {
                    throw new Error('Error');
                }
                load()
                return res.json();
            })
            .catch(err => alert(err.message))
    }
}
attachEvents();