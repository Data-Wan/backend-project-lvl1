import { getAnswer, startSpecificGame } from '../index.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function gcd(a, b) {
  let r = 0;
  let number1 = a;
  let number2 = b;
  if (number1 < number2) {
    [number1, number2] = [number2, number1];
  }
  while (number1 !== 0) {
    r = number2 % number1;
    number2 = number1;
    number1 = r;
  }
  return number2;
}

function gamePredicateFunction() {
  const max = 100;
  const number1 = getRandomInt(max);
  const number2 = getRandomInt(max);

  const userAnswer = getAnswer(`${number1} ${number2}`);
  const rightAnswer = gcd(number1, number2);

  return [
    rightAnswer === Number.parseInt(userAnswer, 10),
    rightAnswer,
    userAnswer,
  ];
}

const gameRules = 'Find the greatest common divisor of given numbers.\n';
const numberOfRounds = 3;

startSpecificGame(gameRules, gamePredicateFunction, numberOfRounds);
