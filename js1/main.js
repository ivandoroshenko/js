var a = +prompt('введите число "а" ', '');
var b = +prompt('введите число "b" ', '');
var c = +prompt('введите число "c" ', '');

if (a > c || b > c) {
var maxCount = (a > b) ? 'a' :
    (a < b) ? 'b' :
    ' a' + 'b';
} else if (c > a ){
    maxCount = (c > b) ? ' c' :
    (c < b) ? ' b' :
    'b' + ' c';
} else {
    maxCount = ('Все числа равны');
}
alert(maxCount);   