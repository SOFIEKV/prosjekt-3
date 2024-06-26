(function() {
    const myQuestions = [
        {
            question: "Hva står GDPR for?",
            answers: {
                a: "General Data Protection Regulation",
                b: "Global Data Protection Regulation",
                c: "General Data Privacy Regulation"
            },
            correctAnswer: "a"
        },
        {
            question: "Hvilken rettighet gir GDPR til individer?",
            answers: {
                a: "Retten til å dele andres data ",
                b: "Retten til å ignorere reklame",
                c: "Retten til å bli glemt"
            },
            correctAnswer: "c"
        },
        {
            question: "Hva må bedrifter gjøre før de kan behandle personopplysninger?",
            answers: {
                a: "Få samtykke fra brukeren",
                b: "Innhente data fra tredjeparter",
                c: "Kjøpe data fra offentlige databaser"
            },
            correctAnswer: "a"
        },
        {
            question: "Hva er formålet med GDPR?",
            answers: {
                a: "Å øke markedsføringsmulighetene for bedrifter i EU.",
                b: " Å beskytte personopplysninger og styrke personvernet til individer innen EU.",
                c: "Å redusere antall internettilkoblinger i EU."
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                
                <div class="answers"> ${answers.join('')} </div>`
        
            );
        });

        quizContainer.innerHTML = output.join('');
    }


    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("resultat");
    const submitButton = document.getElementById('skjekksvar');

    buildQuiz();
    submitButton.addEventListener('click', showResults);
    
    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");
        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} ut av ${myQuestions.length} riktig`;
    }

    
})();
