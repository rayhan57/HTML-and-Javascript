const Videos = Array.from(document.querySelectorAll("[data-duration]"));

let JavascriptLanjut = Videos.filter((Videos) =>
  Videos.textContent.includes("Javascript Lanjutan")
)

  // Durasi masing2 video
  .map((durasi) => durasi.dataset.duration)

  //Ubah durasi jadi float (menit jadi detik)
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //Jumlah semua detik
  .reduce((total, detik) => total + detik);

//  Ubah format jadi jam
const Jam = Math.floor(JavascriptLanjut / 3600);
JavascriptLanjut -= Jam * 3600;
const Menit = Math.floor(JavascriptLanjut / 60);
const Detik = JavascriptLanjut - Menit * 60;

// Masukan ke html
const JumlahVideo = document.getElementById("jumlah-video");
JumlahVideo.innerHTML = Videos.filter((Videos) =>
  Videos.textContent.includes("Javascript Lanjutan")
).length;

const TotalDurasi = document.getElementById("total-durasi");
TotalDurasi.innerHTML = `${Jam} Jam ${Menit} Menit ${Detik} Detik`;
