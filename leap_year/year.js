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
/*var year = +prompt('Введите год', '');
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    console.log('Ваш год', year, 'високосный');
} else console.log('Ваш год', year, 'не високосный');  */


/* Первый вариант
var year = prompt('Введите год', '');
if ((year % 4) == 0) {
    if ((year % 100) !== 0) {
        console.log('Ваш год', +year,  'високосный');
    } else if ((year % 400) == 0) {
        console.log('Ваш год', +year, 'високосный'); 
    } else console.log('Ваш год', +year, 'не високосный'); 
} else console.log('Ваш год', +year, 'не високосный'); */

var start = +prompt('Введите начало диапазона', '');
var end = +prompt('Введите конец диапазона', '');

function checkDivision(start, end) {


while (start <= end) {
    if (((start % 3) == 0) && ((start % 5) == 0)) {
          console.log (+start + ' fooBazz');  
    } else if (((start % 3) !== 0) && ((start % 5) == 0)) {
        console.log(+start + ' Bazz');
    } else if (((start % 3) == 0) && ((start % 5) !== 0)) {
        console.log(+start + ' foo');
          
    } start++
     } 
    }
checkDivision(start, end);   
