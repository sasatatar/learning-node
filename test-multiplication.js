const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0;
let question = 0;

function askAnotherQuestion() {
    question += 1;
    let num1 = Math.floor(Math.random() * 10 + 1);
    let num2 = Math.floor(Math.random() * 10 + 1);
    let result = num1 * num2;
    
    rl.question(`${question}. What is ${num1} * ${num2}?\n`, (input) => {
        let answer = Number(input.trim());
        if (answer === result) {
           console.log("Correct!\n");
           score++;
        } else {
            console.log("Incorrect!\n");
        }
        if (question < 10)
            askAnotherQuestion();
        else {
            console.log(`Your score is: ${score}/${question}\n`);
            rl.question("Play again? (y/n)\n", res => {
                if (res === 'y') {
                    score = 0;
                    question = 0;
                    console.log('\n');
                    askAnotherQuestion();
                } else {
                    rl.close();
                }
            })
        }
    });
}

askAnotherQuestion();