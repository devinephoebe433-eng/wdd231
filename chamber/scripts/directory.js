const container = document.querySelector("#members");

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members ?? data);
  } catch (error) {
    container.innerHTML = "<p>Unable to load members. Please try again later.</p>";
  }
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img class="card-img" src="images/${member.image}" alt="${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Site</a>
    `;

    container.appendChild(card);
  });
}

/* GRID / LIST TOGGLE */
document.querySelector("#gridBtn").addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
  container.querySelectorAll(".card-img").forEach(img => img.style.display = "");
});

document.querySelector("#listBtn").addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
  container.querySelectorAll(".card-img").forEach(img => img.style.display = "none");
});

/* WAYFINDING */
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navigation a").forEach(link => {
  link.classList.remove("active");
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

getMembers();