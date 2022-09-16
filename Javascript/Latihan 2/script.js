var pilih = prompt(
  "Masukan nama makanan : \n (Nasi, Mie, Daging, Snack, Sayur)"
);

switch (pilih) {
  case "Nasi":
  case "Daging":
  case "Sayur":
    alert("Makanan Sehat");
    break;
  case "Mie":
  case "Snack":
    alert("Makanan Tidak Sehat");
    break;
  default:
    alert("Masukan Nama Makanan Dengan Benar");
    break;
}
