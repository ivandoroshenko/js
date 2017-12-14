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

// var userName = prompt('Кто пришел?', '');
// if (userName == 'Админ') {
//     var password = prompt('Пароль?', '');
//     if (password == 'Черный Властелин') {
//         alert('Добро пожаловать!');
//     } else if (password == null) {
//         alert('Вход отменен');
//     } else alert('Пароль неверен');
// } else if (userName == null) {
//     alert('Вход отменен');
// } else alert('Я Вас не знаю!');

// / 1. Деньги
// от 5000 до 7000
// от 8000 до 10000
// от 11000 до ....
// 2.
//     25 %, 27 %, 30 %
//     10 %, 12 %, 15 %
//     3 %, 5 %, 7 %
// 3.
//     7лет, 9лет, 12лет
//     3года. 5лет, 6лет
//     12лет, 15лет, 17лет
//     * /

var many;
var termCredit;
var percent;
do {
    var many = +prompt('Введите желаемую сумму', 0);
    if (many >= 5000 && many <= 7000) {
        console.log('Ваша сумма ' + many);

        var percent = +prompt('Выбирите процентную ставку', '');

        switch (percent) {

            case 25:
                console.log('Ваш процент 25%');
                var termCredit = +prompt('Вам доступны такие сроки: 7, 9 и 12 лет');

                if (termCredit === 7) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                }
                else if (termCredit === 9) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                }
                else if (termCredit === 12) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                } else {
                    console.log('Не верно выбран срок');
                }

                break;

            case 27:
                console.log('Ваш процент 27%');
                var termCredit = +prompt('Вам доступны такие сроки: 7, 9 и 12 лет');

                if (termCredit === 7) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                }
                else if (termCredit === 9) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                }
                else if (termCredit === 12) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                } else {
                    console.log('Не верно выбран срок');
                }
                break;

            case 30:
                console.log('Ваш процент 30%');
                var termCredit = +prompt('Вам доступны такие сроки: 7, 9 и 12 лет');

                if (termCredit === 7) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                }
                else if (termCredit === 9) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                }
                else if (termCredit === 12) {
                    console.log(' Вы получите :' + many * (percent / 100) * termCredit);
                } else {
                    console.log('Не верно выбран срок');
                }
                break;

            default:
                console.log('Ваш процент не верный');
                break;
        }

    } else {
        console.log('Сумма не верна');
    }
} while (many !=+null);