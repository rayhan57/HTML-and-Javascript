const storageKey = "RAK_BUKU";
const inputBuku = document.getElementById("inputBook");
const rakBuku = localStorage.getItem(storageKey);

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
    row.innerHTML = "<h3>" + buku.judul + "</h3>";
    row.innerHTML = "<p>" + buku.penulis + "</p>";
    row.innerHTML = "<p>" + buku.tahun + "</p>";
    belumSelesai.appendChild(row);
  }
}
