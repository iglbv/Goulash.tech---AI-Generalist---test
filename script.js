function openModal(imageSrc, caption) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var modalCaption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  modalCaption.textContent = caption || "";

  document.body.style.overflow = "hidden";
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

document
  .getElementById("imageModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeModal();
    }
  });
