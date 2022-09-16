const Container = document.querySelector(".container");
const Utama = document.querySelector(".utama");

Container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    Utama.src = e.target.src;
    Utama.classList.add("fade");
    setTimeout(function () {
      Utama.classList.remove("fade");
    }, 200);
  }
});
