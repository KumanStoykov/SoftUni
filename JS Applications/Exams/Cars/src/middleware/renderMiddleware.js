import { html, render, nothing } from '../library/lib.js';
import { getUserData } from '../util.js';
import { footerTemplate } from '../views/footer.js';
import { navigationTemplate } from '../views/navBar.js';

const root = document.querySelector('#container');


const contextRender = (context, templateResult) => {
    const username = getUserData() ? getUserData().username : nothing;

    const layout = html `
    <header>
        ${navigationTemplate(context, username)}
    </header>
    <main>
        ${templateResult}
    </main>
    <footer>
        ${footerTemplate()}
    </footer>`;
    render(layout, root);
}
export function renderMiddleware(context, next) {
    context.render = contextRender.bind(null, context);

    next();
}