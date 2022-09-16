function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Selamat Makan ${this.nama}`;
};

Mahasiswa.prototype.bermain = function (jam) {
  this.energi -= jam;
  return `Selamat Bermain ${this.nama}`;
};

const rayhan = new Mahasiswa("Rayhan", 20);
