const Mahasiswa = ["Rayhan", "Lingga", "Buana"];

// const BanyakHuruf = Mahasiswa.map((nama) => nama.length);
// console.table(BanyakHuruf);

const BanyakHuruf = Mahasiswa.map((nama) => ({ nama, huruf: nama.length }));
console.log(BanyakHuruf);
