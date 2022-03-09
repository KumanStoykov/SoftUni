import { createEl } from './dom.js';

export async function makeNewComment(id, e) {
    e.preventDefault();
    const postText = document.querySelector('#comment').value;
    const username = document.querySelector('#username').value;

    const newData = new Date();
    const currentData = newData.toLocaleDateString();
    const currentTime = newData.toLocaleTimeString();



    const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postText,
            username,
            newData: `${currentData}, ${currentTime}`
        })
    });

    const data = res.json();
    //Render comment
    renderComment(data);
    //Reset Form
    document.querySelector('#form-post').reset();
}

export async function renderComment(input) {

    const data = await input;


    const comment = createEl('div', { id: 'user-comment' },
        createEl('div', { class: 'topic-name-wrapper' },
            createEl('div', { class: 'topic-name' },
                createEl('p', {},
                    createEl('strong', {}, `${data.username} `), 'commented on ',
                    createEl('time', {}, data.newData)),
                createEl('div', { class: 'post-content' },
                    createEl('p', {}, data.postText))))
    );
    document.querySelector('.comment').appendChild(comment);

}
