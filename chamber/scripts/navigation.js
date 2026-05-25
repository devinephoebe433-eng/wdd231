const nav = document.querySelector(".navigation");

document.querySelector("#menu")?.addEventListener("click", () => {
  nav.classList.toggle("open");
});