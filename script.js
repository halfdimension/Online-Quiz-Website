const quizDB = [
    {
      question: "Who is the Red Samurai Ranger in Power Rangers Samurai?",
      a: "Jayden",
      b: "Kevin",
      c: "Mike",
      d: "Emily",
      ans: "ans1"
    },
    {
      question: "Which animal represents the Green Samurai Ranger in Power Rangers Samurai?",
      a: "Dragon",
      b: "Bear",
      c: "Turtle",
      d: "Lion",
      ans: "ans2"
    },
    {
      question: "What is the main antagonist group in Power Rangers Samurai?",
      a: "The Nighlok",
      b: "The Putty Patrollers",
      c: "The Quantrons",
      d: "The S.P.D. A-Squad",
      ans: "ans1"
    },
    {
      question: "In Power Rangers Dino Thunder, which of the following is the primary power source for the Rangers?",
      a: "Dino Gems",
      b: "Morph-X",
      c: "Mystic Force Wands",
      d: "SPD Morphers",
      ans: "ans1"
    },
    {
      question: "Who is the Red Dino Thunder Ranger in Power Rangers Dino Thunder?",
      a: "Conner",
      b: "Ethan",
      c: "Trent",
      d: "Kira",
      ans: "ans1"
    },
    {
      question: "What mystical realm do the Power Rangers Mystic Force draw their powers from?",
      a: "The Grid",
      b: "The Morphing Grid",
      c: "The Mystic Realm",
      d: "The Underworld",
      ans: "ans3"
    },
    {
      question: "Which character is both a mentor to the Mystic Force Rangers and the gatekeeper of the Mystic Realm?",
      a: "Udonna",
      b: "Daggeron",
      c: "Leanbow",
      d: "Phineas",
      ans: "ans1"
    },
    {
      question: "What is the primary mission of the Power Rangers SPD?",
      a: "Defend the Earth from alien threats",
      b: "Maintain intergalactic peace",
      c: "Explore the universe",
      d: "Hunt for hidden treasure",
      ans: "ans1"
    },
    {
      question: "Who is the leader of the Power Rangers SPD?",
      a: "Jack",
      b: "Z",
      c: "Sky",
      d: "Cruger",
      ans: "ans4"
    },
    {
      question: "What is the name of the mysterious criminal organization that the Power Rangers SPD fights against?",
      a: "The Space Pirates",
      b: "The Space Ninjas",
      c: "The Troobian Empire",
      d: "The Insectoids",
      ans: "ans3"
    }
    // Add more questions as needed
  ];

  const question = document.querySelector('.question');
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');
  const option3 = document.querySelector('#option3');
  const option4 = document.querySelector('#option4');
  const submit = document.querySelector('#submit');

  const answers = document.querySelectorAll('.answer');

  const showScore = document.querySelector('#showScore');

  let questionCount = 0;
  let score=0;

  const loadQuestion = ()=> {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
  }

  loadQuestion();
  
  const getCheckAnswer = () => {
    let answer;
    
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
  };

  const deselectAll = ()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked= false);
  }

  submit.addEventListener('click', ()=> {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
        questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML= `
            <h3> You Scored ${score}/${quizDB.length} 👍</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }

  });