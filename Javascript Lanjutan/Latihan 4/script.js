// const Mahasiswa = function () {
//   this.nama = "Rayhan";
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Hai nama saya ${this.nama} dan saya ${this.umur} tahun`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 1000);
// };

// const rayhan = new Mahasiswa();

const Kotak = document.querySelector(".kotak");
Kotak.addEventListener("click", function () {
  let Ukuran = "ukuran";
  let Background = "background";

  if (this.classList.contains(Ukuran)) {
    [Ukuran, Background] = [Background, Ukuran];
  }

  this.classList.toggle(Ukuran);
  setTimeout(() => {
    this.classList.toggle(Background);
  }, 700);
});
