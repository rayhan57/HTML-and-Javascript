const tambah = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(tambah());
console.log(tambah());
console.log(tambah());
