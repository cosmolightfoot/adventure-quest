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
const hide = {
    description: 'Put on costumes from ba',
    id: 'hide',
    name: 'Hide',
    result: 'Jimmy Jr. convinces his dad that he invited you to the party all along. You not only get to catch a peek of his party, you also get to join it! Gain 5 burger points and 5 allowance in your party favor bag.',
    bp: 5,
    allowance: 5,
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

const tinaQuests = {
    sleepover: {
        id: 'sleepover',
        name: 'Spy on Jimmy Jr.\'s Sleepover',
        description: 'Jimmy Jr. is having a sleepover. Tina has the great idea to climb up the Pesto’s fire escape in the hopes of catching a peek of the party!',
        choices: [run, fight, reason],
        image: '',
        audio: ''
    }
};


const geneQuests = {
    arts: {
        id: 'arts',
        name: 'Break into the Wharf Arts Center',
        description: 'Gene has always wanted to sing in the Wharf Arts Center Auditorium. He has the idea to break in and record a track of his new song (because the acoustics are amazing, DUH).',
        choices: [hide, plead, impress],
        image: '',
        audio: ''
    }
};