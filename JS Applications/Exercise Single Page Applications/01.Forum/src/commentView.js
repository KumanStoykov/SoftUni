import { createEl } from './dom.js';
import { makeNewComment } from './makeNewComment.js';



export async function commentView(e) {
    e.preventDefault();
    const id = e.target.parentElement.id;

    if (e.target.tagName != 'H2') {
        return;
    }
    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
    const data = await res.json();

    const viewPage = ` 
    <!-- theme content  -->
    <div class="theme-content">
        <!-- theme-title  -->
        <div class="theme-title">
            <div class="theme-name-wrapper">
                <div class="theme-name">
                    <h2>${data.topicName}</h2>
                </div>
            </div>
        </div>
        <!-- comment  -->

        <div class="comment">
        </div>

        <div class="answer-comment">
            <p><span>currentUser</span> comment:</p>
            <div class="answer">
                <form id="form-post">
                    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                    <div>
                        <label for="username">Username <span class="red">*</span></label>
                        <input type="text" name="username" id="username">
                    </div>
                    <button>Post</button>
                </form>
            </div>
        </div>
    </div>`;

    document.querySelector('.container').innerHTML = viewPage;

    document.querySelector('.comment').appendChild(comment(data));

    //Given one id
    loadOneId(id);

    //Form to make comment
    document.querySelector('#form-post').addEventListener('submit', makeNewComment.bind(null, id));
}

async function loadOneId(id) {
    const fragment = document.createDocumentFragment();

    const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/${id}`);
    const data = await res.json();
    if (res.status == 200) {

        Object.values(data).forEach(x => {
            const comment = createEl('div', { id: 'user-comment' },
                createEl('div', { class: 'topic-name-wrapper' },
                    createEl('div', { class: 'topic-name' },
                        createEl('p', {},
                            createEl('strong', {}, `${x.username} `), 'commented on ',
                            createEl('time', {}, x.newData)),
                        createEl('div', { class: 'post-content' },
                            createEl('p', {}, x.postText))))
            );
            fragment.appendChild(comment);
        });

        document.querySelector('.comment').appendChild(fragment);
    }


}


function comment(x) {

    const post = createEl('div', { class: 'header' },
        createEl('img', { src: "./static/profile.png", alt: 'avatar' }),
        createEl('p', {},
            createEl('span', {}, x.username, ' posted on '),
            createEl('time', {}, x.newData)),
        createEl('p', { class: 'post-content' }, x.postText)
    );
    return post;
}