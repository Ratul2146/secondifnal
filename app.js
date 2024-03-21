const quesions = [
    {
        quesion: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Arctic", correct: false },
            { text: "Australia", correct: false },
        ]

    },
    {
        quesion: "Which is the smallest brain?",
        answers: [
            { text: "tonif", correct: false },
            { text: "safin", correct: true },
            { text: "ratul", correct: false },
            { text: "nigga", correct: false },
        ]

    },
    {
        quesion: "jader Nokh boro tader ki bole?",
        answers: [
            { text: "foinni", correct: false },
            { text: "sundori", correct: false },
            { text: "churel", correct: true },
            { text: "sakchunni", correct: false },
        ]

    },
    {
        quesion: "Which is the richest person?",
        answers: [
            { text: "ratul", correct: false },
            { text: "tasin", correct: false },
            { text: "nazmul", correct: false },
            { text: "emon", correct: true },
        ]

    },
]

const answerElement = document.querySelector('.answer-buttons');
const quesionsElement = document.getElementById('quesion');
const next = document.querySelector('.next');
console.log(answerElement)

let currentQuesionIndex = 0;
let score = 0

function startQuiz() {
    currentQuesionIndex = 0;
    score = 0
    next.innerHTML = "Next"
    showQuesion()
}


function showQuesion() {
    resetState();
    let currentQuesions = quesions[currentQuesionIndex].quesion;
    let currentAns = quesions[currentQuesionIndex];

    let quesionNo = currentQuesionIndex + 1;
    quesionsElement.innerHTML = quesionNo + '.' + currentQuesions;
    currentAns.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        answerElement.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", (e) => {
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === 'true';
            if (isCorrect) {
                selectedBtn.classList.add('correct')
                score++
            } else {
                selectedBtn.classList.add("incorrect")
            }
            Array.from(answerElement.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct")
                }
                button.disabled = true;

            });
            next.style.display = "block"
        })
    });
}

next.addEventListener("click", () => {
    if (currentQuesionIndex < quesions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

function handleNextButton(){
  currentQuesionIndex++
  if(currentQuesionIndex < quesions.length){
    showQuesion();
  }else{
    showScore();
  }
}

function showScore(){
    quesionsElement.innerHTML = `you scored ${score}`;
    next.innerHTML = "play again";
    next.style.display = "block";
}

function resetState(){
    next.style.display = 'none';
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}


startQuiz()