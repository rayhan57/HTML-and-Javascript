function DataMotor(url, succes, error) {
  let data = new XMLHttpRequest();

  data.onreadystatechange = function () {
    if (data.readyState === 4) {
      if (data.status === 200) {
        succes(data.response);
      } else if (data.status === 404) {
        error();
      }
    }
  };

  data.open(`get`, url);
  data.send();
}

console.log(`Mulai`);
DataMotor(`motor.json`, (hasil) => {
  const motor = JSON.parse(hasil);
  motor.forEach((m) => {
    console.log(`Nama ${m.nama} Jenis ${m.jenis} Merk ${m.merk}`);
  });
}),
  (e) => {
    console.log(e.responseText);
  };
console.log(`Selesai`);
