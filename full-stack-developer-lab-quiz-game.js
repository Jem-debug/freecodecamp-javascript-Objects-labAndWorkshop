const questions = [
  {
    category: "Gen Info",
    question: "Who is the current president of the Philippines 2025?",
    choices: ["Sara Duterte", "Leni Robredo", "Bongbong Marcos"],
    answer: "Bongbong Marcos"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Earth", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital city of France?",
    choices: ["Paris", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language"],
    answer: "HyperText Markup Language"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  }
];

const getRandomQuestion = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const getRandomComputerChoice = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const getResults = (questionObj, computerChoice) => {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
};

// test
const selectedQuestion = getRandomQuestion(questions); 
console.log("Category:", selectedQuestion.category);
console.log("Question:", selectedQuestion.question);
console.log("Choices:", selectedQuestion.choices.join(", "));

const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
console.log("Computer's choice:", computerChoice);

console.log(getResults(selectedQuestion, computerChoice));
