// var x = +prompt('Введите х', '');
// if (x >= 1 && x <= 10) {
// function sumTo(x) {
//   if (x != 1) {
//     return x + sumTo(x - 1);
// } else {
//   return x;
// }
// }
// alert(sumTo(x));
// } else 
// alert( 'Введите корректное х' );


var sum = 0;
for (i = 4; i < 8; i++) {
  if (i == 6) {
    continue
  }
  sum += i;
}
document.write(sum);