window.addEventListener('DOMContentLoaded', init);

function init () {

    var tabsBtn = {
        controls: document.querySelector('.controls__list'),
        activeClass: 'controls__item--active'
    };

    var content = {
        content: document.querySelector('.content'),
        activeClass: 'content__item--active'
    }

    function tabs (controlsObj, contentobj){

        var anchor = '';

        controlsObj.controls.addEventListener('click', function (event) {
            if (event.target.tagName.toLowerCase() === 'a') {
                anchor = event.target.getAttribute('href');

                if (event.target.parentNode.classList.contains(controlsObj.activeClass)){
                    return;
                }          

                var beforeActivate = document.querySelector('.' + controlsObj.activeClass);
                    beforeActivate.classList.remove(controlsObj.activeClass);
                    event.target.parentNode.classList.add(controlsObj.activeClass);

                    
                    switchTab(anchor);
            }
        });

    }
    tabs(tabsBtn, content);
}