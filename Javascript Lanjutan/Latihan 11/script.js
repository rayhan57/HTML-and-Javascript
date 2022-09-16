function filter(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filter(`string`, `Rayhan`, 4, 7, `Lingga`, 5));

function Nilai(...angka) {
  return angka;
}
console.log(Nilai(60, 73, 84, 65, 96));
