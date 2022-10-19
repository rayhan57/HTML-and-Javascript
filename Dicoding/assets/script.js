const a = document.querySelectorAll("a");

a.forEach((e) => {
  e.addEventListener("click", function () {
    e.classList.remove("active");
  });
});
