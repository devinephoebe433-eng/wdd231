import { openModal, closeModal } from "./modal.js";

const container = document.querySelector("#lyricsContainer");

const modalClose = document.querySelector("#closeModal");

let allLyrics = [];

async function getLyrics() {

try {

const response = await fetch("data/lyrics.json");

const data = await response.json();

allLyrics = data;

displayLyrics(data);

}
catch(error) {

console.error(error);

}

}

function displayLyrics(data) {

container.innerHTML = "";

data.forEach(item => {

const card = document.createElement("section");

card.classList.add("card");

card.innerHTML = `
<span class="badge ${item.type.toLowerCase()}">${item.type}</span>

<h3>${item.title}</h3>

<p><strong>Theme:</strong> ${item.theme}</p>

<p><strong>Mood:</strong> ${item.mood}</p>

<p><strong>Reading Time:</strong> ${item.readingTime}</p>

<button class="read-more">Read More</button>
`;

card.querySelector(".read-more").addEventListener("click", () => {

openModal(item);

});

container.appendChild(card);

});

}

document.querySelectorAll("#filters button").forEach(btn => {

btn.addEventListener("click", () => {

const filter = btn.dataset.filter;

if(filter === "all") {

displayLyrics(allLyrics);

}
else {

displayLyrics(

allLyrics.filter(item => item.type === filter)

);

}

});

});

modalClose.addEventListener("click", closeModal);

getLyrics();