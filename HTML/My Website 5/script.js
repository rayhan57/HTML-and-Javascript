var page = 1;
setInterval(function () {
  document.getElementById("radio" + page).checked = true;
  page++;
  if (page > 2) {
    page = 1;
  }
}, 8000);
