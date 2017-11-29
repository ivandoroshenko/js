//Примитивные типы данных
// var nim = 5; //Number
// var str = 'Hello World' //string
// var bool = false; //boolean (true / false)
// var undef = undefined; //Indefined спец. тип
// var nul = null; // null нуль ничего! нужно ставить вместо нуля
//var Nan; // нечисло

// //объектные типы данных

// //массив должен хранить группу однотиипных данных

// var arr = [1, 2, 3, 4, 5]; //Array - как ассоциативный массив
// var mySelf = {
//     name: 'Ivan Doroshenko',
//     age: 22,
//     street: '... lorem'
// }

// var link = {
//     title: 'Google',
//     href   : 'http://www.google.com'
// } //object

// var a = 5;
// var result = a * a;
// var b = 10;
// var result2 = b * b;
// function pow (num){
//     return nun * num
// }

// var result

// console.log(mySelf)

// + - * / = %(остаток от деления)

// var a = 5;
// var b = 4;
// b += 5;
// b %= 5;
// // a+= b



// Примитивные типы данных
// var num = 5; // Number
// var str = 'Hello, world'; // String
// var bool = false; // Boolean ( true / false )
// var undef = undefined; // Undefined спец.тип
// var nul = null; // null - ничего!
// var nan = NaN; // нечисло

// Объектные типы данных

// var arr = [1, 2, 3, 4, 5]; // Array - 
// var link = {
//     title: 'Google',
//     href: 'http://www.google.com'
// } // Object

// var a = 5;
// var result = pow(a);
// var result2 = pow(150);
// console.log(result, result2);
// function pow (num) {
//     return num * num;
// }


// + - * / = %


// var message = prompt('Сколько тебе лет?', '');
// message += ' лет';
// console.log(message);

// var a = 5;
// var b = 4;
// a += b // a = a + b;
// a -= b // a = a - b;

// var formInfo = {
//     email: 'illiaosmanov@gmail.com',
//     name: 'Illia',
//     surname: 'Osmanov'
// }

// console.log();

// a++; a--;

// var a = '5';
// var b = '10';
// var result = +a + +b;

// var message = prompt('Сколько тебе лет???', '');
// console.log(+'message');

// > - больше
// < - меньше
// >=
// <= 
// !=
// !
// ==
// ===
// !==


// var a = 5;
// var b = 10;

// // if (a > b) { // false
// //     console.log(a + ' больше ' + b, 'ветка IF');
// // } else if (a < b) {
// //     console.log(b + ' больше ' + a, 'ветка ELSE IF');
// // } else {
// //     console.log('Они равны', 'ВЕТКА ELSE');
// // }

// // var result = (a > b) ? a : b;
// // console.log(result);

// // var age = +prompt('Сколько тебе лет?', '');
// // if (age >= 18 && age <= 60) {
// //     var body = confirm('Почка есть?');
// //     if (body) {
// //         console.log('Можно!')
// //     } else {
// //         console.log('Пиво пить нельзя')
// //     }
// // } else {
// //     console.log('Пиво пить нельзя')
// var a = 5;
// var b = 10;

// // if (a > b) { // false
// //     console.log(a + ' больше ' + b, 'ветка IF');
// // } else if (a < b) {
// //     console.log(b + ' больше ' + a, 'ветка ELSE IF');
// // } else {
// //     console.log('Они равны', 'ВЕТКА ELSE');
// // }

// // var result = (a > b) ? a : b;
// // console.log(result);

// // var age = +prompt('Сколько тебе лет?', '');
// // if (age >= 18 && age <= 60) {
// //     var body = confirm('Почка есть?');
// //     if (body) {
// //         console.log('Можно!')
// //     } else {
// //         console.log('Пиво пить нельзя')
// //     }
// // } else {
// //     console.log('Пиво пить нельзя')
// // }

// var p = document.querySelectorAll('.text');
// console.log(p);
// p.forEach(el => {

//     let randomColor1 = Math.round(Math.random() * 255);
//     let randomColor2 = Math.round(Math.random() * 255);
//     let randomColor3 = Math.round(Math.random() * 255);

//     el.style.color = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
// })

// var obj = {};
// // }

// var p = document.querySelectorAll('.text');
// console.log(p);
// p.forEach(el => {

//     let randomColor1 = Math.round(Math.random() * 255);
//     let randomColor2 = Math.round(Math.random() * 255);
//     let randomColor3 = Math.round(Math.random() * 255);

//     el.style.color = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
// })

// var obj = {};

