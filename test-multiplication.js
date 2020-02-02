const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function startNewTest() {
    let score = 0;
    let question = 0;

    while (question < 10) {
        question++;
        let resp = await askAnotherQuestion(question);
        if (resp) 
            score++;
    }
    
    console.log(`Your score is: ${score}/${question}\n`);
    rl.question("Play again? (y/n)\n", res => {
        if (res === 'y') {
            startNewTest();
        } else {
            rl.close();
        }
    })
}

function askAnotherQuestion(question) {
    return new Promise(resolve => {
        let num1 = Math.floor(Math.random() * 10 + 1);
        let num2 = Math.floor(Math.random() * 10 + 1);
        let result = num1 * num2;
        
        rl.question(`${question}. What is ${num1} * ${num2}?\n`, (input) => {
            let answer = Number(input.trim());
            if (answer === result) {
                console.log("Correct!\n");
                resolve(true);
            } else {
                console.log("Incorrect!\n");
                resolve(false);
            }
        });
    });
}

startNewTest();