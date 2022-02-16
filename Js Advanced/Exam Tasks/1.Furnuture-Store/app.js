window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add');

    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const toAppend = document.getElementById('furniture-list');

    addBtn.addEventListener('click', addItems);

    function addItems(e) {
        e.preventDefault();
        let price = Number(priceInput.value);
        let year = Number(yearInput.value);

        if (year <= 0 || price <= 0) {
            return;
        }

        if (!modelInput.value || !descriptionInput.value) {
            return;
        }

        let trElementWithClassInfo = document.createElement('tr');
        trElementWithClassInfo.classList.add('info');

        let tdForModel = document.createElement('td');
        tdForModel.textContent = modelInput.value;
        trElementWithClassInfo.appendChild(tdForModel);

        let tdForPrice = document.createElement('td');
        tdForPrice.textContent = `${price.toFixed(2)}`;
        trElementWithClassInfo.appendChild(tdForPrice);

        let tdForButtons = document.createElement('td');

        let lessInfoBtn = document.createElement('button');
        lessInfoBtn.classList.add('moreBtn');
        lessInfoBtn.textContent = 'More Info';
        tdForButtons.appendChild(lessInfoBtn);

        lessInfoBtn.addEventListener('click', (e) => {
            if (e.currentTarget.textContent === 'More Info') {
                trForClassHide.style.display = 'contents';
                e.target.textContent = 'Less Info';
            } else if (e.target.textContent === 'Less Info') {
                trForClassHide.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        });

        let buyItBtn = document.createElement('button');
        buyItBtn.classList.add('buyBtn');
        buyItBtn.textContent = 'Buy it';
        tdForButtons.appendChild(buyItBtn);

        buyItBtn.addEventListener('click', () => {
            let totalPriceElement = document.querySelector('.total-price');
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            trElementWithClassInfo.remove();
            trForClassHide.remove();
        });

        trElementWithClassInfo.appendChild(tdForButtons);

        toAppend.appendChild(trElementWithClassInfo);

        let trForClassHide = document.createElement('tr');
        trForClassHide.classList.add('hide');
        trForClassHide.style.display = 'none';

        let yearTdElement = document.createElement('td');
        yearTdElement.textContent = `Year: ${year}`;
        trForClassHide.appendChild(yearTdElement);

        let descriptionTdElement = document.createElement('td');
        descriptionTdElement.setAttribute('colspan', 3);
        descriptionTdElement.textContent = `Description: ${descriptionInput.value}`;
        trForClassHide.appendChild(descriptionTdElement);

        toAppend.appendChild(trForClassHide);

        modelInput.value = '';
        descriptionInput.value = '';
        yearInput.value = '';
        priceInput.value = '';
       
    }
}
