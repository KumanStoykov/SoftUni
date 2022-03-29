import { render } from '../library/library.js';

const contentElement = document.querySelector('#main-content');

const contentMiddleware = (templateResult) => {
    render(templateResult, contentElement);
} 


export const contentRenderMiddleware= (context, next) => {
    context.render = contentMiddleware;
    next();
}