const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
const hariSekarang = namaHari[new Date().getDay()];
const hariMatkul = document.querySelectorAll(".hari");

hariMatkul.forEach((e) => {
  let hari = e.innerText;
  if (hariSekarang == hari) {
    e.parentElement.classList.add("today");
  } else {
    e.parentElement.classList.remove("today");
  }
});

// Mode Malam
const jam = new Date().getHours();
const jadwal = document.querySelector(".jadwal");
const bgjudul = document.querySelector(".bg-gray");
const body = document.querySelector("body");

if (jam > 17 || jam < 6) {
  Jadwal();
  Backgroundjudul();
  body.style.backgroundColor = "black";
}

function Backgroundjudul() {
  bgjudul.classList.add("bg-secondary");
  bgjudul.classList.add("bg-gradient");
  bgjudul.classList.add("text-light");
}

function Jadwal() {
  jadwal.classList.remove("bg-white");
  jadwal.classList.add("bg-dark");
  jadwal.classList.add("text-light");
  jadwal.classList.add("bayangan");
}
