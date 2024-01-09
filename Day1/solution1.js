

const fs = require('fs');

const lines = fs.readFileSync('./input1.txt', 'utf8').trim().split('\n');

var numbersMap = {
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six': 6, 
    'seven': 7,
    'eight': 8,
    'nine': 9
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

const replaceStringByNumber = (input) => {
    let output = '';
    Object.keys(numbersMap).forEach(key => {
        if(input.startsWith(key)) {
            output = numbersMap[key];   
        }
    });

    return output.toString();
}

const partTwo = () => {
    let firstNumber = '';
    let lastNumber = '';
    let sum = 0; 
    lines.forEach(line => {
        let numberArray = new Array(); 
        let charArray = line.split('');
        let startIndex = 0;
        charArray.forEach(char => {
            //delete the previous letter
            let slicedLine = line.slice(charArray.indexOf(char,startIndex));

            //check if the char is a number
            if(/\d/.test(char)) {
                numberArray.push(char);
            }
            //char is not a number (it's a letter)
            else{
                let number = replaceStringByNumber(slicedLine);
                numberArray.push(number);
            }
            startIndex++;
        });
        //remove empty elements
        let filteredArray = numberArray.filter(Boolean);

        firstNumber = filteredArray[0];
        lastNumber = filteredArray[filteredArray.length - 1];

        sum += Number(firstNumber + lastNumber);  
    });
    console.log(sum);
}

//partOne();
partTwo();

