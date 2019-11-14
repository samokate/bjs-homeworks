'use strict';

console.log('Задача №1');

function getSolutions(a, b, c) {
    const D = (b ** 2) - (4 * a * c);
    let result = {};

 if (D < 0) {
     result.D = [D];
 } else if (D === 0) {
     const x1 = -b / (2 * a);
     result.roots = [x1];
     result.D = D;
 } else {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    result.roots = [x1, x2];
    result.D = D;
 }

 return result;

}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
    console.log(`Значение дискриминанта: ${result.D}.`);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней.');
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log('Задача №2');

function getAverageScore(data) {

    function averageOfSubject(subject) {
        let sumOfMarks = 0;
        for (let i = 0; i < subject.length; i++) {
            sumOfMarks += subject[i];
        }
        return sumOfMarks / subject.length;
    }

    let result = {}; 
    let totalSumOfMarks = 0;

    for (let subject in data) {
        let averageMark = averageOfSubject(data[subject]);
        result[subject] = averageMark;
        totalSumOfMarks += averageMark;
    }

    result.average = totalSumOfMarks / Object.keys(data).length;
    return result;

}


console.log (getAverageScore({
    algebra: [2, 3, 5], 
    geometry: [2, 4, 5], 
    russian: [2, 5, 7], 
    physics: [4, 5, 6], 
    music: [6, 5, 2], 
    english: [4, 5, 1], 
    poetry: [1, 2, 3], 
    chemistry: [2, 5, 6], 
    french: [2, 4, 7] 
}));

console.log('Задача №3');

function getPersonData(secretData) {
    let name = getPirateName(secretData);
    let result = {};

    if (name[0] === 0) {
        result.firstName = 'Родриго';
    } else {
        result.firstName = 'Эмильо';
    }

    if (name[1] === 0) {
        result.lastName = 'Родриго';
    } else {
        result.lastName = 'Эмильо';
    }

    return result;

}

function getPirateName(secretData) {
    let pirate = [];
    for (let key in secretData) {
        pirate.push(secretData[key]);
    }
    return pirate;
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
  }));
  
  console.log(getPersonData({
    aaa: 1,
    bbb: 0
  }));
  
  console.log(getPersonData({
    aaa: 0,
    bbb: 1
  }));
  
  console.log(getPersonData({
    aaa: 1,
    bbb: 1
  }));