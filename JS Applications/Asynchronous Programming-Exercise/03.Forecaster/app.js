function attachEvents() {

    const submitBtn = document.getElementById('submit');


    const wetherSymbols = {
        'sunny': '&#x2600;',
        'partly sunny': '&#x26C5;',
        'overcast': '&#x2601;',
        'rain': '&#x2614;',
        'degrees': '&#176;'
    }
    const forecastSection = document.getElementById('forecast');

    submitBtn.addEventListener('click', getTown);

    async function getTown() {
        const uri = `http://localhost:3030/jsonstore/forecaster/locations`;
        const input = document.getElementById('location');

        if(!input.value) {
            return;
        }

        try {
            //Added loading element
            forecastSection.replaceChildren();
            const divError = createEl('div', { id: 'current' }, createEl('div', { class: 'label' }, 'Loading...'));
            forecastSection.appendChild(divError);
            forecastSection.style.display = 'block';

            const responsive = await fetch(uri);
            if (responsive.status != 200) {
                throw new Error('Error');
            }
            const data = await responsive.json();

            const currentTown = data.find(t => t.name == input.value);

            if (!currentTown) {
                throw new Error('Error');
            }
            todayWether(currentTown.code);
            upcoming(currentTown.code);

        } catch (error) {
            errorMark(error.message);
        }
        input.value = '';
    }

    async function todayWether(town) {
        const uri = `http://localhost:3030/jsonstore/forecaster/today/${town}`;
        // Remove all children
        forecastSection.replaceChildren();
        // Added div again
        const currentDivSection = createEl('div', { id: 'current' }, createEl('div', { class: 'label' }, 'Current conditions'));
        forecastSection.appendChild(currentDivSection);
        const threeDaysSection = createEl('div', { id: 'upcoming' }, createEl('div', { class: 'label' }, 'Three-day forecast'));
        forecastSection.appendChild(threeDaysSection);



        const responsive = await fetch(uri);
        const data = await responsive.json();

        const today = createEl('div', { class: 'forecasts' },
            createEl('spam', { class1: 'condition', class2: 'symbol' },),
            createEl('spam', { class: 'condition' },
                createEl('spam', { class: 'forecast-data' }, data.name),
                createEl('spam', { class: 'forecast-data' },),
                createEl('spam', { class: 'forecast-data' }, data.forecast.condition))
        );
        // Set special symbols
        today.querySelector('.symbol').innerHTML = wetherSymbols[(data.forecast.condition).toLowerCase()];
        today.querySelector('.forecast-data:nth-child(2)').innerHTML = `${data.forecast.low}&#176/${data.forecast.high}&#176`;

        forecastSection.style.display = 'block';
        currentDivSection.appendChild(today)

    }

    async function upcoming(town) {
        const uri = `http://localhost:3030/jsonstore/forecaster/upcoming/${town}`;
        const threeDays = document.getElementById('upcoming');

        const responsive = await fetch(uri);
        const data = await responsive.json();

        const div = createEl('div', { class: 'forecast-info' },)

        data.forecast.forEach(f => {

            const currentDay = createEl('span', { class: 'upcoming' },
                createEl('span', { class: 'symbol' }),
                createEl('span', { class: 'forecast-data' }),
                createEl('span', { class: 'forecast-date' }, f.condition));

            // Set special symbols
            currentDay.querySelector('.symbol').innerHTML = wetherSymbols[(f.condition).toLowerCase()];
            currentDay.querySelector('.forecast-data:nth-child(2').innerHTML = `${f.low}&#176/${f.high}&#176`;
            div.appendChild(currentDay);
        });

        threeDays.appendChild(div);

    }

    function errorMark(error) {
        forecastSection.replaceChildren();
        const divError = createEl('div', { id: 'current' }, createEl('div', { class: 'label' }, error));
        forecastSection.appendChild(divError);
        forecastSection.style.display = 'block';
    }

    function createEl(type, attr, ...content) {
        const element = document.createElement(type);

        for (let item in attr) {

            if (item.includes('class')) {
                element.classList.add(attr[item]);
            } else {
                element[item] = attr[item];
            }
        }
        content.forEach(item => {

            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        });
        return element;
    }
}
attachEvents();