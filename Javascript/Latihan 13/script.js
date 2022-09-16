// Tanggal
const hari = new Date().getDay();
const tanggal = new Date().getDate();
const bulan = new Date().getMonth();
const tahun = new Date().getFullYear();

const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const month = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const Hari = document.getElementById("hari");
const Tanggal = document.getElementById("tanggal");
const Bulan = document.getElementById("bulan");
const Tahun = document.getElementById("tahun");

Hari.innerHTML = day[hari];
Tanggal.innerHTML = tanggal;
Bulan.innerHTML = month[bulan];
Tahun.innerHTML = tahun;

// Jam
setInterval(() => {
  const jam = document.getElementById("hour");
  const menit = document.getElementById("minute");
  const detik = document.getElementById("second");

  const j = new Date().getHours();
  const m = new Date().getMinutes();
  const d = new Date().getSeconds();

  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  jam.style.color = `rgb(${red}, ${green}, ${blue})`;
  menit.style.color = `rgb(${red}, ${green}, ${blue})`;
  detik.style.color = `rgb(${red}, ${green}, ${blue})`;

  jam.innerHTML = j;
  menit.innerHTML = m;
  detik.innerHTML = d;
  if (j < 10) {
    jam.innerHTML = `0${j}`;
  }
  if (m < 10) {
    menit.innerHTML = `0${m}`;
  }
  if (d < 10) {
    detik.innerHTML = `0${d}`;
  }
}, 500);

// const kotak = document.querySelectorAll("span:nth-child(1)");
