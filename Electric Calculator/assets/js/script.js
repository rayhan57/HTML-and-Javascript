const btnHitung = document.querySelector(".hitung");
btnHitung.addEventListener("click", () => {
  validasi(
    validasiHargaPerkwh(),
    validasiDayaListrik(),
    validasiWaktuPemakaian()
  );
  hitung();
});

const validasi = (hargaPerkwh, dayaListrik, waktuPemakaian) => {
  return hargaPerkwh, dayaListrik, waktuPemakaian;
};

const validasiHargaPerkwh = () => {
  const hargaPerkwh = document.getElementById("perkwh");
  const error = document.querySelector(".error1");

  if (hargaPerkwh.value.length < 1) {
    hargaPerkwh.style.border = "1px solid red";
    error.classList.remove("d-none");
  } else {
    hargaPerkwh.style.border = "";
    error.classList.add("d-none");
  }
};

const validasiDayaListrik = () => {
  const dayaListrik = document.getElementById("dayalistrik");
  const error = document.querySelector(".error2");

  if (dayaListrik.value.length < 1) {
    dayaListrik.style.border = "1px solid red";
    error.classList.remove("d-none");
  } else {
    dayaListrik.style.border = "";
    error.classList.add("d-none");
  }
};

const validasiWaktuPemakaian = () => {
  const waktuPemakaian = document.getElementById("pemakaian");
  const error = document.querySelector(".error3");

  if (waktuPemakaian.value.length < 1) {
    waktuPemakaian.style.border = "1px solid red";
    error.classList.remove("d-none");
  } else {
    waktuPemakaian.style.border = "";
    error.classList.add("d-none");
  }
};

const hitung = () => {
  const hargaPerkwh = document.getElementById("perkwh").value;
  const dayaListrik = parseInt(document.getElementById("dayalistrik").value);
  const waktuPemakaian = parseInt(document.getElementById("pemakaian").value);

  const outputSehari = document.querySelector(".sehari");
  const outputSeminggu = document.querySelector(".seminggu");
  const outputSebulan = document.querySelector(".sebulan");

  const biayaSehari = Math.floor(
    ((dayaListrik * waktuPemakaian) / 1000) * hargaPerkwh
  );
  const biayaSeminggu = Math.floor(
    ((dayaListrik * waktuPemakaian) / 1000) * hargaPerkwh * 7
  );
  const biayaSebulan = Math.floor(
    ((dayaListrik * waktuPemakaian) / 1000) * hargaPerkwh * 30
  );

  outputSehari.innerHTML = biayaSehari.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 5,
  });
  outputSeminggu.innerHTML = biayaSeminggu.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 5,
  });
  outputSebulan.innerHTML = biayaSebulan.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 5,
  });
};

document.body.classList.add("bg-dark");

document.querySelector(".container").classList.remove("bg-light");
document.querySelector(".container").classList.add("bg-secondary");
document.querySelector(".container").classList.add("text-light");
