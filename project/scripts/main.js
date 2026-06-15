const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("show");
});

fetch("data/lyrics.json")
  .then(res => res.json())
  .then(data => {
    const featured = document.getElementById("featured");

    data.slice(0, 3).forEach(item => {
      featured.innerHTML += `
        <div class="card">
          <h3>${item.title}</h3>
          <p>${item.theme}</p>
        </div>
      `;
    });
  });