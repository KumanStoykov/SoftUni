function solve() {
    let inputName = document.querySelector('#container input:nth-of-type(1)');
    let inputHall = document.querySelector('#container input:nth-of-type(2)');
    let inputTicketPrice = document.querySelector('#container input:nth-of-type(3)');


    let moveSection = document.querySelector('#movies ul');
    // button on Screen
    document.querySelector('#container button').addEventListener('click', addMove);

    function addMove(e) {
        e.preventDefault();

        if (inputName.value != '' && inputHall.value  != '' && !isNaN(inputTicketPrice.value) && inputTicketPrice.value != '') {

            // span tag
            let spanTag = document.createElement('span');
            spanTag.textContent = inputName.value;
            // strong tag for hall
            let strongTagForHall = document.createElement('strong');
            strongTagForHall.textContent = `Hall: ${inputHall.value}`;

            let divTag = document.createElement('div');
            // strong tag for price
            let strongTagForPrice = document.createElement('strong');
            strongTagForPrice.textContent = Number(inputTicketPrice.value).toFixed(2);
            //input tag with set placeholder
            let inputTag = document.createElement('input');
            inputTag.setAttribute('placeholder', 'Tickets Sold');
            // button with textContent
            let buttonArchive = document.createElement('button');
            buttonArchive.textContent = 'Archive';
            // fill div tags
            divTag.appendChild(strongTagForPrice);
            divTag.appendChild(inputTag);
            divTag.appendChild(buttonArchive);
            // create li tag 
            let liTag = document.createElement('li');
            // append all tags to li element
            liTag.appendChild(spanTag);
            liTag.appendChild(strongTagForHall);
            liTag.appendChild(divTag);
            // append li tag in movies on screen
            moveSection.appendChild(liTag);
            buttonArchive.addEventListener('click', archive);
        } else {
            return;
        }
        inputName.value = '';
        inputHall.value = '';
        inputTicketPrice.value = '';
    }

    function archive(e) {
        let nameOfFilm = e.target.parentElement.parentElement.querySelector('span');
        let price = e.target.parentElement.querySelector('strong');
        let valueIncome = e.target.parentElement.querySelector('input');
        

        if (!isNaN(valueIncome.value) && valueIncome.value != '') {
            let createLiTag = document.createElement('li');
            let spanTag = document.createElement('span');
            spanTag.textContent = nameOfFilm.textContent;
            let strongTag = document.createElement('strong');
            strongTag.textContent = `Total amount: ${(Number(price.textContent) * Number(valueIncome.value)).toFixed(2)}`; 
            let buttonTag = document.createElement('button');
            buttonTag.textContent = 'Delete';
            createLiTag.appendChild(spanTag);
            createLiTag.appendChild(strongTag);
            createLiTag.appendChild(buttonTag);
            let getUlElement = document.querySelector('#archive ul');
            getUlElement.appendChild(createLiTag);
            e.target.parentElement.parentElement.remove();
        }
    }
    
    document.querySelector('#archive').addEventListener('click', deleteArchive);
    function deleteArchive(e) {
        if (e.target.tagName === 'BUTTON' && e.target.textContent != 'Clear') {
            e.target.parentElement.remove();
        }     
        
    }
    
    document.querySelector('#archive button').addEventListener('click', () => {        
        
            Array.from(document.querySelectorAll('#archive ul li')).forEach(li => li.remove());
    });
}