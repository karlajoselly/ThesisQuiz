
const QuizQuestions = [
    {
      question:
        "It’s the night of your friend’s birthday dinner! You’ve finished getting ready and are about to head out. What do you do to prepare?",
      choices: [
        "Walk to your bus/subway stop",
        "Call ahead to confirm the restaurant is accessible."
      ],
      correctAnswer: ["Call ahead to confirm the restaurant is accessible."],
      hint: 'HINT: Before you go anywhere, what should you do?',
      wrongAnswer: "Walk to your bus/subway stop",
      wrongAnswerExplanation:
        "It is always best to call ahead to confirm if a place is accessible before arriving to the location to find out that it is not accessible.",
      background: "images/birthday.jpg",
      questionClassStyle: "question1",
      choiceClassStyle: "choice1",
      transition: {
        transitionImage: "images/q1Transition.gif",
        transitionBackground: "#a3e1e0",
        transitionHeader: "That's Right!",
        transitionParagraph:
          "Before you arrive to the venue you should to call ahead to confirm if certain spaces are accessible for your friend. This is important because everyone's definition of accessibility is different."
      }
    },
  
    {
      question:
        "What spaces in the restaurant do you confirm are accessible when you call the restaurant? (Select all that apply)",
      choices: [
        "Bathroom",
        "Back door/Emergency exit",
        "Entrance/Front Door",
        "The dining space"
      ],
      correctAnswer: [
        "Bathroom",
        "Back door/Emergency exit",
        "Entrance/Front Door",
        "The dining space"
      ],
      hint: 'HINT: Think about the experience and places you need to access that needs to be accessible for your friend.',
      wrongAnswer: "none",
      wrongAnswerExplanation:
        "Thinking of spaces, you want your friend to be able to enjoy her experience upon arriving to the destination. You need to check if she will be able to navigate the space and be able to access necessary spaces within in a business such as the bathroom and all entry points.",
      background: "images/talking.jpg",
      questionClassStyle: "question2",
      choiceClassStyle: "choice2",
      transition: {
        transitionImage: "images/q2Transition.gif",
        transitionBackground: "#fdefd3",
        transitionHeader: "Great Selection!",
        transitionParagraph:
          "Calling a restaurant to figure out whether they’re actually wheelchair accessible can sometimes be a bit more complicated than confirming a reservation. Sometimes the restaurant views through the lens of not being disabled themselves, not realizing both the obvious and subtle challenges created by inaccessibility. Per the ADA, restaurants need to have entrances that are 36 inches across to accommodate a wheelchair; check-out counters must have one section no higher than 36 inches for the same reason. When seating is provided, like in restaurants, at least five percent of those tables must be accessible."
      }
    },
    {
      question:
        "Once you arrive at the restaurant and walk through it, you realize space is not actually wheelchair accessible. This isn’t the first time a restaurant owner hasn’t realized their space isn’t fully ADA compliant… what do you do now? (Select all that apply)",
      choices: [
        "Look for a different bar that may be accessible",
        "Leave a yelp review",
        "Report the restaurant",
        "Everyone was excited to try this restaurant, so you try to make it work"
      ],
      correctAnswer: [
        "Look for a different bar that may be accessible",
        "Leave a yelp review",
        "Report the restaurant"
      ],
      hint: 'HINT: Per ADA, places should be ADA compliant. It is also good for others to know if a place is accessible or not',
      wrongAnswer:
        "Everyone was excited to try this restaurant, so you try to make it work",
      wrongAnswerExplanation:
        "Remember you are trying to make sure your best friend is having a good night, it is best to include her and ask what she thinks rather than trying to make things work.",
      background: "images/restaurant.jpg",
      questionClassStyle: "question3",
      choiceClassStyle: "choice3",
      transition: {
        transitionImage: "images/q3Transition.gif",
        transitionBackground: "#6ab793",
        transitionHeader: "Amazing!",
        transitionParagraph:
          "It’s up to you to to notice these challenges and take action. There’s no independent government agency actively doing regular inspections and handing out fines for ADA violations; infractions of the law are typically handled by complaints made by people who are disabled. If more people were to make reports about these locations, more places would accessible to people in this community."
      }
    },
    {
      question:
        "After a quick Yelp search, and a phone call to the bar, you found a different restaurant that is accessible for your friend nearby. This restaurant bar has a back patio where you all want to eat, hang out in but the entrance has a 3-step staircase to get inside. What do you do?",
      choices: [
        "Ask your friend if they want to go to the patio and if they are comfortable with you helping them down the stairs",
        "Make an executive decision and only hang out in the dining space"
      ],
      correctAnswer: [
        "Ask your friend if they want to go to the patio and if they are comfortable with you helping them down the stairs"
      ],
      hint: 'HINT: Communication is key!',
      wrongAnswer:
        "Make an executive decision and only hang out in the dining space",
      wrongAnswerExplanation:
        "You want to confirm friend first to see what she is comfortable with before making an executive decision",
      background: "images/patio.jpg",
      questionClassStyle: "question4",
      choiceClassStyle: "choice4",
      transition: {
        transitionImage: "images/q4Transition.gif",
        transitionBackground: "#fedce2",
        transitionHeader: "Communication is Key!",
        transitionParagraph:
          "Being excluded from an event or decision because of what your friend perceives what you can or can’t do is almost always a microaggression. It’s always best to communicate with your friend on what she wants to or can do first before making an executive decision."
      }
    },
    {
      question:
        "You are ready to leave the restaurant, and your friend asks for help to find accessible transportation. What do you do? (Select all that apply)",
      choices: [
        "Call a standard Uber/Lyft",
        "Check the MTA Info website for elevator service information",
        "Use the Accessible Dispatch service (wheelchair accessible yellow and green taxi service)",
        "Check different MTA train station routes to see what stations are accessible"
      ],
      correctAnswer: [
        "Check the MTA Info website for elevator service information",
        "Use the Accessible Dispatch service (wheelchair accessible yellow and green taxi service)",
        "Check different MTA train station routes to see what stations are accessible"
      ],
      hint: 'HINT: Not all cars are accessible',
      wrongAnswer: "Call a regular Uber/Lyft",
      wrongAnswerExplanation:
        "Almost! When you call a regular Uber/Lyft it may not be accessible for your friend. You may want to go through all the other options first to see what would be the best option for her.",
      background: "images/iphone.jpg",
      questionClassStyle: "question5",
      choiceClassStyle: "choice5"
    }
  ];



