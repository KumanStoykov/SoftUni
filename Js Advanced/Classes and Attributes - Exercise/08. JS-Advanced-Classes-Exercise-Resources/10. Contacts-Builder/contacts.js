class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }
    get online() {
        return this._online;
    }

    set online(value) {
        if (this.titleDiv) {
            if (value) {
                this.titleDiv.classList.add('online');
            } else {
                this.titleDiv.classList.remove('online');
            }
        }
        this._online = value;
    }

    render(id) {
        let article = document.createElement('article');

        this.titleDiv = document.createElement('div');
        this.titleDiv.classList.add('title');
        this.titleDiv.innerHTML = `${this.firstName} ${this.lastName}`;
        this.button = document.createElement('button');
        this.button.innerHTML = '&#8505';
        this.titleDiv.appendChild(this.button);

        if(this._online) {
            this.titleDiv.classList.add('online');
        }



        this.button.addEventListener('click', (e) => {
            let currentBtn = infoDiv;
            if (currentBtn.style.display == 'none') {
                currentBtn.style.display = 'block';
            } else {
                currentBtn.style.display = 'none';
            }
        });

        let infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';
        let phoneSpan = document.createElement('span');
        phoneSpan.innerHTML = `&phone; ${this.phone}`;

        let emailSpan = document.createElement('span');
        emailSpan.innerHTML = `&#9993; ${this.email}`;
        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);

        article.appendChild(this.titleDiv);
        article.appendChild(infoDiv);
        document.getElementById(id).appendChild(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[0].online = true, 2000);
