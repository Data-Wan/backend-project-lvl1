import readlineSync from 'readline-sync';

const startGameMessage = 'Welcome to the Brain Games!\n';
const askNameMessage = 'May I have your name? ';
const greetingMessage = 'Hello, %s!';

const askQuestionMessage = 'Question: ';
const answerMessage = 'Your answer: ';
const winMessage = 'Congratulations, %s!';

const rightAnswerMessage = 'Correct!\n';
const wrongAnswerMessage = "'%s' is wrong answer ;(. Correct answer was '%s'.\n"
  + "Let's try again, %s!";

// Utils, no export
function printLoseMessage(name, rightAnswer, userAnswer) {
  console.log(wrongAnswerMessage, userAnswer, rightAnswer, name);
}

function printWinMessage(name) {
  console.log(winMessage, name);
}

// Export functions
export function defaultGreetingAndReturnName() {
  console.log(startGameMessage);
  const name = readlineSync.question(askNameMessage);
  console.log(greetingMessage, name);

  return name;
}

export function startSpecificGame(rules, predicate, numberOfRounds) {
  const name = defaultGreetingAndReturnName();
  let winCount = 0;

  do {
    const [isSuccess, rightAnswer, userAnswer] = predicate();
    if (isSuccess) {
      winCount += 1;
      console.log(rightAnswerMessage);
    } else {
      printLoseMessage(name, rightAnswer, userAnswer);
      return;
    }
  } while (winCount < numberOfRounds);

  printWinMessage(name);
}

export function getAnswer(questionVar) {
  return readlineSync.question(
    `${askQuestionMessage}${questionVar}\n${answerMessage}`,
  );
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
