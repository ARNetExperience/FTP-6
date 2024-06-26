//Question bank
var questionBank= [
    {
        question : 'What does FTP stand for?',
        option : ['File Transfer Protocol','File Transport Protocol','File Tracking Protocol','File Type Protocol'],
        answer : 'File Transfer Protocol'
    },
    {
        question : 'Which port does FTP typically use?',
        option : ['20','21','22','24'],
        answer : '21'
    },
    {
        question : 'Which of the following is not a common FTP client software',
        option : ['FileZilla','WinSCP','PuTTY','Google Chrome'],
        answer : 'Google Chrome'
    },
    {
        question : 'Which OSI layer does FTP primarily operate on?',
        option : ['Application layer','Transport layer','Network layer','Data link layer'],
        answer : 'Application layer'
    },
    {
        question : 'What is the primary purpose of FTP',
        option : ['Securely transfer files over a network','Provide remote access to files','Share files between users on the same computer','None of Above'],
        answer : 'Provide remote access to files'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  //function to display questions
  function displayQuestion(){
      for(var a=0;a<span.length;a++){
          span[a].style.background='none';
      }
      question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
      var shuffledOptions = shuffleArray([...questionBank[i].option]); // Shuffle the options
      option0.innerHTML= shuffledOptions[0];
      option1.innerHTML= shuffledOptions[1];
      option2.innerHTML= shuffledOptions[2];
      option3.innerHTML= shuffledOptions[3];
      stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
  }

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();