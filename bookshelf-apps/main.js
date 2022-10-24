const storageKey = "RAK_BUKU";
const inputBuku = document.getElementById("inputBook");
const rakBuku = localStorage.getItem(storageKey);
let check = document.getElementById("inputBookIsComplete");

function cekPenyimpanan() {
  return typeof Storage !== "undefined";
}

function masukanListBuku(data) {
  if (cekPenyimpanan()) {
    let listBuku = [];
    if (rakBuku !== null) {
      listBuku = JSON.parse(rakBuku);
    }
    listBuku.unshift(data);

    localStorage.setItem(storageKey, JSON.stringify(listBuku));
  }
}

function getListBuku() {
  if (cekPenyimpanan()) {
    return JSON.parse(rakBuku);
  } else {
    [];
  }
}

function masukanKeRakBuku() {
  const dataBuku = getListBuku();
  const belumSelesai = document.getElementById("incompleteBookshelfList");
  const sudahSelesai = document.getElementById("completeBookshelfList");

  belumSelesai.innerHTML = "";
  sudahSelesai.innerHTML = "";

  for (let buku of dataBuku) {
    let row = document.createElement("article"); //Buat element article
    const atribute = document.createAttribute("class"); //Buat attribute class
    atribute.value = "book_item"; //Isi attribute class dengan book_item
    row.innerHTML = `<h3>${buku.title}</h3>
                  <p>Penulis: ${buku.author}</p>
                  <p>Tahun: ${buku.year}</p>
                  <div class="action">
                  <button class="green" onclick="selesaiDibaca()">Selesai dibaca</button>
                  <button class="red" onclick="hapusBuku()">Hapus buku</button>
                  </div>
                  `;
    row.setAttributeNode(atribute);

    if (check.checked) {
      sudahSelesai.appendChild(row);
    } else {
      belumSelesai.appendChild(row);
    }
  }
}

function statusBuku() {
  let status;
  if (check.checked) {
    status = true;
  } else {
    status = false;
  }
  return status;
}

inputBuku.addEventListener("submit", function () {
  const inputJudul = document.getElementById("inputBookTitle").value;
  const inputPenulis = document.getElementById("inputBookAuthor").value;
  const inputTahun = document.getElementById("inputBookYear").value;

  statusBuku();

  const dataBukuBaru = {
    id: Math.floor(new Date()),
    title: inputJudul,
    author: inputPenulis,
    year: inputTahun,
    isComplete: statusBuku(),
  };

  masukanListBuku(dataBukuBaru);
  masukanKeRakBuku();
});

function selesaiDibaca() {
  const dataBuku = getListBuku();
  const sudahSelesai = document.getElementById("completeBookshelfList");
  sudahSelesai.innerHTML = "";
  for (let buku of dataBuku) {
    let row = document.createElement("article"); //Buat element article
    const atribute = document.createAttribute("class"); //Buat attribute class
    atribute.value = "book_item"; //Isi attribute class dengan book_item
    row.innerHTML = `<h3>${buku.title}</h3>
                  <p>Penulis: ${buku.author}</p>
                  <p>Tahun: ${buku.year}</p>
                  <div class="action">
                  <button class="green" onclick="belumSelesaiDibaca()">Belum selesai di Baca</button>
                  <button class="red" onclick="hapusBuku()">Hapus buku</button>
                  </div>
                  `;
    row.setAttributeNode(atribute);
    sudahSelesai.appendChild(row);
  }
}

function hapusBuku() {
  localStorage.removeItem(storageKey);
}

window.addEventListener("load", function () {
  if (cekPenyimpanan()) {
    if (rakBuku !== null) {
      masukanKeRakBuku();
    }
  } else {
    alert("Browser yang Anda gunakan tidak mendukung Web Storage");
  }
});
