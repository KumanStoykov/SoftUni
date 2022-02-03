function solve() {
    let addBtn = document.querySelector('#add');
    let [addTaskSection, openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll('section'));

    let [taskInput, dateInput] = Array.from(addTaskSection.querySelectorAll('input'));
    let descriptionTextarea = addTaskSection.querySelector('textarea');



    addBtn.addEventListener('click', addTask);
    openSection.addEventListener('click', moveToInProgress);
    inProgressSection.addEventListener('click', moveToComplete);

    function addTask(e) {
        e.preventDefault();

        if (taskInput.value && descriptionTextarea.value && dateInput.value) {
            let createArticle = document.createElement('article');

            let createH3 = document.createElement('h3');
            createH3.textContent = taskInput.value;
            createArticle.appendChild(createH3);

            let paraDescription = document.createElement('p');
            paraDescription.textContent = `Description: ${descriptionTextarea.value}`;
            createArticle.appendChild(paraDescription);

            let paraDate = document.createElement('p');
            paraDate.textContent = `Due Date: ${dateInput.value}`;
            createArticle.appendChild(paraDate);

            let divFlex = document.createElement('div');
            divFlex.classList.add('flex');

            let greenBtn = document.createElement('button');
            greenBtn.textContent = 'Start';
            greenBtn.classList.add('green');
            divFlex.appendChild(greenBtn);

            let redBtn = document.createElement('button');
            redBtn.textContent = 'Delete';
            redBtn.classList.add('red');
            divFlex.appendChild(redBtn);

            createArticle.appendChild(divFlex);
            openSection.querySelector('div:nth-child(2)').appendChild(createArticle);

            taskInput.value = '';
            descriptionTextarea.value = '';
            dateInput.value = '';
        } else {
            return
        }
    }
    function moveToInProgress(e) {

        if (e.target.textContent === 'Start') {
            // Change class name
            e.target.parentElement.children[0].className = 'red';
            e.target.parentElement.children[0].textContent = 'Delete';

            e.target.parentElement.children[1].className = 'orange';
            e.target.parentElement.children[1].textContent = 'Finish';

            inProgressSection.querySelector('#in-progress').appendChild(e.target.parentElement.parentElement);

        } else if (e.target.textContent === 'Delete') {
            e.target.parentElement.parentElement.remove();
        }

    }
    function moveToComplete(e) {

        if(e.target.textContent === 'Finish') {

            completeSection.querySelector('div:nth-child(2)').appendChild(e.target.parentElement.parentElement);
            // Remove class
           let toRemove = e.target.parentElement;
           toRemove.remove();
        } else if (e.target.textContent === 'Delete') {
            e.target.parentElement.parentElement.remove();
        }
    }

}