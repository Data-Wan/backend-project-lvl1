import { getAnswer, getRandomInt, startSpecificGame } from '../index.js';

function sum(a, b) {
  return a + b;
}

function sumText(a, b) {
  return `${a} + ${b}`;
}

function sub(a, b) {
  return a - b;
}

function subText(a, b) {
  return `${a} - ${b}`;
}

function multiply(a, b) {
  return a * b;
}

function multiplyText(a, b) {
  return `${a} * ${b}`;
}

function getRandomOperation() {
  const random = getRandomInt(2);

  switch (random) {
    default:
      return [sum, sumText];
    case 0:
      return [sum, sumText];

    case 1:
      return [sub, subText];
    case 2:
      return [multiply, multiplyText];
  }
}

function gamePredicateFunction() {
  const max = 10;
  const number1 = getRandomInt(max);
  const number2 = getRandomInt(max);

  const [operationFunc, operationText] = getRandomOperation();

  const userAnswer = getAnswer(operationText(number1, number2));
  const rightAnswer = operationFunc(number1, number2);

  return [
    rightAnswer === Number.parseInt(userAnswer, 10),
    rightAnswer,
    userAnswer,
  ];
}

const gameRules = 'What is the result of the expression?\n';
const numberOfRounds = 3;

startSpecificGame(gameRules, gamePredicateFunction, numberOfRounds);
