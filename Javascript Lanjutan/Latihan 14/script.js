// let ditepati = false;
// const Janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve(`Ditepati setelah beberapa waktu`);
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       resolve(`Tidak ditepati setelah beberapa waktu`);
//     }, 1000);
//   }
// });

// console.log(`Mulai`);
// Janji.finally(() => console.log(`Selesai Menunggu`))
//   .then((response) => console.log(`Baik : ${response}`))
//   .catch((response) => console.log(`Tidak Baik : ${response}`));
// console.log(`Selesai`);

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: `Venom`,
        durasi: `120 menit`,
        kategori: `Aksi`,
      },
    ]);
  }, 1000);
});
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: `Bekasi`,
        suhu: 30,
        kondisi: `Berawan`,
      },
    ]);
  }, 500);
});

// Promise.all([film, cuaca]).then((response) => console.log(response));

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
