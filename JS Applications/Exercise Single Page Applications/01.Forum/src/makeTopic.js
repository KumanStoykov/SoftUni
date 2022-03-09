import { topicRender } from './renderTopic.js'
const form = document.querySelector('#topic-form');

const uri = 'http://localhost:3030/jsonstore/collections/myboard/posts';

export async function buttonsDelegation(e) {
    e.preventDefault();

    if (e.target.textContent == 'Post') {
        onPost();
        topicRender();
        form.reset();
    } else if (e.target.textContent == 'Cancel') {
        form.reset();
    }
}

export async function onPost() {
    const topicName = form.querySelector('#topicName').value;
    const username = form.querySelector('#username').value;
    const postText = form.querySelector('#postText').value;
    const time = new Date();
    let newData = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDay() - 1} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;


    try {
        if (!topicName && !username && !postText) {
            throw new Error('Fields is not field');
        }
        const res = await fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                topicName,
                username,
                postText,
                newData
            })
        });
        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }
                
    } catch (err) {
        alert(err.message);
    }
}

