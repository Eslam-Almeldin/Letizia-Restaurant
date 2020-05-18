const mobaToggle = document.querySelector(".moba");

function toggleClick() {
  mobaToggle.classList.toggle("is-active");
}

mobaToggle.addEventListener("click", toggleClick);
