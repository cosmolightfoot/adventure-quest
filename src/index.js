const formNode = document.getElementById('user-input');

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formNode);

    const user = {
        name: formData.get('name'),
        partner: formData.get('partner'),
        bp: 0,
        allowance: 5,
        completed: {
            wonder: false,
            sleepover: false,
            arts: false
        }
    };

    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);
    window.location = 'pages/map.html';
});