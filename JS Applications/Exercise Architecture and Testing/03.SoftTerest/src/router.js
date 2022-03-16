const currentSection = document.getElementById('currentSection');
const nav = document.querySelector('nav');

nav.addEventListener('click', onNavigate);

export const context = {
    showSection,
    nextView,
    navBarView
}
//Take all views
let links = {};
export function initialize(data) {
    links = data
}

function showSection(section) {
    currentSection.replaceChildren(section)
}

function onNavigate(e) {
    e.preventDefault();

    let target = e.target;
    if(target.tagName == 'IMG') {
        target = target.parentElement; 
    }
    
    if(target.tagName == 'A') {
        const url = new URL(target);        
        context.nextView(url.pathname);
    }
}

function nextView(url, ...params) {
    const view = links[url];

    if(typeof view == 'function') {

        view(context, ...params);
    }
}

function navBarView() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if(userData == null) {
        [...document.querySelectorAll('.user')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(x => x.style.display = 'inline-block');
    } else {
        [...document.querySelectorAll('.user')].forEach(x => x.style.display = 'inline-block');
        [...document.querySelectorAll('.guest')].forEach(x => x.style.display = 'none');
    }
}