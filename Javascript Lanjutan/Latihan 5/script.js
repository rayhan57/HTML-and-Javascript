const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Angka >= 3
const Hasil = angka.filter((a) => a >= 3);
console.log(Hasil);

// Angka + 10
const Jumlah = angka.map((a) => a + 10);
console.log(Jumlah);

//Jumlah seluruh angka
const Total = angka.reduce((nilaihasil, sekarang) => nilaihasil + sekarang);
console.log(Total);

// Angka > 4 dikalikan 2 jumlahkan hasilnya
const TotalJumlah = angka
  .filter((a) => a > 4)
  .map((a) => a * 2)
  .reduce((n, s) => n + s);
console.log(TotalJumlah);
