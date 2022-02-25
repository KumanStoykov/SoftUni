class Button {
    constructor(backgroundColor, textColor, text, hasDropdown) {
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.text = text;
        this.hasDropdown = hasDropdown;
    }
}

let button = new Button('blue', 'grey', 'Обучение', true);
console.log(button.text)