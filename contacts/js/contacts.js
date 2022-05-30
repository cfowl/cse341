const url = 'https://cfowl-cse341.herokuapp.com/contacts';
const display = document.getElementById('contacts-display');

fetch(url)
.then(response => response.json())
.then(data => {
    // clear the display
    display.innerHTML = '';
    // sort the data
    data = data.sort((a, b) => (parseInt(a.number)) > (parseInt(b.number)) ? 1 : -1);
    // loop through each contact
    data.forEach(c => {
        // create contact card
        const card = document.createElement('div');
        card.classList.add('card');
        // create contact list
        const list = document.createElement('ul');
        card.classList.add('c-list');
        // add contact items to list
        card.innerHTML = `<img class='c-img' src='data:image/png;base64,${c.portrait}' alt='Portrait of ${c.firstName} ${c.lastName}'>`;
        card.innerHTML += `<li class='c-item'>No. ${c.number}</lic>`;
        card.innerHTML += `<li class='c-item'>${c.firstName} ${c.lastName}</li>`;
        card.innerHTML += `<li class='c-item'>Date of Birth: ${c.birthday}</li>`;
        card.innerHTML += `<li class='c-item'>Term Length: ${c.term}</li>`;
        card.innerHTML += `<li class='c-item'>Party Affiliation: ${c.party}</li>`;
        card.innerHTML += `<li class='c-item'>Favorite Color: ${c.favoriteColor}</li>`;
        // append to display
        card.appendChild(list);
        display.appendChild(card);
    });
});