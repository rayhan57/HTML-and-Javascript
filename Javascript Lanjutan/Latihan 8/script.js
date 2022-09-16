const mahasiswa = {
  nama: `Rayhan`,
  umur: 20,
  nilai: {
    tugas: 80,
    uts: 78,
    uas: 90,
  },
};

function CetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Nama saya ${nama} umur saya ${umur} nilai uts saya ${uts} dan nilai uas saya ${uas}`;
}

document.body.textContent = CetakMhs(mahasiswa);
