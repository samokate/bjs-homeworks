'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortgageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let percentPerMonth;  // если задаю const , в консоли ошибка Uncaught SyntaxError: Missing initializer in const declaration
    let Contribution;
    let Amount;
    
    if (parseFloat(percent)) {
        percentPerMonth = parseFloat(percent / 100 / 12);
    } else {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`; 
    }

    if (parseInt(contribution) || contribution == 0) {
        Contribution = (parseInt(contribution)) ? parseInt(contribution) : 0;
    } else {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    }

    if (parseInt(amount)) {
        Amount = parseInt(amount);
    } else {
        return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    }


    let today = new Date(); //задаём сегодняшнюю дату
    let dateX = new Date(date);
    let months = parseInt((dateX - today) / (1000 * 3600 * 24 * 30));

    let payToBank = Amount - Contribution;
    let paymentPerMonth = payToBank * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** months) - 1));

    let totalAmount = paymentPerMonth * months;


    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);

}

// tests - консоль выводит неадекватные результаты. Но, при вводе нижеуказанных данных в поля, результаты верные. Почему?

console.log(calculateTotalMortgage('10',0,'50000',12))         // expected => 52749.53   
console.log(calculateTotalMortgage(10,1000,50000,12))        // expected => 51694.54
console.log(calculateTotalMortgage(10,0,20000,24))       // expected => 22149.56
console.log(calculateTotalMortgage(10,1000,20000,24))       // expected => 21042.09
console.log(calculateTotalMortgage(10,20000,20000,24))        // expected => 0
console.log(calculateTotalMortgage(10,0,10000,36))       // expected => 11616.19
console.log(calculateTotalMortgage(15,0,10000,36))       // expected => 12479.52


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {

    if (name === " " || name === 'null' || name === 'undefined' || name === '""' || name === "") {  // почему не работает этот способ?
        name = 'Аноним'; 
    }

   /* if (typeof name !== 'string') {  // почему не работает typeof?
        name = "Аноним";
    } */
    
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}