let quiz = document.getElementById('quiz')
let quizQuestionsContainer = document.getElementById("quiz-question");
let quizChoicesContainer = document.getElementById("quiz-choices");
let container = document.getElementById("container");
let nextButton = document.getElementById("next");
let startQuiz = document.getElementById("startQuiz");
let statement = document.getElementById("statement");
let contentWrapper = document.getElementById("contentWrapper");
let hint = document.getElementById('hint')
let transition = document.getElementById('transition')
let attempts = document.getElementById('attempts')


//Quiz position starts at zero so class needs to change to start at zero-6


class Quiz{ 
    constructor(){
        this.currentQuizPosition = 0;
        this.selectedAnswers = [];
        this.quizQuestions = QuizQuestions
        this.attempts = 3
    }

    runQuiz(){
        let currentQuestion = this.getCurrentQuizQuestion()
        this.generateQuestion(currentQuestion);
        this.generateAnswers(currentQuestion);
    }

    generateQuestion(currQuestion){
        //Create elements for the quiz question and choices
        let newQuizQuestion = document.createElement("div");
        newQuizQuestion.className = "questionText";
        newQuizQuestion.textContent = currQuestion.question;
        newQuizQuestion.id = `question${this.currentQuizPosition}`
        quizQuestionsContainer.appendChild(newQuizQuestion);
    }

    generateAnswers(currQuestion){
        let currentQuestionChoices = currQuestion.choices
        contentWrapper.style.backgroundImage = `url('${currQuestion.background}')`;
        
        currentQuestionChoices.forEach((choice, index) => {
            let choiceText = document.createElement("div");
            choiceText.className = "choiceText";
            choiceText.textContent = choice
            choiceText.classList.add(`choice${this.currentQuizPosition}`);

            choiceText.addEventListener('click', (event) => {
                let choice = event.target
                let choiceText = choice.innerText
                if (this.selectedAnswers.includes(choiceText)) {
                    //remove answer from selected answers if already has been clicked on. 
                    let selectedIndex = this.selectedAnswers.indexOf(choiceText);
                    this.selectedAnswers.splice(selectedIndex, 1);
                    event.target.classList.remove("active");
                } else {
                    choice.classList.add("active");
                    this.selectedAnswers.push(choiceText);
                }
            })

            quizChoicesContainer.appendChild(choiceText);
        })
    }


    setupNextButton(){
        nextButton.addEventListener("click", (event) => {
            let currQuestion = this.getCurrentQuizQuestion();
            this.attempts-=1
            this.updateAttemptsOnScreen();
            
            // console.log(this.attempts, 'Attempts in nextButton')
            // console.log(this.selectedAnswers, 'Selected Answers')
            // console.log(this.areAnswersCorrect(this.getCurrentQuizQuestion()), 'Do I have all good answers?')
            
            if(this.selectedAnswers.includes(currQuestion.wrongAnswer) || this.selectedAnswers.length === 0){
                this.checkIfAttemptsRemaining(currQuestion)
            }else{
                //if they have all the right answers selected, render transition screen
                if(this.areAnswersCorrect(this.getCurrentQuizQuestion())){
                    (this.currentQuizPosition === this.quizQuestions.length - 1) ? this.renderWinScreen() : this.renderTransitionScreen(currQuestion);
                }else{
                    this.checkIfAttemptsRemaining(currQuestion)
                }
            }
        });
    }

    renderHint(currQuestion){
        if (hint.innerText.length <= 0){
            hint.classList.remove('hide')
            hint.innerText = currQuestion.hint
        }
    }

    checkIfAttemptsRemaining(currQuestion){
        return this.attempts === 0 ? this.renderLoseScreen(currQuestion) : this.renderHint(currQuestion);
    }

