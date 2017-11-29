//Первый вариант
/* var year = prompt('Введите год', '');
if ((year % 4) == 0) {
    if ((year % 100) !== 0) {
        console.log('Ваш год', +year,  'високосный');
    } else if ((year % 400) == 0) {
        console.log('Ваш год', +year, 'високосный'); 
    } else console.log('Ваш год', +year, 'не високосный'); 
} else console.log('Ваш год', +year, 'не високосный'); */

//Второй вариант
var year = +prompt('Введите год', '');
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    console.log('Ваш год', year, 'високосный');
} else console.log('Ваш год', year, 'не високосный'); 