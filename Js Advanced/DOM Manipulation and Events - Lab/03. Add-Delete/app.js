function addItem() {
    let createElementLi = document.createElement('li');
    let getElementListItem = document.querySelector('#items');
    let input = document.querySelector('#newItemText');

    createElementLi.textContent = input.value;

    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]';

    deleteButton.addEventListener('click', deleteBtn);

    function deleteBtn(e) {
        e.preventDefault();
        e.currentTarget.parentNode.remove();
    }
    createElementLi.appendChild(deleteButton);
    getElementListItem.appendChild(createElementLi);
    input.value = '';
}