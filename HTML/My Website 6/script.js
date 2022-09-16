var geser = 1;
setInterval(function () {
  document.getElementById("radio" + geser).checked = true;
  geser++;
  if (geser > 4) {
    geser = 1;
  }
}, 4000);

// const Titleinnova = document.getElementById("innova");
// const Titlerush = document.getElementById("rush");
// const Titlefortuner = document.getElementById("fortuner");
// const Titlepajero = document.getElementById("pajero");
const Title = document.querySelectorAll("#tulisan");
// const Titlejudul = document.getElementById("judul");
const autoBtn = document.querySelector(".navigation-auto");
const slide = document.getElementById("check");
slide.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  autoBtn.classList.toggle("nav-dark");
  // Titleinnova.classList.toggle("warna-abu");
  // Titlerush.classList.toggle("warna-abu");
  // Titlefortuner.classList.toggle("warna-abu");
  // Titlepajero.classList.toggle("warna-abu");
  // Titlejudul.classList.toggle("warna-abu");
});

for (let i = 0; i < Title.length; i++) {
  slide.addEventListener("click", function () {
    Title[i].classList.toggle("warna-abu");
  });
}

const Bg = document.querySelector(".mode");
Bg.addEventListener("click", function () {
  Bg.classList.toggle("background");
});

const Navbar = document.querySelector(".navbar");
const menuToogle = document.querySelector(".navbar i.fa.fa-angle-double-right");
menuToogle.addEventListener("click", function () {
  Navbar.classList.toggle("none");
});

function openPage() {
  const cari = document.getElementById("search").value;

  if (cari === "pajero" || cari === "mitsubishi pajero") {
    window.open("pajero.html");
  }
  if (cari === "fortuner" || cari === "toyota fortuner") {
    window.open("fortuner.html");
  }
  if (cari === "rush" || cari === "toyota rush") {
    window.open("rush.html");
  }
  if (cari === "innova" || cari === "toyota innova") {
    window.open("innova.html");
  }
}
