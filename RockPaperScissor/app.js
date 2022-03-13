const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const results = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice


// Displays what the user has chosen using an event listener
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}))