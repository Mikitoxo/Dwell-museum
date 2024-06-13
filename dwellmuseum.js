function validateForm() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let dov = document.getElementById("dov").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let snackOptions = document.getElementById("Snack options").value; // Corrected variable name

  if (firstName === "" || lastName === "" || dob === "" || email === "" || !gender || snackOptions === "") {
      alert("Please fill in all fields.");
      return false;
  }

  return true;
}


//JavaScript quiz
const quizData = [
{
  question: "When was Frida Kahlo born?",
  a: "1910",
  b: "1906",
  c: "1900",
  d: "1907",
  correct: "d",
},
{
  question: "What is Frida Kahlo's zodiac sign?",
  a: "Aries",
  b: "Cancer",
  c: "Leo",
  d: "Gemini",
  correct: "b",
},
{
  question: "What Mexican peso bill has Frida's face on it?",
  a: "500 Mexican peso bill",
  b: "300 Mexican peso bill",
  c: "200 Mexican peso bill",
  d: "100 Mexican peso bill",
  correct: "a",
},
{
  question: "How many self-portraits did Frida Kahlo paint?", 
  a: "143",
  b: "55",
  c: "94",
  d: "none of the above",
  correct: "b",
},
{
  question: "What was Frida Kahlo's sexuality?",
  a: "straight",
  b: "bisexual",
  c: "trans",
  d: "not known",
  correct: "b",
},
];

const quizContainer = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
      answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id;
      }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++;
     }
     currentQuiz++;
     if(currentQuiz < quizData.length) {
         loadQuiz();
     } else {
         quizContainer.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>
         <button onclick="location.reload()">Reload</button>
         `;
     }
  }
});

// JavaScript to handle the click event of the Contacts button
document.addEventListener("DOMContentLoaded", function() {
var contactsBtn = document.getElementById("contactsBtn");
contactsBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the link
    // Redirect to a separate page with contact information
    window.location.href = "dwellmuseumcontacts.html";
});
});

// JavaScript to handle the click event of the location button
document.addEventListener("DOMContentLoaded", function() {
var locationBtn = document.getElementById("locationBtn");
locationBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the link
    // Redirect to the embedded map page
    window.location.href = "dwellmuseumlocation.html";
});
});

// JavaScript to handle the click event of the event button
document.addEventListener("DOMContentLoaded", function() {
var eventsBtn = document.getElementById("eventsBtn");
eventsBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the link
    // Redirect to the events page
    window.location.href = "dwellmuseumevents.html";
});
});

