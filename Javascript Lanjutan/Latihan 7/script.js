const nama = `Rayhan Lingga Buana`;
const umur = 20;
const alamat = `Bekasi`;

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) => `${result}${str}<i class="hl">${values[i] || ""}</i>`,
    ""
  );
}

const str = highlight`Nama saya ${nama} umur saya ${umur} tahun dan tempat tinggal saya di ${alamat}.`;

document.body.innerHTML = str;
