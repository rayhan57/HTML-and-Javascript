$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

function activeMenu() {
  const link = document.querySelectorAll(".nav-link");
  const section = document.querySelectorAll("section");
  let length = section.length;

  while (--length && window.scrollY + 100 < section[length].offsetTop) {}
  link.forEach((ltx) => ltx.classList.remove("active"));
  link[length].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
