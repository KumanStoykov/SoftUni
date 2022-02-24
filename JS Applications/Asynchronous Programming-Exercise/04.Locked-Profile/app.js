const main = document.querySelector('#main');

async function lockedProfile() {
    const uri = `http://localhost:3030/jsonstore/advanced/profiles`;

    try {
        // Remove main section
        main.replaceChildren();

        const response = await fetch(uri);
        if (response.status != 200) {
            throw new Error('Error');
        }

        const data = await response.json();
        createProfile(data)

    } catch (error) {
        alert(error.message);
    }

}

function createProfile(data) {

    const valuesOfData = Object.values(data);
    
    
    valuesOfData.map(p => {
        
        // checked inputs !!!!!!!!!!!!!!!!!!!
        const radioBtnLock = createEl("input", { type: "radio", name: "user1Locked", value: "lock" });
         radioBtnLock.checked = true;
        const radioBtnUnlock = createEl("input", { type: "radio", name: "user1Locked", value: "unlock"});
        const userNameInput = createEl("input", { type: "text", name: "user1Username", value: p.username });
        userNameInput.disabled = true;
        userNameInput.readOnly = true;
        const emailInput = createEl("input", { type: "email", name: "user1Email", value: p.email });
        emailInput.disabled = true;
        emailInput.readOnly = true;
        const userAgeInput = createEl("input", { type: "email", name: "user1Age", value: p.age });
        userAgeInput.disabled = true;
        userAgeInput.readOnly = true;
        const showButton = createEl("button", {}, "Show more");


        let person = createEl("div", { class: "profile" },
            createEl("img", { src: "./iconProfile2.png", class: "userIcon" }),
            createEl("label", {}, "Lock"),
            radioBtnLock,
            createEl("label", {}, "Unlock"),
            radioBtnUnlock,
            createEl("br", {}),
            createEl("hr", {}),
            createEl("label", {}, "Username"),
            userNameInput,
            createEl("div", { class: "hiddenInfo" },
                createEl("hr", {}),
                createEl("label", {}, "Email:"),
                emailInput,
                createEl("label", {}, "Age:"),
                userAgeInput),
            showButton
        );
         // addEventListener to button
        showButton.addEventListener('click', showMore.bind(null, person, showButton, radioBtnUnlock));

        main.appendChild(person);
    });
}

function showMore(person, button, radio) {
    const hideDiv = person.querySelector("div");

    if(radio.checked && button.textContent == "Show more") {
        button.textContent = "Hide it";
        hideDiv.classList.remove("hiddenInfo")
    } else if(radio.checked && button.textContent == "Hide it") {
        hideDiv.classList.add("hiddenInfo");
        button.textContent = "Show more";
    }
}

function createEl(type, attr, ...content) {
    const element = document.createElement(type);

    for (let item in attr) {
        if (item == 'class') {
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