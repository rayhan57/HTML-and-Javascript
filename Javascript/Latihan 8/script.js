const tombol = document.getElementById("ubahwarna");
tombol.onclick = function () {
  document.body.classList.toggle("skyblue");
};

const tombolbaru = document.createElement("button");
const tekstombol = document.createTextNode("Acak Warna");
tombolbaru.appendChild(tekstombol);
tombolbaru.setAttribute("type", "button");
tombol.after(tombolbaru);

tombolbaru.onclick = function () {
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
};

const slideMerah = document.querySelector("input[name=slidermerah]");
const slideHijau = document.querySelector("input[name=sliderhijau]");
const slideBiru = document.querySelector("input[name=sliderbiru]");

slideMerah.addEventListener("input", function () {
  const red = slideMerah.value;
  const green = slideHijau.value;
  const blue = slideBiru.value;
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
});

slideHijau.addEventListener("input", function () {
  const red = slideMerah.value;
  const green = slideHijau.value;
  const blue = slideBiru.value;
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
});

slideBiru.addEventListener("input", function () {
  const red = slideMerah.value;
  const green = slideHijau.value;
  const blue = slideBiru.value;
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
});

document.body.addEventListener("mousemove", function (event) {
  const xposition = Math.round((event.clientX / window.innerWidth) * 255);
  const yposition = Math.round((event.clientX / window.innerHeight) * 255);
  document.body.style.backgroundColor =
    "rgb(" + xposition + "," + yposition + ",100)";
});
