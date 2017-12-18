window.addEventListener('DOMContentLoaded', init);



function init() {

    var btn = document.querySelector('.popup-btn');

    function popup(btn) {
        var modalWindow = null;
        var close = null;

        btn.addEventListener('click', function () {
            var dataAttr = btn.dataset.popup;
            modalShow(dataAttr);
        });

        function modalShow(modal) {
            modalWindow = document.querySelector(modal);
            close = document.querySelector(`${modal} .modal__close`);

            document.body.classList.add('body-fixed');
            modalWindow.classList.add('modal--show');

            modalWindow.addEventListener('click', modalClose);
            document.addEventListener('keydown', modalClose);
        }

        function modalClose(event) {
            console.log(event.target.parentNode);
            if (event.target.parentNode.nodeName === 'BUTTON' || event.target.nodeName === 'BUTTON' ||
                event.target === event.currentTarget || event.keyCode === 27) {
                document.body.classList.remove('body-fixed');
                modalWindow.classList.remove('modal--show');
            
            }
            
        }
        // function modalClose(event) {
        //     console.log(event);
        //     if (event.keyCode == 27)
        //         document.body.classList.remove('body-fixed');
        //         modalWindow.classList.remove('modal--show');  
        // }
    }

    popup(btn);

}

