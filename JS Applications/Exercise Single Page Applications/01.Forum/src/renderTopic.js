import {createEl} from './dom.js';

//Make get fetch
export async function topicRender() {
     
    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const data = await res.json();
    const topicTitle = document.querySelector('.topic-container');

    topicTitle.replaceChildren();

    const fragment = document.createDocumentFragment();

    Object.values(data).forEach(x => {
        fragment.appendChild(createTopic(x));
    });
 
    topicTitle.appendChild(fragment);
}

function createTopic(x) {
        const topic = createEl('div', {class: 'topic-name-wrapper'},
        createEl('div', {class: 'topic-name'},
        createEl('a', {href: '#', class: 'normal', id: x._id},
        createEl('h2', {}, x.topicName)),
        createEl('div', {class: 'columns'},
        createEl('div', {}, 
        createEl('p', {}, 'Date: ', 
        createEl('time', {}, x.newData)),
        createEl('div', {class: 'nick-name'},
        createEl('p', {}, 'Username: ', 
        createEl('span', {}, x.username))))))
        ); 
        return topic;    
}
