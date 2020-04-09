
// Create array quiz to store objects for each questions 
//so that they display in order with the corresponding 
// question, choices, answers, and wrong statement  
let quiz = [
    {
        question: 'It’s the night of your friend’s birthday dinner! You finished getting ready and are about to head out. What do you do to prepare?',
        choices: ['Walk to your bus/subway stop', 'Call ahead to confirm the restaurant is accessible.'],
        wrongAnswer: 'Walk to your bus/subway stop',
        wrongAnswerExplanation: 'lorem Ipsum',
        background: 'images/bg.jpg'
    },

    {
        question: 'What spaces in the restaurant do you confirm are accessible when you call the restaurant? (Select all that apply)',
        choices: ['Bathroom', 'Back door/Emergency exit', 'Entrance/Front Door', 'The dining space'],
        wrongAnswer: 'none',
        wrongAnswerExplanation: 'lorem Ipsum question 2',
        background: 'images/bg.jpg'
    },
    {

        question: 'Once you arrive at the restaurant and walk through it, you realize space is not actually wheelchair accessible. This isn’t the first time a restaurant owner hasn’t realized their space isn’t fully ADA compliant… what do you do now? (Select all that apply)',
        choices: ['Look for a different bar that may be accessible', 'Leave a yelp review', 'Report the restaurant', 'Everyone was excited to try this restaurant, so you try to make it work'],
        wrongAnswer: 'Everyone was excited to try this restaurant, so you try to make it work',
        wrongAnswerExplanation: 'lorem Ipsum',
        background: 'images/bg.jpg'

    },
    {
        question: 'After a quick Yelp search, and a phone call to the bar, you found a different restaurant that is accessible for your friend nearby. This restaurant bar has a back patio where you all want to eat, hang out in but the entrance has a 3-step staircase to get inside. What do you do?',
        choices: ['Ask your friend if they want to go to the patio and if they are comfortable with you helping them down the stairs', 'Make an executive decision and only hang out in the dining space'],
        wrongAnswer: 'Make an executive decision and only hang out in the dining space',
        wrongAnswerExplanation: 'lorem Ipsum',
        background: 'images/bg.jpg'
    },
    {
        question: 'You are ready to leave the restaurant, and your friend asks for help to find accessible transportation. What do you do? (Select all that apply)',
        choices: ['Call a regular Uber/Lyft', 'Check the MTA Info website for elevator service information', 'Use the Accessible Dispatch service (wheelchair accessible yellow and green taxi service)', 'Check different MTA train station routes to see what stations are accessible '],
        wrongAnswer: 'Call a regular Uber/Lyft',
        wrongAnswerExplanation: 'lorem Ipsum',
        background: 'images/bg.jpg'

    }
]

let currentQuizPosition = 0;
let selectedAnswers = [];
let quizQuestions = document.getElementById('quiz-question');
let quizChoices = document.getElementById('quiz-choices');
let container = document.getElementById('container')
let currQuizQuestion = quiz[currentQuizPosition];
let nextButton = document.getElementById('next')
let startQuiz = document.getElementById('startQuiz')
let statement = document.getElementById('statement')
let contentWrapper = document.getElementById('contentWrapper')

let runQuiz = () => {
    //Access the elements we need to render to on the screen
    // let quizQuestions = document.getElementById('quiz-question');
    // let quizChoices = document.getElementById('quiz-choices');
    let nextButton = document.getElementById('next');

    //Create elements for the quiz question and choices
    let questionOne = document.createElement('div');
    questionOne.className = 'questionText';
    questionOne.textContent = currQuizQuestion.question;
    (quizQuestions).appendChild(questionOne);

    for (let i = 0; i < currQuizQuestion.choices.length; i++) {
        let choiceText = document.createElement('div');
        choiceText.className = 'choiceText';
        choiceText.textContent = currQuizQuestion.choices[i];
        (quizChoices).appendChild(choiceText);

        //Add background image 
        contentWrapper.style.backgroundImage = `url('${currQuizQuestion.background}')`


        if (currQuizQuestion.rightAnswer === i || currQuizQuestion.rightAnswer === 'all') {
            choiceText.setAttribute('data-right-answer', 'right');
        }

        //add event listeners to choices
        choiceText.addEventListener('click', (event) => {
            let elem = event.target.innerText

            if (selectedAnswers.includes(elem)) {
                let selectedIndex = selectedAnswers.indexOf(elem);
                selectedAnswers.splice(selectedIndex, 1);
                event.target.classList.remove('active')
            } else {
                selectedAnswers.push(elem);
                event.target.classList.add('active')
            }
        });

    }
}


//add event listeners to choices
next.addEventListener('click', (event) => {

    //All option 
    if (currQuizQuestion.wrongAnswer === 'none') {
        if (selectedAnswers.length === currQuizQuestion.choices.length) {
            nextQuestion();
        } else {
            renderLoseScreen(currQuizQuestion.wrongAnswerExplanation)
        }
    } else {

        if (selectedAnswers.includes(currQuizQuestion.wrongAnswer) || selectedAnswers.length === 0) {
            renderLoseScreen(currQuizQuestion.wrongAnswerExplanation)
        } else {
            //clear the screen/divs 
            nextQuestion();
            
        }
    }
});



let nextQuestion = () => {
    currentQuizPosition+=1
    if(currentQuizPosition == quiz.length){
        renderWinScreen();
    }else{
        //clear divs
        clearScreen();
        //move on to next questions
        selectedAnswers = []
        currQuizQuestion = quiz[currentQuizPosition];
        runQuiz();
    }
}



let renderLoseScreen = (loseMessage) => {
    const loseScreenHTML = `
    <section id="lost-screen">
        <div class="item-header"> 
            You Lost 
        </div>
        <div class="graphic">
            <img src="#">
        </div>
        <div id="explanation"> 
            ${loseMessage}
        </div>
        <button id="restartGame">Restart Game</button> 
    </section>
    `
    //Clear the screen (clearScreen)
    clearScreen();

    //Append to the screen the loseScreenHTML (via appendChild onto container)
    container.innerHTML = loseScreenHTML

    //add event listener to restartGame id and make it refresh the screen on click (location.reload();)
    let restartButton = document.getElementById('restartGame');
    
    restartButton.addEventListener ('click', (event) => {
        window.location.reload();
    })


}

let renderWinScreen = () => {
    const winScreenHTML = `
    <section id= "winner-screen">
        <div class="item-header"> 
            You Made It!
        </div>
        <div class="graphic">
            <img src="#">
        </div>
        <div id="explanation">
            Add highlight line of the importance here.
        </div>

    </section>
    `
    //Clear the screen (clearScreen)
    clearScreen();
    next.classList.add('hide');
    //Append to the screen the winScreenHTML (via appendChild onto container)
    container.innerHTML = winScreenHTML;

}


let clearScreen = () => {
    quizQuestions.innerHTML = '';
    quizChoices.innerHTML = '';
}


startQuiz.addEventListener('click', () => {
    statement.classList.add('hide')
    container.classList.remove('hide')
    nextButton.classList.remove('hide')
    runQuiz();
})


//checking correct choices
// let checkIfAnswersAreCorrect = (rightAnswers, mySelectedAnswers) => {
//     //for every element in arr, does array2 include it? 
//     // for every element in rightAnswers, does myChoices include it? 
//   return rightAnswers.every(rightChoice => mySelectedAnswers.includes(rightChoice));
// }
