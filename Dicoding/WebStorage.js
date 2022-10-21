const teks = document.querySelector(".teks");

let getNama = localStorage.getItem("nama");
if (!getNama) {
  getNama = prompt("Masukan nama anda");
  localStorage.setItem("nama", getNama);
}

const gantiNama = () => {
  getNama = prompt("Masukan nama yg baru");
  localStorage.setItem("nama", getNama);
};

teks.innerHTML = `Hello ${getNama}`;
