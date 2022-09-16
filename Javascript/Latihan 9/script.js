const tutup = document.querySelectorAll(".close");
// const kartu = document.querySelector(".card");

for (let i = 0; i < tutup.length; i++) {
  tutup[i].addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
}
