const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "yellow";
judul.innerHTML = "Rayhan";

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "gray";
}

const h1 = document.getElementsByTagName("h1");
h1[0].style.fontFamily = "algerian";

const p2 = document.getElementsByClassName("p2");
p2[0].innerHTML = "Diubah dari javascript";

// QuerySelector

const p4 = document.querySelector("#b p");
p4.style.color = "orange";

const li3 = document.querySelector("#b ul li:nth-child(3)");
li3.style.backgroundColor = "red";

const li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  li[i].style.fontSize = "30px";
}

// Node-Root

const section = document.getElementById("b");
const li1 = section.querySelector("li:nth-child(2)");
li1.style.backgroundColor = "purple";
