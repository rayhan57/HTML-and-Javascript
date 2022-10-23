const storageKey = "RAK_BUKU";
const inputBuku = document.getElementById("inputBook");
const rakBuku = localStorage.getItem(storageKey);
const inputCheck = document.getElementById("inputBookIsComplete").checked;

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
    return JSON.parse(localStorage.getItem(storageKey));
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
                  <button class="green">Selesai dibaca</button>
                  <button class="red">Hapus buku</button>
                  </div>
                  `;
    row.setAttributeNode(atribute);
    if (inputCheck) {
      sudahSelesai.appendChild(row);
    } else {
      belumSelesai.appendChild(row);
    }
  }
}

inputBuku.addEventListener("submit", function () {
  const inputJudul = document.getElementById("inputBookTitle").value;
  const inputPenulis = document.getElementById("inputBookAuthor").value;
  const inputTahun = document.getElementById("inputBookYear").value;

  let status;
  if (inputCheck) {
    status = true;
  } else {
    status = false;
  }

  const dataBukuBaru = {
    id: Math.floor(new Date()),
    title: inputJudul,
    author: inputPenulis,
    year: inputTahun,
    isComplete: status,
  };

  masukanListBuku(dataBukuBaru);
  masukanKeRakBuku();
});

window.addEventListener("load", function () {
  if (cekPenyimpanan()) {
    if (rakBuku !== null) {
      masukanKeRakBuku();
    }
  } else {
    alert("Browser yang Anda gunakan tidak mendukung Web Storage");
  }
});

const btnHapus = document.querySelector(".red");
btnHapus.addEventListener("click", function () {
  console.log("Dipencet");
});
