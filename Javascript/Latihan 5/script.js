const judul = document.getElementById("judul");
judul.innerHTML = "<em>Rayhan</em>";

const sectionA = document.querySelector("#a");
sectionA.innerHTML = "HTML";

const p4 = document.querySelector("section#b p");
p4.setAttribute("id", "p4");

const sectionB = document.querySelector("section#b");
const li2 = sectionB.querySelector("li:nth-child(2)");
li2.style.backgroundColor = "red";

//Menambahkan Elemen Baru

const pBaru = document.createElement("p");
const teksBaru = document.createTextNode("Paragraf 5");

pBaru.appendChild(teksBaru);

const SectionB = document.getElementById("b");
sectionB.appendChild(pBaru);

const section = document.getElementById("b");
const ul = b.querySelector("ul");

section.insertBefore(pBaru, ul);

//Mengganti Elemen

const secB = document.getElementById("b");
const Paragraf4 = sectionB.querySelector("p");

const judulbaru = document.createElement("h2");
const teksjudul = document.createTextNode("Ini Judul Baru");

judulbaru.appendChild(teksjudul);

secB.replaceChild(judulbaru, Paragraf4);
