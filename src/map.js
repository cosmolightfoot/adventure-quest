const userJSON = window.localStorage.getItem('user');
if(!userJSON) {
    window.location = '/';
}
const user = JSON.parse(userJSON);

import allQuests from './quests.js';

const linksNode = document.getElementById('links');

const partner = user.partner;