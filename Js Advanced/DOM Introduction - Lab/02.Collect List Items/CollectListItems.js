function extractText() {
    const itemsElements = document.querySelector('#items');
    const textArea = document.querySelector('#result');

    textArea.textContent = itemsElements.textContent;

}