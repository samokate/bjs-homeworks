function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    let dateOfBirth = new Date(birthday);

    let diff = now - dateOfBirth;

    let age = diff / (86400000 * 365); // умножаем миллисекунды в сутках на количество дней в году

    if (age >= 18) {
        return true;
    } else {
        return false;
    }

}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {
        return animal.sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sumOfMarks = 0; //сумма оценок

    for (let mark of marks) {
        sumOfMarks += new Number(mark);
    } 

    let average = sumOfMarks / marks.length;

    const averageRound = Math.round(average);

    return averageRound;

}