const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const Newli = document.createElement("li");
  const teksli = document.createTextNode("list baru");
  Newli.appendChild(teksli);
  ul.appendChild(Newli);
});
