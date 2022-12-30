import inquirer from 'inquirer';

const answers: { sentence: string } = await inquirer.prompt([
    {
        type: 'input',
        name: 'sentence',
        message: 'Enter Sentence :'
    }
])

const words = answers.sentence.trim().split(' ');

console.log(`Your sentence is ${words.length}`);