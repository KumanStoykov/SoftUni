import { render } from '../library/lib.js';

const root = document.querySelector('.root');

const renderInjection = (content) => {
    return render(content, root);
}

export const renderMiddleware = (context, next) => {

    context.render = renderInjection;
    next();
}