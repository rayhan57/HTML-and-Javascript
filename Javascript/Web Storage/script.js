function Waktu() {
  let waktu = new Date().getHours();
  let ucapan;
  if (waktu > 0 && waktu < 12) {
    ucapan = "Selamat Pagi";
  } else if (waktu > 11 && waktu < 15) {
    ucapan = "Selamat Siang";
  } else if (waktu > 14 && waktu < 18) {
    ucapan = "Selamat Sore";
  } else {
    ucapan = "Selamat Malam";
  }
  return ucapan;
}

const judul = document.querySelector(".judul");
// Ambil nama dari local storage
let nama = localStorage.getItem("nama");
if (!nama) {
  nama = prompt("Masukan nama:");
  localStorage.setItem("nama", nama);
}
judul.innerHTML = `${Waktu()} ${nama}`;

function gantiNama() {
  nama = prompt("Masukan nama yg baru:");
  localStorage.setItem("nama", nama);
}

function hapusNama() {
  localStorage.removeItem("nama");
}

// Dark Mode
const Tombol = document.querySelector(".dark-mode");
const backgroundJudul = document.querySelector(".background");
let mode = localStorage.getItem("mode");
// Mode default
if (!mode) {
  localStorage.setItem("mode", "terang");
}

function modeGelap() {
  document.body.classList.add("gelap");
  backgroundJudul.classList.add("bg-dark");
  Tombol.innerHTML = "Mode Terang";
  localStorage.setItem("mode", "gelap");
}

function modeTerang() {
  document.body.classList.remove("gelap");
  backgroundJudul.classList.remove("bg-dark");
  Tombol.innerHTML = "Mode Gelap";
  localStorage.setItem("mode", "terang");
}

// Cek mode
if (mode == "gelap") {
  modeGelap();
}

Tombol.addEventListener("click", function () {
  mode = localStorage.getItem("mode");
  if (mode === "terang") {
    modeGelap();
  } else {
    modeTerang();
  }
});
