
const homePage = document.getElementById('homePage');

export function showHome(context) {
    context.showSection(homePage);
    homePage.querySelector('#startBtn').addEventListener('click', (e) => {
        e.preventDefault();
        context.nextView('/catalog');
    });
}