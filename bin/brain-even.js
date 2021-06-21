#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const startGameMessage = 'Welcome to the Brain Games!\n';
const askNameMessage = 'May I have your name? ';
const greetingMessage = 'Hello, %s!';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const rightAnswerMessage = 'Correct!\n';
const wrongAnswerMessage = "'%s' is wrong answer ;(. Correct answer was '%s'.\n"
    + "Let's try again, %s!";
const askQuestionMessage = 'Question: ';
const answerMessage = 'Your answer: ';
const winMessage = 'Congratulations, %s!';

console.log(startGameMessage);
const name = readlineSync.question(askNameMessage);
console.log(greetingMessage, name);
console.log(gameRules);

let rightAnswerCount = 0;
const answerCheck = { 0: 'yes', 1: 'no' };

do {
  const number = getRandomInt(25);
  const answer = readlineSync.question(`${askQuestionMessage + number}\n${answerMessage}`);

  const rightAnswer = answerCheck[number % 2];

  if (rightAnswer === answer) {
    console.log(rightAnswerMessage);
    rightAnswerCount += 1;
  } else {
    console.log(wrongAnswerMessage, answer, rightAnswer, name);
    break;
  }
} while (rightAnswerCount < 3);

if (rightAnswerCount === 3) {
  console.log(winMessage, name);
}
