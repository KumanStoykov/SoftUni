function extract(content) {
    let contentTextElement = document.getElementById('content');

    const pattern = /\(([\w\s]+)\)/gm;

    let matchAll = contentTextElement.textContent.matchAll(pattern);
    let currentWords = [];
    
    for (let match of matchAll) {
        currentWords.push(match[1]);
    }
    return currentWords.join('; ');
    
}