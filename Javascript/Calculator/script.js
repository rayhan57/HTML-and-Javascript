const tombol = document.getElementById("btn");
const penutup = document.querySelector(".cover");
// const pita = document.querySelector(".pembungkus");
tombol.addEventListener("click", function () {
  penutup.style.marginTop = "-1300px";
  // pita.style.opacity = "1";
});

const panah = document.getElementById("panah");
panah.addEventListener("click", function () {
  penutup.style.marginTop = "100px";
});
