function attachEvents() {
    document.querySelector('#submit').addEventListener('click', addComment);

    document.querySelector('#refresh').addEventListener('click', displayedAllComments);

}
const uri = `http://localhost:3030/jsonstore/messenger`;

function addComment() {

    const authorName = document.querySelector('[name="author"]');
    const msgText = document.querySelector('[name="content"]');
    if((!authorName.value) || (!msgText.value)) {
        return;
    }

    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            author: authorName.value,
            content: msgText.value,
        })
    })
   .then(res => {
       if(res.ok == false) {
           throw new Error('Error');
       }
       return res.json();
   })
    .catch( err => {
        alert(err.message);
    });
    authorName.value = '';
    msgText.value = '';

}

function displayedAllComments() {
    
    fetch(uri) 
    .then(res => {
        if(res.ok == false) {
            throw new Error('Error');
        }
        return res.json();
    })
    .then(attachedComments)
    .catch(err => alert(err.message));
}

function attachedComments(data) {
    const textArea = document.querySelector('#messages');
    let allComments = [];
    Object.values(data).forEach(c => allComments.push(`${c.author}: ${c.content}`));
    
    textArea.value = allComments.join('\n');
}
attachEvents();