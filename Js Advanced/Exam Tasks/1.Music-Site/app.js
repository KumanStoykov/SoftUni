window.addEventListener('load', solve);

function solve() {   

    const fields = Array.from(document.querySelectorAll('form input'));

    const allHitsContainer = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector('.saved-container');
    let counter = 0;

    const addBtn = document.querySelector('#add-btn');

    addBtn.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault()

        const genre = fields[0].value.trim();
        const nameOfSong = fields[1].value.trim();
        const author = fields[2].value.trim();
        const date = fields[3].value.trim();

        if(genre && nameOfSong && author && date) {

            const saveBtn = createEl('button', {class: 'save-btn'}, 'Save song');
            const likeBtn = createEl('button', {class: 'like-btn'}, 'Like song');
            const deleteBtn = createEl('button', {class: 'delete-btn'}, 'Delete');

            const song = createEl('div', {class: 'hits-info'},
                createEl('img',{'src': './static/img/img.png'}),
                createEl('h2', {}, `Genre: ${genre}`),
                createEl('h2', {}, `Name: ${nameOfSong}`),
                createEl('h2', {}, `Author: ${author}`),
                createEl('h3', {}, `Date: ${date}`),
                saveBtn,
                likeBtn,
                deleteBtn,
            );
            allHitsContainer.appendChild(song);

            saveBtn.addEventListener('click', saveFun.bind(null, song));
            likeBtn.addEventListener('click', likes.bind(null, likeBtn));
            deleteBtn.addEventListener('click', () => {
                song.remove();
            });
            fields.forEach(f => f.value = '');
        }
    }

    function saveFun(song) {

        song.remove();
        song.querySelector('.save-btn').remove();
        song.querySelector('.like-btn').remove();
        savedContainer.appendChild(song);

    }

    function likes(likeBtn) {
        counter++;
        
        const likesSection = document.querySelector('.likes p');
        likesSection.textContent = likesSection.textContent.replace(/[0-9]+/, counter);
        likeBtn.disabled = true;
    }

    function createEl(type, attr, ...content) {
        const element = document.createElement(type);
        for (let prop in attr) {
            if(prop == 'class') {
                element.classList.add(attr[prop]);
            } else {
                element[prop] = attr[prop]; 
            }                     
        }
        for (let item of content) {
            if(typeof item == 'number' || typeof item == 'string') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);            
        }
        return element;
    }    
}