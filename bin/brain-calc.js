import { getAnswer, startSpecificGame } from "../index.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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

  const userAnswer = Number.parseInt(
    getAnswer(operationText(number1, number2)),
    10
  );
  const rightAnswer = operationFunc(number1, number2);

  return [rightAnswer === userAnswer, rightAnswer, userAnswer];
}

const gameRules = "What is the result of the expression?\n";
const numberOfRounds = 3;

startSpecificGame(gameRules, gamePredicateFunction, numberOfRounds);
