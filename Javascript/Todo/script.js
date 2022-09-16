const isiKotak = document.querySelector(".isi");
const listBaru = document.querySelector(".new-task");

if (typeof Storage !== "undefined") {
  console.log("Local Storage Available");
} else {
  console.log("Local Storage not Available");
}

function Add() {
  const li = `<li><span onclick='Coret(this)'>${
    isiKotak.value
  }</span><span onclick='Close(this)'>${"X"}</span></li>`;
  listBaru.insertAdjacentHTML("afterbegin", li);
  isiKotak.value = "";
}

function Enter(event) {
  const tombol = event.key;
  if (tombol == "enter" || tombol == "Enter") {
    Add();
  }
}

function Coret(e) {
  e.classList.toggle("coret");
}

function Close(e) {
  e.parentElement.style.display = "none";
}
