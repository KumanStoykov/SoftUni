window.addEventListener('load', attachEvents)

function attachEvents() {

    const loadPostsBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');


    // Attach event handler to Load post button
    loadPostsBtn.addEventListener('click', addTitleToOptions);
    // Attach event handler to view button
    viewBtn.addEventListener('click', addPostToPostTitle);
}
function addTitleToOptions() {
    const uri = `http://localhost:3030/jsonstore/blog/posts`;

    fetch(uri)
        .then(res => {
            if (res.status != 200) {
                throw new Error(`${res.status}  ${res.statusText}`);
            }
            return res.json();
        })
        .then(loadPostsResponse)
        .catch(handelError);
}

function loadPostsResponse(data) {
    const allPosts = document.querySelector('#posts');
    Object.keys(data).map(p => {
        const title = createEl('option', { value: p }, (data[p].title).toUpperCase());
        allPosts.appendChild(title);
    });
}

function addPostToPostTitle() {
    const uri = `http://localhost:3030/jsonstore/blog/comments`;

     //Add body text
     attachedPostBody();

    fetch(uri)
        .then(res => {
            if (res.status != 200) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then(viewResponse)
        .catch(handelError);

    const postTitle = document.querySelector('#post-title');
    const postsOption = document.querySelector('#posts');
    //attach post title
    postTitle.textContent = postsOption.options[postsOption.selectedIndex].text;
}

function viewResponse(data) {
    const currentTitle = document.querySelector('#posts');
    const postsComments = document.querySelector('#post-comments');
    // Remove old data
    postsComments.replaceChildren();
   
    Object.values(data).map(p => {

        if (p.postId == currentTitle.value) {
            const comment = createEl('li', { id: p.id }, p.text);
            postsComments.appendChild(comment);
        }
    });
}

function attachedPostBody() {
    const currentId = document.querySelector('#posts').value;
    const uri = `http://localhost:3030/jsonstore/blog/posts/${currentId}`;

    const addPostComment = document.querySelector('#post-body');


    fetch(uri)
        .then(res => {
            if (res.status != 200) {
                throw new Error(`${res.status}  ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            const bodyElements = createEl('p', { id: 'post-body' }, data.body)
            addPostComment.replaceWith(bodyElements);
        })
        .catch(handelError);
}

// Error handel Function
function handelError(error) {
    alert(error.message);
}

// Create HTML elements
function createEl(type, attr, ...content) {
    const element = document.createElement(type);

    for (let item in attr) {
        element[item] = attr[item];
    }
    content.forEach(item => {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    });
    return element;
}