    renderTransitionScreen(currQuestion){
        const transitionScreenHTML = `
            <section id= "transition-screen" class='animated fadeInDown'>
                <div class="transition-graphic">
                    <img src="${currQuestion.transition.transitionImage}" />
                </div>
                <div class="transition-content">
                <div class="transition-header"> 
                    ${currQuestion.transition.transitionHeader}
                </div>
                <div id="transition-explanation">
                    ${currQuestion.transition.transitionParagraph}
                </div>
                <button id="continue">Continue</button>
                </div>
            </section>`
        this.clearScreen();
        contentWrapper.style.backgroundImage = `none`;
        contentWrapper.style.backgroundColor = `${currQuestion.transition.transitionBackground}`;
        next.classList.add("hide");
        quiz.classList.add("hide")
        attempts.classList.add('hide')
        //Append to the screen the transitionScreenHTML (via appendChild onto container)
        transition.innerHTML = transitionScreenHTML;
        document.getElementById('continue').addEventListener('click', (event) => {
            this.attempts = 3
            this.updateAttemptsOnScreen();
            this.renderNextQuestion();
            nextButton.classList.remove('hide');
        })
    }


    renderNextQuestion(){
        this.currentQuizPosition+=1
        //delete transition html
        quiz.classList.remove('hide')
        transition.innerHTML = ''
        hint.innerText = ''
        hint.classList.add('hide')
        attempts.classList.remove('hide')
        this.selectedAnswers = [];
        this.runQuiz();
    }

    // updateAttemptsOnScreen(){
    //     attempts.innerText = `Attempts Remaining: ${this.attempts}`
    // }
    updateAttemptsOnScreen(){
      attempts.innerText = ''
      for(let i=0; i < this.attempts; i++){
        let newHeart = document.createElement('img')
        newHeart.src = 'images/heart-icon.png'
        attempts.appendChild(newHeart)
      }
    }


    renderWinScreen(){
        const winScreenHTML = `
        <section id= "winner-screen" class='animated fadeInDown'>
        <div class="flex-container">
            <div class="graphic">
                <img src="images/smile.png">
            </div>
            <div class="win-content">
            <div class="item-header"> 
                You Made It!
            </div>
            <div id="explanation">
            When Congress passed The Americans with Disabilities Act (ADA) in 1990 it didn’t just help the 
            58 million plus disabled Americans it helped us all and continues to help us all.
            All of this has led to a better general understanding of how disability affects someone’s experience,
            and what still needs to be done to create an inclusive environment for everyone. <br/> <br/> The purpose of the quiz is to start 
            discussions about universal design and the importance of access for people in the disability community. 
            This quiz portrays an interactive journey that simulates the stresses of someone not being able to perform 
            a standard activity. As a community we should design with accessibility in mind to create equal opportunities 
            and inclusive environments where everyone can benefit.
            </div>
            </div>
            </div>
        </section>
        `;
        //Clear the screen (clearScreen)
        this.clearScreen();
        attempts.classList.add('hide')
        contentWrapper.style.backgroundImage = `none`;
        contentWrapper.style.backgroundColor = `#FFBA00`;
        next.classList.add("hide");
        //Append to the screen the winScreenHTML (via appendChild onto container)
        container.innerHTML = winScreenHTML;
    }


    renderLoseScreen(currQuestion){
        const loseScreenHTML = `
            <section id="lost-screen" class='animated fadeInDown'>
            <div class="flex-container">
            <div class="graphic">
                    <img src="images/lost.png">
                </div>
                <div class="lose-content">
                <div class="item-header"> 
                    You Almost Made It! 
                </div>
                
                <div id="explanation"> 
                    ${currQuestion.wrongAnswerExplanation}
                </div>
                <button id="restartGame">Restart Game</button> 
                </div>
                </div>
            </section>
            `;
        this.clearScreen();
        attempts.classList.add('hide')
        contentWrapper.style.backgroundImage = `none`;
        contentWrapper.style.backgroundColor = `#030B44`;
        next.classList.add("hide");
        container.innerHTML = loseScreenHTML;
        let restartButton = document.getElementById("restartGame");
        restartButton.addEventListener("click", event => {
            window.location.reload();
        });
    }

    getCurrentQuizQuestion(){
        return this.quizQuestions[this.currentQuizPosition]
    }

    areAnswersCorrect(currQuestion){
        let rightAnswers = currQuestion.correctAnswer
        return rightAnswers.every(rightChoice => this.selectedAnswers.includes(rightChoice));
    }


    clearScreen(){
        quizQuestionsContainer.innerHTML = "";
        quizChoicesContainer.innerHTML = "";
    };
}


startQuiz.addEventListener("click", () => {
    statement.classList.add("hide");
    container.classList.remove("hide");
    nextButton.classList.remove("hide");
    attempts.classList.remove("hide")
    let myQuiz = new Quiz();
    myQuiz.runQuiz();
    myQuiz.setupNextButton();
    myQuiz.updateAttemptsOnScreen();
});

