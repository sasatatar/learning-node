const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let result = num1 * num2;

console.log(`What is ${num1} * ${num2}?`);

rl.on('line', (input) => {
    let answer = Number(input.trim());
    if (answer === result) {
       console.log("Correct!\n");
    } else {
        console.log("Incorrect!\n");
    }
    // new task
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    result = num1 * num2;
    console.log(`What is ${num1} * ${num2}?`);
});