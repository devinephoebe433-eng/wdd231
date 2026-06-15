import "./modal.js";

const container = document.getElementById("lyricsContainer");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

let allData = [];

async function loadData() {
  try {
    const res = await fetch("data/lyrics.json");
    const data = await res.json();
    allData = data;
    display(data);
  } catch (error) {
    console.log("Error loading data", error);
  }
}

function display(items) {
  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.theme}</p>
      <p>${item.readingTime}</p>
      <button class="viewBtn">View</button>
    `;

    div.querySelector(".viewBtn").addEventListener("click", () => {
      modalTitle.textContent = item.title;
      modalContent.textContent = item.content;
      modal.showModal();
    });

    container.appendChild(div);
  });
}

document.querySelectorAll("#filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    if (filter === "all") {
      display(allData);
    } else {
      display(allData.filter(i => i.type === filter));
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.close();
});

loadData();