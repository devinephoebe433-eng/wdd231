const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("show");
});
}

const visits = Number(localStorage.getItem("visits")) || 0;

localStorage.setItem("visits", visits + 1);