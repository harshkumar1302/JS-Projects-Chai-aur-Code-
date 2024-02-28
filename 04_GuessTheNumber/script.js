let randomNumber = parseInt((Math.random() * 100 + 1));
console.log(randomNumber);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");


let prevGuess = [];
let numGuess = 1;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid Number.`);
    } else if (guess < 1) {
        alert(`Entered number is less than 1.`)
    } else if (guess > 100) {
        alert(`Entered number is more than 100.`)
    } else {
        prevGuess.push(guess);
        if (numGuess > 10) {
            cleanUpGuess(guess);
            displayMessage(`Game Over. The number was ${randomNumber}`);
            endGame();
        } else {
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }
};


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Yeah! You guessed it right.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`The number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`The number is TOOO high`)
    }
};


function cleanUpGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
};


function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
};


function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame" style="cursor: pointer">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
};


function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt((Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute(`disabled`);
        startOver.removeChild(p);
        playGame = true;
    })
};