const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", function () {
    navLink.forEach((e) => e.classList.remove("active"));
    this.classList.add("active");
  });
});
