// const mahasiswa = {
//   nama: "Rayhan",
//   umur: 20,
//   npm: "201943501484",
//   alamat: "Bekasi",
// };

// const el = `<div class="mahasiswa">
// <h2>${mahasiswa.nama}</h2>
// <span class="npm">${mahasiswa.npm}</span>
// </div>`;

// console.log(el);

// const rayhan = `Nama ${mahasiswa.nama}
// Umur ${mahasiswa.umur}
// NPM ${mahasiswa.npm}
// Alamat ${mahasiswa.alamat}`;

// console.log(rayhan);

const mhs = {
  nama: "Rayhan",
  semester: 5,
  matkul: [
    "Pemrograman web dasar",
    "Pemrograman berorientasi objek",
    "Teori bahasa automata",
    "Sistem operasi",
  ],
};

const tampil = `<div class="mhs">
<h2>Nama : ${mhs.nama}</h2>
<h2 class="semester">Semester : ${mhs.semester}</h2>
<h3>Mata Kuliah : </h3>
<ol> ${mhs.matkul.map((mk) => `<li>${mk}</li>`).join("")}</ol>
</div>`;

document.body.innerHTML = tampil;
