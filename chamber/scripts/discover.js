import { places } from "../data/places.mjs";

const container = document.querySelector("#places-container");

places.forEach((place, index) => {
    const card = document.createElement("article");

    card.classList.add(`card${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image}"
                 alt="${place.name}"
                 loading="lazy"
                 width="300"
                 height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    // Wire up the Learn More button
    const button = card.querySelector("button");
    button.addEventListener("click", () => {
        openModal(place);
    });

    container.appendChild(card);
});

/* ===== Visit message ===== */

const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const difference = now - Number(lastVisit);

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    if (days < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (days === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${days} days ago.`;

    }
}

localStorage.setItem("lastVisit", now);

/* ===== Learn More Modal ===== */

const modal      = document.querySelector("#place-modal");
const modalName  = document.querySelector("#modal-name");
const modalImg   = document.querySelector("#modal-image");
const modalAddr  = document.querySelector("#modal-address");
const modalDesc  = document.querySelector("#modal-description");
const closeBtn   = document.querySelector("#modal-close");

function openModal(place) {
    modalName.textContent = place.name;
    modalImg.src          = place.image;
    modalImg.alt          = place.name;
    modalAddr.textContent = place.address;
    modalDesc.textContent = place.description;
    modal.showModal();
}

closeBtn.addEventListener("click", () => {
    modal.close();
});

// Close when clicking the backdrop
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});
