'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    const obj = {
        percent, 
        contribution, 
        amount,
        date   // в браузере выводит неправильное значение date
       }
         
   for (let prop in obj) {  
    if (isNaN(Number(obj[prop]))) {
       return `${prop} содержит неправильное значение ${obj[prop]}` 
     }
    }

    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);


    let today = new Date(); //задаём сегодняшнюю дату
    let dateX = new Date(date);
    let months = dateX.getMonth() - today.getMonth() + (12 * ( dateX.getFullYear() - today.getFullYear() ));

    let payToBank = amount - contribution;
    let percentPerMonth = percent / 100 / 12;
    let paymentPerMonth = payToBank * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** date) - 1));

    let totalAmount = paymentPerMonth * months;

    return totalAmount.toFixed(2);

}

// tests

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

    /* if (name === " " || name === 'null' || name === 'undefined' || name === '""') {  // почему не работает этот способ?
        name = 'Аноним'; 
    } */

   if (typeof name !== 'string') {  // почему не работает typeof?
        name = "Аноним";
    }
    
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}

