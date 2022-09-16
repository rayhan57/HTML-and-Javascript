// For..of
const nama = [`Rayhan`, `Lingga`, `Buana`];
for (n of nama) {
  console.log(n);
}
console.log(`//////////////////////////////////////`); //Pemisah

// For..of
function JumlahAngka() {
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
console.log(JumlahAngka(1, 2, 3, 4, 5));
console.log(`//////////////////////////////////////`); //Pemisah

// For..in
const mahasiswa = {
  nama: `Rayhan`,
  umur: 20,
  alamat: `Bekasi`,
};

for (m in mahasiswa) {
  console.log(m, mahasiswa[m]);
}
