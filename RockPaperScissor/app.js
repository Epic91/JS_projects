const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


// Displays what the user has chosen using an event listener
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// Function, generates a random number and display choice based on the number
const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if(randomNumber === 0) {
        computerChoice = 'rock'
    }
    if(randomNumber === 1) {
        computerChoice = 'paper'
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You win!"
    }
    if (computerChoice === ' rock' && userChoice === 'scissors') {
        result = "You lose!"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You win!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You lose!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You win!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You lose!"
    }
    
    resultDisplay.innerHTML = result
}