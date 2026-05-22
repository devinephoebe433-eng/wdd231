const url = 'data/members.json';
const cards = document.querySelector('#members');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data);
}

getMembers();

const displayMembers = (members) => {

    members.forEach((member) => {

        const card = document.createElement('section');

        const name = document.createElement('h3');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        const image = document.createElement('img');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;

        website.textContent = "Visit Website";
        website.href = member.website;

        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', member.name);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
};

document.querySelector('#grid').addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
});

document.querySelector('#list').addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
});

document.querySelector("#year").textContent =
`© ${new Date().getFullYear()}`;

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;