
var amount, percent, term;

function getProfit(amount, percent, profit) {
    return (+amount * (+percent / 100) * +term);
    
}


//while (amount !=+null) {
var amount = +prompt('Введите сумму вклада $(от 5000 до 7000, от 8000 до 10000, от 11000) ', '');

//1th cicle
if (amount >= 5000 && amount <= 7000) {
    var percent = +prompt('Введите процентную ставку (%) (25, 27, 30)', '');

    if (percent == 25 || percent == 27 || percent == 30) {
        var term = +prompt('Введите срок депозита (лет) 7, 9, 12)', '');

        if (term == 7 || term == 9 || term == 12) {
            console.log('Ваш тарифный план составляет ' + amount + '$ ' + 'под ' + percent + ' на ' + term + ' лет' + ' и ваш заработок составит ' + Math.round(getProfit(amount, percent, term)) + '$');
        } else if (amount == null) {
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
            console.log('Ваш тарифный план составляет ' + amount + '$ ' + 'под ' + percent + ' на ' + term + ' лет' + ' и ваш заработок составит ' + Math.round(getProfit(amount, percent, term)) + '$');
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
            console.log('Ваш тарифный план составляет ' + amount + '$ ' + 'под ' + percent + ' на ' + term + ' лет' + ' и ваш заработок составит ' + Math.round(getProfit(amount, percent, term)) + '$');
        } else if (amount == null) {
            console.log('Увы, вы ничего не выбрали!');
        } else console.log('Введите корректную информацию!');
    } else if (amount == null) {
        console.log('Увы, вы ничего не выбрали!');
    } else console.log('Введите корректную информацию!');
} else console.log('Выьберите верный тарифный план, сударь!');
//}