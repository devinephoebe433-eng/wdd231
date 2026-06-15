export function openModal(item) {

const modal = document.querySelector("#modal");

document.querySelector("#modalTitle").textContent = item.title;

document.querySelector("#modalContent").textContent = item.content;

modal.showModal();

}

export function closeModal() {

document.querySelector("#modal").close();

}