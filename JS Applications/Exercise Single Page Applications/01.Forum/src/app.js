import { commentView } from './commentView.js';
import { buttonsDelegation} from './makeTopic.js';
import {topicRender} from './renderTopic.js';


 let mainElement = document.querySelector('.main-section');
//render topic 
topicRender();
// Home Page
document.querySelector('.home').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.container').replaceChildren(mainElement);    
    
});
//Make  new topic
document.querySelector('.new-topic-buttons').addEventListener('click', buttonsDelegation);

//Open current post view
document.querySelector('.topic-container').addEventListener('click', commentView);

