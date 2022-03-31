import { render } from '../library/lib.js';

const root = document.querySelector('#site-content');

const renderContent = (content) => {
    render(content, root);
}

export const renderMiddleware = (context, next) => {

    context.render = renderContent;
    
    next();
}