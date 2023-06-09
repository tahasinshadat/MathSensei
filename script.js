// Fetch the quiz data from a JSON file
fetch('quiz-data.json')
  .then(response => response.json())
  .then(data => {
    const quizContainer = document.getElementById('quiz-container');
    const questions = data.questions;
    let currentQuestion = 0;
    let userAnswers = [];
    let isDarkMode = false;

    // Function to render the current question
    function renderQuestion() {
      const question = questions[currentQuestion];

      // Clear the quiz container
      quizContainer.innerHTML = '';

      // Create question text element
      const questionText = document.createElement('div');
      questionText.classList.add('question-text');
      questionText.textContent = question.text;
      quizContainer.appendChild(questionText);

      // Create answers container
      const answersContainer = document.createElement('div');
      answersContainer.classList.add('answers');
      quizContainer.appendChild(answersContainer);

      // Create answer choices
      question.choices.forEach((choice, index) => {
        const answer = document.createElement('div');
        answer.classList.add('answer');
        const image = document.createElement('img');
        image.src = choice.image;
        image.alt = `Answer ${index + 1}`;
        answer.appendChild(image);
        answer.addEventListener('click', () => selectAnswer(answer, index));
        answersContainer.appendChild(answer);
      });

      // Create next button
      const nextButton = document.createElement('button');
      nextButton.classList.add('next-btn');
      nextButton.textContent = 'Next';
      nextButton.addEventListener('click', nextQuestion);
      nextButton.disabled = true;
      quizContainer.appendChild(nextButton);
    }

    // Function to select an answer
    function selectAnswer(answerElement, index) {
      const answers = document.querySelectorAll('.answer');
      answers.forEach(answer => {
        answer.classList.remove('selected');
        answer.style.opacity = '0.5';
      });
      answerElement.classList.add('selected');
      answerElement.style.opacity = '1';
      userAnswers[currentQuestion] = index;
      const nextButton = document.querySelector('.next-btn');
      nextButton.disabled = false;
    }

    // Function to go to the next question
    function nextQuestion() {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
      } else {
        showResult();
      }
    }

    // Function to calculate and display the quiz result
    function showResult() {
        const score = userAnswers.reduce((total, answerIndex, questionIndex) => {
        const points = questions[questionIndex].points[answerIndex];
        return total + points;
        }, 0);

        let questionIndexToShowResult = -1;

        if (score >= 10 && score <= 12) {
        questionIndexToShowResult = 0;
        } else if (score >= 13 && score <= 15) {
        questionIndexToShowResult = 1;
        } else if (score >= 16 && score <= 18) {
        questionIndexToShowResult = 2;
        } else if (score >= 19 && score <= 21) {
        questionIndexToShowResult = 3;
        } else if (score >= 22 && score <= 24) {
        questionIndexToShowResult = 4;
        } else if (score >= 25 && score <= 27) {
        questionIndexToShowResult = 5;
        } else if (score >= 28 && score <= 30) {
        questionIndexToShowResult = 6;
        } else if (score >= 31 && score <= 33) {
        questionIndexToShowResult = 7;
        } else if (score >= 34 && score <= 36) {
        questionIndexToShowResult = 8;
        } else if (score >= 37) {
        questionIndexToShowResult = 9;
        } 

        if (questionIndexToShowResult !== -1) {
            quizContainer.innerHTML = '';
            const resultQuestion = questions[questionIndexToShowResult];

            const resultImage = document.createElement('img');
            resultImage.src = resultQuestion.image;
            resultImage.alt = 'Result Image';
            quizContainer.appendChild(resultImage);

            const resultCategory = document.createElement('div');
            resultCategory.classList.add('result');
            resultCategory.textContent = resultQuestion.category;
            quizContainer.appendChild(resultCategory);

            const resultDescription = document.createElement('div');
            resultDescription.classList.add('result-description');
            resultDescription.textContent = resultQuestion.description;
            quizContainer.appendChild(resultDescription);

        }
    }

    // Apply dark mode styles
    function applyDarkMode() {
        document.documentElement.classList.add('dark-mode');
        const navbar = document.querySelector('.navbar');
        navbar.classList.add('dark-mode');
        isDarkMode = true;
    }
  
    // Apply light mode styles
    function applyLightMode() {
        document.documentElement.classList.remove('dark-mode');
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('dark-mode');
        isDarkMode = false;
    }

    // Toggle dark/light mode
    function toggleTheme() {
      if (isDarkMode) {
        themeToggleBtn.style.backgroundColor = 'rgb(39, 0, 90)';
        themeToggleBtn.style.color = 'white';
        applyLightMode();
        themeToggleBtn.textContent = 'Dark Mode';
      } else {
        themeToggleBtn.style.backgroundColor = 'white';
        themeToggleBtn.style.color = 'black';
        applyDarkMode();
        themeToggleBtn.textContent = 'Light Mode';
      }
    }

    // Theme toggle button event listener
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Start the quiz
    renderQuestion();
  });