// var age = +prompt('Сколько тебе лет?', '');
// if (age >= 18 && age <= 60) {
//     var body = confirm('Почка есть?');
//     if (body) {
//         console.log('Можно!')
//     } else {
//         console.log('Пиво пить нельзя')
//     }
// } else {
//     console.log('Пиво пить нельзя')
// }


// // if (a > b) { // false
// //     console.log(a + ' больше ' + b, 'ветка IF');
// // } else if (a < b) {
// //     console.log(b + ' больше ' + a, 'ветка ELSE IF');
// // } else {
// //     console.log('Они равны', 'ВЕТКА ELSE');
// // }

// var x;

// vondole.log (x); //выведет undefined

// var a=1*obj.zn1.value;
// 	var b=1*obj.zn2.value;
// 	var c=1*obj.zn3.value;
// 	var m=a;
// 	if (b>m) m=b;
// 	if (c>m) m=c;
// 	obj.res.value=m;
//     }

/* var a = +prompt('Введите произвольное число', '');
var b = +prompt('Введите произвольное число', '');
var c = +prompt('Введите произвольное число', '');

function maxNumberOf3() {
    if (a > b && a > c) {
        return console.log('Самое большое число ' + a);
    }
    else if (b > c) {
        return console.log('Самое большое число ' + b);
    } else return console.log('Самое большое число ' + c);

}
console.log(maxNumberOf3(a, b, c));    

var a = +prompt('введите число "а" ', '');
var b = +prompt('введите число "b" ', '');
var c = +prompt('введите число "c" ', '');

if (a > c || b > c) {
    var maxCount = (a > b) ? 'a' :
        (a < b) ? 'b' :
            ' a' + '    b';
} else if (c > a) {
    maxCount = (c > b) ? ' c' :
        (c < b) ? ' b' :
            'b' + ' c';
} else {
    maxCount = ('Все числа равны');
}
alert(maxCount); */

var amount = +prompt('Введите сумму вклада $(от 5000 до 7000, от 8000 до 10000, от 11000) ', '');

//1th cicle
    if (amount >= 5000 && amount <= 7000) {
        var percent = +prompt('Введите процентную ставку (%) (25, 27, 30)', '');

            if (percent == 25 || percent == 27 || percent == 30) {
                var term = +prompt('Введите срок депозита (лет) 7, 9, 12)', ''); 

                    if (term == 7 || term == 9 || term == 12) {
                        console.log('Ваш тарифный план составляет ' + amount + '$ ' + 'под ' + percent + ' на ' + term + ' лет' + ' и ваш заработок составит ' + Math.round(+amount * (+percent/100) * +term) + '$');
                    }  else if (amount == null) {
                        console.log('Увы, вы ничего не выбрали!');
                    } else console.log('Введите корректную информацию!');
            } else if (amount == null) {
                console.log('Увы, вы ничего не выбрали!');
            } else console.log('Введите корректную информацию!');
} 
//1th cicle

//for 8 - 10k
else if (amount >= 8000 && amount <= 10000) {
        var percent = +prompt('Введите процентную ставку (%) (10, 12, 15)', '');

    if (percent == 10 || percent == 12 || percent == 15) {
        var term = +prompt('Введите срок депозита (лет) 3, 5, 6)', '');

        if (term == 3 || term == 5 || term == 6) {
            console.log('Ваш тарифный план составляет ' + amount + '$ ' + 'под ' + percent + ' на ' + term + ' лет' + ' и ваш заработок составит ' + Math.round(+amount * (+percent / 100) * +term) + '$');
        } else if (amount == null) {
            console.log('Увы, вы ничего не выбрали!');
        } else console.log('Введите корректную информацию!');
    } else if (amount == null) {
        console.log('Увы, вы ничего не выбрали!');
    } else console.log('Введите корректную информацию!');
//for more than 11k
    } else if (amount >= 11000) {
        var percent = +prompt('Введите процентную ставку (%) (3, 5, 7)', '');

        if (percent == 3 || percent == 5 || percent == 7) {
            var term = +prompt('Введите срок депозита (лет) 12, 15, 17)', '');

            if (term == 12 || term == 15 || term == 17) {
                console.log('Ваш тарифный план составляет ' + amount + '$ ' + 'под ' + percent + ' на ' + term + ' лет' + ' и ваш заработок составит ' + Math.round(amount * (percent / 100) * term) + '$');
            } else if (amount == null) {
                console.log('Увы, вы ничего не выбрали!');
            } else console.log('Введите корректную информацию!');
        } else if (amount == null) {
            console.log('Увы, вы ничего не выбрали!');
        } else console.log('Введите корректную информацию!');
    } else console.log ('Выьберите верный тарифный план, сударь!');