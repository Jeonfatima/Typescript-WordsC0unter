#! /usr/bin/env node
// this above line is called shebang , helps to publish in npm
import inquirer from 'inquirer'

const answer : {
    sentence : string
} = await inquirer.prompt(
    [
        {
           name : 'sentence',
           type:'input',
           message:'Enter your Sentence to count the words: ' 
        }
    ]
)
const words = answer.sentence.trim().split(" ")

console.log(words)
console.log(`Your sentence word count is: ${words.length}`);