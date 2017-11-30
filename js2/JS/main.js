    // var message = +prompt('Введите номер дня', ''); // 3

// switch (message) {
//     case '1':
//         console.log('Это понедельник');
//         break;
//     case 2:
//         console.log('Это вторник');
//         break;
//     case 3:
//         console.log('Это среда');
//         break;
//     default:
//         console.log('Ошибочный ввод!');
//         break;
// }

// var n = 123;

// while (n <= 10) {
//     document.write(n);
//     n++;
// }

// do {
//     document.write(n);
//     n++;
// } while (n <= 10);


// var el = document.querySelectorAll('.text');

// for (var i = 0; i < el.length; i++) {
//     el[i].style.color = 'red';
// }

// var target = 5;

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === target) {
//         console.log('Число найдено!');
//         break;
//     }
// }

// var el = document.querySelectorAll('.text');

// for (var i = 0; i < el.length; i++) {
//     if (el[i].classList.contains('red')) {
//         continue;
//     }
//     el[i].style.color = 'green';
// }


// Методы

// var str = 'Hello, world';
// длина строки
// console.log(str.length);
// верхний регистр
// console.log(str.toUpperCase());
// str = str.toUpperCase();
// console.log(str);
// console.log(str);
// console.log(str);
// console.log(str);
// нижний регистр
// console.log(str.toLowerCase());
// console.log(str);

/// числа

// var n = 5.145151;

// console.log( n.toFixed(2) ); // 1 - округление  | > 1 округление + обрезка после запятой | 0 - без вещественной части

// var message = prompt('Введите слово', '');
// var str = 'I love JavaScript!!!';
// // 0 | > 0 | -1
// if (str.indexOf(message) >= 0) { // 2
//     var target = str.indexOf(message); // 2
//     str = str.slice(0, target);
//     console.log(str);
// } else {
//     console.log('Такого слова нет!');
// }
// console.log(str.charAt(1)); // взятие символа по позиции в строке
// console.log( str[1] ); // !!!!

// console.log(str.indexOf('C++')); // 0 - если вхождение в начале, > 0 - если вхождение внутри строки, -1 - вхождения нет


// var n = '12.55.12312px';

// n = parseFloat(n);
// console.log(n);

// var wrapper = document.querySelector('.wrapper');

// var firstColor = Math.round(Math.random() * 255),
//     secondColor = Math.round(Math.random() * 255),
//     thirdColor = Math.round(Math.random() * 255);
// wrapper.style.background = 'rgb(' + firstColor + ',' + secondColor + ',' + thirdColor + ')';

/* Сумма, срок, % = результат
/ 1. Деньги
        от 5000 до 7000
        от 8000 до 10000
        от 11000 до ....
    2. 
        25%, 27%, 30%
        10%, 12%, 15%
        3%, 5%, 7%
    3.
        7лет, 9лет, 12лет
        3года. 5лет, 6лет
        12лет, 15лет, 17лет
*/
