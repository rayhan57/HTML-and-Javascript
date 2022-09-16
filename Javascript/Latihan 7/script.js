const tanggaltujuan = new Date("1 Feb 2022 22:00:00");
const NamaWaktu = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const Tanggal = tanggaltujuan.toLocaleDateString("id-US", NamaWaktu);
const Waktu = tanggaltujuan.toLocaleTimeString();

const hitungmundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggaltujuan - sekarang;
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const TanggalTujuan = document.getElementById("tanggal-tujuan");
  const WaktuTersisa = document.getElementById("waktu-tersisa");
  TanggalTujuan.innerHTML = `Tanggal Tujuan ${Tanggal} Pukul ${Waktu}`;
  WaktuTersisa.innerHTML = `Waktu anda tersisa ${hari} hari ${jam} jam ${menit} menit ${detik} detik lagi!`;

  if (selisih < 0) {
    clearInterval(hitungmundur);
    WaktuTersisa.innerHTML = "Waktu anda sudah habis!";
  }
}, 1000);
