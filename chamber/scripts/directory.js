const container = document.querySelector("#members");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Site</a>
    `;

    container.appendChild(card);
  });
}

getMembers();

/* GRID / LIST TOGGLE */
document.querySelector("#gridBtn").addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

document.querySelector("#listBtn").addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});