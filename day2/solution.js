const { log } = require('console');
const fs = require('fs');
const { it } = require('node:test');

const lines = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');

const content = {
    'blue': 14,
    'green': 13,
    'red': 12
}

const partOne = () => {
    const gameMap = new Map();
    let sum = 0;

    lines.forEach(line => {
        let splitArray = line.split(':')
        gameMap.set(Number(splitArray[0].substring(5))
                   ,splitArray[1].trim());
    });

    gameMap.forEach((value, key) => {
        let legitGame = true;
        value.split(';').forEach(gameSet => {
            gameSet.split(',').map(grab => {
                let grabAmount = grab.trim().split(' ');
                let color = grabAmount[1];
                let amount = Number(grabAmount[0]);
                for (const [maxColor, maxAmount] of Object.entries(content)) {
                    if (color === maxColor && legitGame){
                        if (amount > maxAmount) {
                            legitGame = false;
                        }
                  }
                }

            });
        });
        if (legitGame) {
            sum+=key;
        }
    });
    console.log(sum);
}


const partTwo = () => {
    const gameMap = new Map();
    let sumMinMultiply = 0;

    lines.forEach(line => {
        let splitArray = line.split(':')
        gameMap.set(Number(splitArray[0].substring(5))
                   ,splitArray[1].trim());
    });


    gameMap.forEach((value, key) => {
        const minGameSet = {
            'blue': 0,
            'green': 0,
            'red': 0
        }

        value.split(/,|;/).forEach(gameSet => {
            let grabAmount = gameSet.trim().split(' ');
            let color = grabAmount[1];
            let amount = Number(grabAmount[0]);

            for (const [minColor, minAmount] of Object.entries(minGameSet)) {
                if (color === minColor && amount > minAmount){
                        minGameSet[color] = amount;
                }  
            }
        });
        sumMinMultiply += minGameSet.blue * minGameSet.green * minGameSet.red;
    });
    console.log(sumMinMultiply);
}

partOne();
partTwo();
