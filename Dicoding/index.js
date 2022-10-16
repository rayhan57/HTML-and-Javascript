function findMin(a, b, c) {
  let minValue = 0;

  if (a < b) {
    minValue = a;
  } else if (b < c) {
    minValue = b;
  } else {
    minValue = c;
  }

  return minValue;
}
console.log(findMin(2, 5, 7));
