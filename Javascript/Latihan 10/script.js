const tutup = document.querySelectorAll(".close");
tutup.forEach(function (cl) {
  cl.addEventListener("click", function (c) {
    c.target.parentElement.style.display = "none";
    c.preventDefault();
    c.stopPropagation();
  });
});

const kartu = document.querySelectorAll(".card");
kartu.forEach(function (card) {
  card.addEventListener("click", function (c) {
    alert("Anda Salah Pencet");
  });
});
