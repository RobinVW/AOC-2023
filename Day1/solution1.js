

const fs = require('fs');

const lines = fs.readFileSync('./example2.txt', 'utf8').trim().split('\n');

var numbersMap = {
    'one' : '1',
    'two' : '2',
    'three' : '3',
    'four' : '4',
    'five' : '5',
    'six': '6', 
    'seven': '7',
    'eight': '8',
    'nine': '9'
}

const partOne = () => {
    let firstNumber = '';
    let lastNumber = '';
    let sum = 0;
    lines.forEach(line => {
        let numbers = line.match(/\d/g);
        firstNumber = numbers[0];
        lastNumber = numbers[numbers.length - 1];
        sum += Number(firstNumber + lastNumber);
    });

    console.log(sum);
}

const replaceWordsByNumbers = (input) => {
    let output = input;
    Object.keys(numbersMap).forEach(key => {
    output = output.replace(key, numbersMap[key]);
  });
  return output;
}

const partTwo = () => {
    let firstNumber = '';
    let lastNumber = '';
    let sum = 0;
    lines.forEach(line => {
        let numberLine = replaceWordsByNumbers(line);
        console.log(numberLine);
        let numbers = numberLine.match(/\d/g);
        firstNumber = numbers[0];
        lastNumber = numbers[numbers.length - 1];
        sum += Number(firstNumber + lastNumber);
    });

    console.log(sum);
}

//partOne();
partTwo();

