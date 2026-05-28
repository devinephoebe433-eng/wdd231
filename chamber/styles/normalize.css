/* YEAR */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* HAMBURGER MENU */
const nav = document.querySelector(".navigation");
const header = document.querySelector("header");

const hamburger = document.createElement("button");
hamburger.setAttribute("id", "hamburger");
hamburger.setAttribute("aria-label", "Toggle navigation menu");
hamburger.setAttribute("aria-expanded", "false");
hamburger.setAttribute("aria-controls", "main-nav");
hamburger.innerHTML = "&#9776;";

header.insertBefore(hamburger, nav);
nav.setAttribute("id", "main-nav");

hamburger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.innerHTML = isOpen ? "&#10005;" : "&#9776;";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.innerHTML = "&#9776;";
  });
});

/* WAYFINDING */
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navigation a").forEach(link => {
  link.classList.remove("active");
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});