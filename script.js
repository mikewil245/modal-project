const btn = document.getElementById("btn");
console.log(btn);
const closeBtn = document.getElementById("close-btn");
console.log(closeBtn);
const modalOverlay = document.getElementById("modal-overlay");
const modalContainer = document.getElementById("modal-container");

btn.addEventListener("click", () => {
  modalOverlay.style.display = "block";
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  modalContainer.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOverlay.style.display = "none";
    modalContainer.style.display = "none";
  }
});
