const nama = document.querySelector(".nama");
const pisah = [...nama.textContent].map((p) => `<span>${p}</span>`).join("");
nama.innerHTML = pisah;
// console.log(pisah);
