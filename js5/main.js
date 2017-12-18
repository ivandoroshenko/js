
//прикрепляем скрипт к загрузке window
window.addEventListener('DOMContentLoaded', init) //вместо инит может быть все что угодно
function init (){

function nav ()

/* // var s1 = document.querySelector('fist'),
//      s2 = document.querySelector('second'),
//      s3 = document.querySelector('third');

//      s2.addEventListener('click', function()){
//          this.style.background = 'yellow';
//      }

var btn = document.querySelector('link');

btn.addEventLIstener('click', function (event){
    event.preventDefault();
    console.log(event);


var _href = this.getAttribute('href').slice(1);
var menu = document.gerElementById(_href);

menu.classlist.toggle('menu--active'); */
});




    // document.querySelector('#btn');
    // var msg = document.QuerySelector('.message');

    // btn.addEventListener('click', function(event){
    //         // console.log('event');
    //         this.style.color = 'red';
    //         event.target.style.color = 'red'; //xерез event можно использовать разные методы, т.к. к этому параметру есть доступ из объекта btn
        //2.1 способ
        // msg.hidden = !msg.hidden;

        //2.2 способ
        // msg.hidden = (msg.hidden)? false : true;

        //2.3 способ
        // if (msg.hidden){
        // msg.hidden = false;
        // } else {
        //     msg.hidden = true;
        // } //через if
    });
    //1 способ
    // btn.addEventListener('click', function () {
    //     msg.classList.toggle('message--show');
    // }); //Первый способ черзе классы
}
//после точки навешиваем метод слушателя. Принимает 2 параметра: 1. в виде строки принимается тип события
//в нашем случае событие ждет пока загрузится весь layout