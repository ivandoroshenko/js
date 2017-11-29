alert ('Привет Мир!');

//vars
/* var admin;
var name;
name = 'Василий';
admin = name;
alert (admin);

//right chose of variables values
var ourPlanetName = 'Земля';
var userName = 'Петя';

//operators
var a = 2;
var x = 1 + (a *= 2);
alert (x); */

//task fot Ecmascript check
/* var nameForJavaScript = prompt('Каково официальное название JavaScript?', '');

if (nameForJavaScript == 'ECMAScript') {
    alert('Верно!');
}   else {
    alert('не знаете JavaScript?');
    }    */

//return value of inputed number
/* var number = prompt('Введите число от -1 до 1', '');
    if (number >=-1 && number <=1) {
    alert(number);
    } confirm('вы ввели неверое число');

Ivan Doroshenko, [28.11.17 17: 22]
//rewrite if
var result = (a + b < 4) ? 'Мало' : 'Много';

Ivan Doroshenko, [28.11.17 17: 26]
//rewrite if to ? message
var login;
var message = (login == 'Вася') ? message = 'Привет' :
    (login == 'Директор') ? message = 'Здравствуйте' :
        (login == '') ? message = 'Нет логина' :
            message = ''; */

var userName = prompt('Кто пришел?', '');
if (userName == 'Админ') {
    var password = prompt('Пароль?', '');
    if (password == 'Черный Властелин') {
        alert('Добро пожаловать!');
    } else if (password == null) {
        alert('Вход отменен');
    } else alert('Пароль неверен');
} else if (userName == null) {
    alert('Вход отменен');
} else alert('Я Вас не знаю!');

/ 1. Деньги
от 5000 до 7000
от 8000 до 10000
от 11000 до ....
2.
    25 %, 27 %, 30 %
    10 %, 12 %, 15 %
    3 %, 5 %, 7 %
3.
    7лет, 9лет, 12лет
    3года. 5лет, 6лет
    12лет, 15лет, 17лет
    * /