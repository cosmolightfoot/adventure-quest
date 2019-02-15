import allQuests from './quests.js';
const formNode = document.getElementById('choice-form');
const headerNode = document.getElementById('quest-title');
const descriptionNode = document.getElementById('quest-description');
const json = window.localStorage.getItem('user');
if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);

const searchParams = new URLSearchParams(window.location.search);
const questName = searchParams.get('name');

const quests = allQuests[user.partner];

let quest = null; 
for(let i = 0; i < quests.length; i++) {
    if(quests[i].id === questName) {
        quest = quests[i];
        break;
    }
}

headerNode.textContent = quest.name;
descriptionNode.textContent = quest.description;
for(let i = 0; i < quest.choices.length; i++) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.id = quest.choices[i].id;
    radio.value = quest.choices[i].id;
    radio.name = 'choices';
    radio.required = true;
    const label = document.createElement('label');
    label.for = quest.choices[i].id;
    label.textContent = quest.choices[i].name + ' - ' + quest.choices[i].description;
    formNode.prepend(label);
    formNode.prepend(radio);
    formNode.prepend(document.createElement('br'));
}