var modal = document.getElementById("videoModal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function color(z) {
  const a = getComputedStyle(z);
  const b = a.backgroundColor;
  document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
}
