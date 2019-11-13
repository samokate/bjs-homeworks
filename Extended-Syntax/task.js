"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    const d = (b ** 2) - (4 * a * c);
    let x = [];

    if (d > 0) {
      x.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)); 
    } else if (d === 0) {
      x.push(-b / (2 * a));
    } 

    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let marksArr = [];

    if (marks.length > 5) {
        console.log('Больше пяти оценок. Средний балл выведен на базе первых пяти оценок.');
        marksArr = marks.slice(0, 5);
    } else {
        marksArr = marks;
    }
    
    let marksSum = 0;

    for (let mark of marksArr) {
            marksSum += mark;
    }

    return marksSum / marksArr.length;
}


function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let today = new Date();
    let age = today.getFullYear() - dateOfBirthday.getFullYear();
    let result;

    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}