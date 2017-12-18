window.addEventListener('DOMContentLoaded', init);


function init() {

    var navList = document.querySelector('.nav__list');
    var dropDown = document.querySelector('.dropdown');
      
    function isDropdown(navList, dropDown) {
        var navChildren = navList.children;
                 
        for (var i = 0; i < navChildren.length; i++) {
            var el = navChildren[i].children;
            dropDown.style.display = "none";

            if (el.length > 1) {
                var arrow = document.createElement('i'); //создали элемент иконку (стрелку) присвоили значение в переменную arrow
                arrow.className = 'material-icons'; //задали стрелке класс material-icons
                arrow.textContent = 'arrow_drop_down'; //вписали текстовый узел
                navChildren[i].appendChild(arrow); //добавить в конец очередному элементу списка (навигации) стрелку, стрелка добавилась в конец вложенного списка но отпозиционирована абсолютом по родителю
            }
        }
       
    }

    isDropdown(navList, 'dropdown');
    
}

// function init() {

//     var btn = document.querySelector('.popup-btn');

//     function popup(btn) {
//         var modalWindow = null;
//         var close = null;

//         btn.addEventListener('click', function () {
//             var dataAttr = btn.dataset.popup;
//             modalShow(dataAttr);
//         });

//         function modalShow(modal) {
//             modalWindow = document.querySelector(modal);
//             close = document.querySelector(`${modal} .modal__close`);

//             document.body.classList.add('body-fixed');
//             modalWindow.classList.add('modal--show');

//             modalWindow.addEventListener('click', modalClose);
//             modalWindow.addEventListener('keyDown', modalClose);
//         }

//         function modalClose(event) {
//             console.log(event.target.parentNode);
//             if (event.target.innerText === 'close' || event.target === event.currentTarget) {

//                 document.body.classList.remove('body-fixed');
//                 modalWindow.classList.remove('modal--show');

//             }

//         }
//         addEventListener("keydown", function (event) {
//             if (event.keyCode == 27)
//                 document.body.classList.remove('body-fixed');
//             modalWindow.classList.remove('modal--show');
//         });
//     }

//     popup(btn);

// }