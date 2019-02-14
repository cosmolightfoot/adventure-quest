//tina choices
const run = {
    description: 'You decide to flee in the only way possible - up!',
    id: 'run',
    name: 'Run',
    result: 'You get trapped on the roof. Jimmy Sr. calls Bob and Linda to get you off the roof, you are grounded and lose 5 burgerpoints.',
    bp: -5,
    allowance: 0,
    image: '',
    audio: ''
};

const fight = {
    description: 'You redirect the rain gutter to pour water down on Jimmy Sr.\'s head.',
    id: 'fight',
    name: 'Fight',
    result: 'Jimmy Sr. runs inside and you are able to get away. Later, he sends Bob a bill for repairs to his gutter. Bob takes the money from your allowance. Lose 5 dollars.',
    bp: 0,
    allowance: -5,
    image: '',
    audio: ''
};
const reason = {
    description: 'Try to talk Jimmy Jr. into letting you into his room.',
    id: 'reason',
    name: 'Reason',
    result: 'Jimmy Jr. convinces his dad that he invited you to the party all along. You not only get to catch a peek of his party, you also get to join it! Gain 5 burger points and 5 allowance in your party favor bag.',
    bp: 5,
    allowance: 5,
    image: '',
    audio: ''
};
//gene choices
const hide = {
    description: 'Put on costumes from backstage and sneak into the crowd forming around the Arts Center.',
    id: 'hide',
    name: 'Hide',
    result: 'The director of the current production showing at the Center recognizes the costumes and rats you out to the cops. Sergeant Bosco drives you home and Linda grounds you. Lose 5 burger points.',
    bp: -5,
    allowance: 0,
    image: '',
    audio: ''
};

const plead = {
    description: 'Come out of the Center crying, claiming you lost your bus money and were just trying to get out of the rain.',
    id: 'plead',
    name: 'Plead',
    result: 'Sergeant Bosco takes pity on you. He gives you bus money and a little something extra to get a treat from the store. Gain 5 allowance.',
    bp: 0,
    allowance: 5,
    image: '',
    audio: ''
};

const impress = {
    description: 'Why waste an audience? Burst into song to impress the crowd.',
    id: 'impress',
    name: 'Impress',
    result: 'Bosco and the backup officers are very impressed by your performance. The director of the current production gets word of your talent and casts you in her next show - for scale, of course. Gain 5 burger points and 5 allowance.',
    bp: 5,
    allowance: 5,
    image: '',
    audio: ''
};
//louise choices
const sneak = {
    description: 'Turn off the Queezy Queen and hide in the booths.',
    id: 'sneak',
    name: 'Sneak',
    result: 'Mr. Fischoeder lazily inspects the ride but doesn\'t see you. You are able to escape without him noticing, but you don\'t get to ride the Queezy Queen at full speed. You lose 5 burger points.',
    bp: -5,
    allowance: 0,
    image: '',
    audio: ''
};

const attack = {
    description: 'Throw wet bags of cotton candy at Mr. Fischoeder.',
    id: 'attack',
    name: 'Attack',
    result: 'You get to ride the Queezy Queen at full speed!! Gain 5 burger points. Unfortunately, Mr. Fischoeder tacks on the cost of the cotton candy onto the Belcher\'s rent, and they take 5 out of your allowance.',
    bp: 5,
    allowance: -5,
    image: '',
    audio: ''
};

const deceive = {
    description: 'Grab the trash bag out the can and pretend to pick up wet trash.',
    id: 'deceive',
    name: 'Deceive',
    result: 'When Mr. Fischoeder discovers you, you tell him that Bob and Linda sent you out to do community service by cleaning up the wharf, and he believes you! He rewards Bob and Linda by reducing their rent for the month. Gain 5 allowance but lose 5 burger points for touching wet trash.',
    bp: -5,
    allowance: 5,
    image: '',
    audio: ''
};
//quests
const tinaQuests = {
    sleepover: {
        id: 'sleepover',
        name: 'Spy on Jimmy Jr.\'s Sleepover',
        description: 'Jimmy Jr. is having a sleepover. Tina has the great idea to climb up the Pesto’s fire escape in the hopes of catching a peek of the party! Jimmy Sr. catches you on the fire escape just before you get to Jimmy Jr.\'s window.',
        choices: [run, fight, reason],
        image: '',
        audio: ''
    }
};

const geneQuests = {
    arts: {
        id: 'arts',
        name: 'Break into the Wharf Arts Center',
        description: 'Gene has always wanted to sing in the Wharf Arts Center Auditorium so you decide to break in. Sergeant Bosco sees you sneak into the building and calls for backup.',
        choices: [hide, plead, impress],
        image: '',
        audio: ''
    }
};

const louiseQuests = {
    wonder: {
        id: 'wonder',
        name: 'Terrorize Wonder Wharf',
        description: 'Wonder Wharf is closed for the day due to inclement weather conditions. Louise has the great idea to sneak in and do something no one has ever done: ride the Queezy Queen at full speed! Mr. Fischoeder spots you just as Louise is about to hit “start” on the ride.',
        choices: [sneak, attack, deceive],
        image: '',
        audio: ''
    }
};