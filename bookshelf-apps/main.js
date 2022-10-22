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
    let row = document.createElement(
      `<article>
      
      </article>`
    );

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

const belumSelesai = document.getElementById("incompleteBookshelfList");
belumSelesai.innerHTML = "";
let row = document.createElement("article");
const atribute = document.createAttribute("class");
atribute.value = "book_item";

row.innerHTML = `<h3>Book Title</h3>
<p>Penulis:</p>
<p>Tahun:</p>
<div class="action">
<button class="green">Selesai dibaca</button>
<button class="red">Hapus buku</button>
</div>
`;

row.setAttributeNode(atribute);
belumSelesai.appendChild(row);
