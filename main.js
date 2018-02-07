function sumof35(n) {
  var total = 0,
    n;
  for (i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total = total + i;
    }
  }
  return total;
}
console.log(sumof35(1000));
