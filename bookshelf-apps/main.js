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

    if (listBuku.lenth > 5) {
      listBuku.pop();
    }

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
    let row = document.createElement("tr");
    row.innerHTML = "<h3>" + buku.title + "</h3>";
    row.innerHTML = "<p>" + buku.author + "</p>";
    row.innerHTML = "<p>" + buku.year + "</p>";

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
