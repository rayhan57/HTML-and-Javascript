function Tambah() {
  s;
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const hasil = parseInt(angka1) + parseInt(angka2);
  document.getElementById("hasil").value = hasil;
}

function Kurang() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const hasil = parseInt(angka1) - parseInt(angka2);
  document.getElementById("hasil").value = hasil;
}

function Kali() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const hasil = parseInt(angka1) * parseInt(angka2);
  document.getElementById("hasil").value = hasil;
}

function Bagi() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const hasil = parseInt(angka1) / parseInt(angka2);
  document.getElementById("hasil").value = hasil;
}

// function Reset() {
//   const angka1 = (document.getElementById("angka1").value = "");
//   const angka2 = (document.getElementById("angka2").value = "");
//   const hasil = (document.getElementById("hasil").value = "");
// }

const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");
const tombol = document.getElementById("clear");
tombol.addEventListener("click", function () {
  angka1.value = "";
  angka2.value = "";
  hasil.value = "";
});
