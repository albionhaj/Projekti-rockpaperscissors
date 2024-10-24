const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result');
const resetButton = document.getElementById('reset');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        
        resultText.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
        resetButton.style.display = 'block';
    });
});

resetButton.addEventListener('click', () => {
    resultText.textContent = '';
    resetButton.style.display = 'none';
});

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randomNum];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
