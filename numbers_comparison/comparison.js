
var a = 14, b = 13, c = 14;
if (a > b && a > c) {
    console.log('Самое большое число' + ' a');
}
else if (b > a && b > c) {
    console.log('Самое большое число' + ' b');
}
else if (c > a && c > b) {
    console.log('Самое большое число' + ' c');
}
else if (a == b && a > c) {
    console.log('Самые большие числа' + ' a' + ' и' + ' b');
}
else if (a == c && a > b) {
    console.log('Самые большие числа' + ' a' + ' и' + ' c');
}
else if (c == b && c > a) {
    console.log('Самые большие числа' + ' b' + ' и' + ' c');
}
else if (a == b && a == c) {
    console.log('Все числа равны');
}
