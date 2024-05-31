const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American Woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [ "1. Who was the first American woman in space? ",
 "2. True or False: 5 kilometer == 5000 meters? ",
 "3. (5 + 3) / 2 * 10 = ? ",
 "4. Given the array [8, 'Orbit', 'Trajectory', 45, what entry is at index 2? ", 
 "5. what is the minimum crew size for the ISS? "
 ];
let correctAnswers = ["Sally Ride",
"true",
"40",
"Trajectory",
"3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please, enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for(let i = 0; i < questions.length; i++){
  candidateAnswer = input.question(questions[i]);
  candidateAnswers.push(candidateAnswer);

}
console.log(candidateAnswers);

return candidateAnswers;
}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for(let i = 0; i < candidateAnswers.length; i++){
  console.log(`correctAnswer: ${correctAnswers[i]}`);
  console.log(`Your answer: ${candidateAnswers[i]}`);
}
let grade = 0;
let score = 0;

for(let i = 0; i < correctAnswers.length; i++){
  // console.log(candidateAnswers[i].toLowerCase(),'????');
  // console.log(correctAnswers[i].toLowerCase(),'????');
  if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    score++;
  }
}
grade = (score/questions.length*100)
if(grade >= 80){
  console.log(`Congratulations, you passed with a ${grade}!`);
}else{
  console.log(`Sorry, you failed the quiz with a ${grade}.`);
}
  return grade;
}

function runProgram() {
  askForName();
  
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};