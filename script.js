
  // Set the time for 10 minutes (in seconds)
  const totalTime = 10 * 60;

  // Get the timer element
  const timerDisplay = document.getElementById('timer');
  
  // Start the timer
  function startTimer() {
    let timeLeft = totalTime;
  
    const countdownInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
  
      // Add leading zero if seconds is less than 10
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      // Display the timer
      timerDisplay.textContent = `${minutes}:${seconds}`;
  
      // Check if the timer has reached 0
      if (timeLeft === 0) {
        clearInterval(countdownInterval);
        // Redirect to the quiz page after the timer completes
        window.location.href = 'quiz.html';
      } else {
        // Decrease the time left
        timeLeft--;
      }
    }, 1000);
  }
  
  // Start the timer when the page loads
  window.onload = startTimer;
  

const quizData = [
    {
        question : 'Javascript is an ___ language?',
        a: 'Object-Based',
        b: 'Procedural',
        c: 'Object-Oriented',
        d: 'None of the above',
        correct : 'c'
    },
    {
        question : 'What is the output of console.log(2+1)?',
        a: '21',
        b: 'undefined',
        c: 'error',
        d: '3',
        correct : 'd'
    },
    {
        question : 'Which of the following methods is used to access HTML elements using Javascript ?',
        a: 'Both B and C',
        b: 'getElementbyId()',
        c: 'getElementsByClassName()',
        d: 'None of the above',
        correct : 'a'
    },
    {
        question : 'What is the use of the <noscript> tag in Javascript?',
        a: 'Clear all the cookies and cache',
        b: 'The Contents are displayed by non JS-based browsers',
        c: 'Both B and C',
        d: 'None of the above',
        correct : 'b'
    },
    {
        question : 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
        a: 'Boolean',
        b: 'Undefined',
        c: 'Object',
        d: 'Integer',
        correct : 'c'
    },
    {
        question : 'What is the output of the code snippet "print(NaN === NaN);"?',
        a: 'true',
        b: 'false',
        c: 'undefined',
        d: 'error',
        correct : 'b'
    },
    {
        
        question : 'What is the output of the code snippet "var a = true + true + true * 3;"?',
        a: 'a=3',
        b: 'a=0',
        c: 'a=5',
        d: 'Error',
        correct : 'c'
    },
    {
        
        question : 'Which function is used to serialize an object into a JSON string in Javascript?',
        a: 'stringify()',
        b: 'parse()',
        c: 'convert()',
        d: 'None of the above',
        correct : 'a'
    },
    {
        
        question : 'Which of the following is not a Javascript framework ?',
        a: 'Node',
        b: 'Vue',
        c: 'React',
        d: 'Cassandra',
        correct : 'd'
    },
    {
        
        question : 'How to stop an interval timer in Javascript??',
        a: 'clearInterval',
        b: 'clearTimer',
        c: 'intervalOver',
        d: 'None of the above',
        correct : 'a'
    }
]

const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQues = 0;
let score =0;

loadQuiz();
function loadQuiz(){
    deSelected();
    const CurrentQuizData = quizData[currentQues];

    questionEl.innerText = CurrentQuizData.question;

    a_text.innerText = CurrentQuizData.a;
    b_text.innerText = CurrentQuizData.b;
    c_text.innerText = CurrentQuizData.c;
    d_text.innerText = CurrentQuizData.d;
    
}

function getSelected(){
    let answer = undefined;
    answerEl.forEach((answerel) => {
        if(answerel.checked){
            answer = answerel.id;
        }
    });
    return answer;
}

function deSelected(){
    answerEl.forEach((answerel) => {
        answerel.checked = false;
    });
}
submitBtn.addEventListener('click', ()=>{

    const answer = getSelected();
    if(answer){

        if(answer === quizData[currentQues].correct){
            score++;
        }
        currentQues++;
        if(currentQues < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2> You scored ${score}/${quizData.length} questions</h2>`;
        }
    }


});
