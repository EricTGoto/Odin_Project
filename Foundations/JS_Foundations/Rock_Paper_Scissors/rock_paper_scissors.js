function computerPlay() {
    return(Math.floor(Math.random() * 3))
}

function convertNumToRockPaperScissors(num) {
    if (num == 0) return "rock"
    else if (num == 1) return "paper"
    else return "scissors"
}

function playRound(choice) {
    const computerAction = convertNumToRockPaperScissors(computerPlay());
    
    let firstLetter = choice.substr(0,1);
    let firstLetterCapitalized = firstLetter.toUpperCase();
    let capitalizedWord = firstLetterCapitalized + choice.substr(1);

    if (choice == "rock" && computerAction == "paper") {
        computerScore++;
        result.textContent = `You lose! ${capitalizedWord} loses to ${computerAction}.`;
    }
    else if (choice == "rock" && computerAction == "rock") {
        result.textContent = "Tie!";
    }
    else if (choice == "rock" && computerAction == "scissors") {
        playerScore++;
        result.textContent = `You win! ${capitalizedWord} beats ${computerAction}.`;
    }
    else if (choice == "paper" && computerAction == "rock") {
        result.textContent = `You win! ${capitalizedWord} beats ${computerAction}.`; 
    }
    else if (choice == "paper" && computerAction == "scissors") {
        computerScore++;
        result.textContent = `You lose! ${capitalizedWord} loses to ${computerAction}.`;
    }
    else if (choice == "paper" && computerAction == "paper") {
        result.textContent = `Tie!`; 
    }
    else if (choice == "scissors" && computerAction == "paper") {
        playerScore++;
        result.textContent = `You win! ${capitalizedWord} beats ${computerAction}.`; 
    }
    else if (choice == "scissors" && computerAction == "rock") {
        computerScore++;
        result.textContent = `You lose! ${capitalizedWord} loses to ${computerAction}.`;
    }
    else if (choice == "scissors" && computerAction == "scissors") {
        playerScore++;
        result.textContent = "Tie!";
    }
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('.container');

// when buttons are pressed, a round is played
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.explicitOriginalTarget.parentElement.className);
    })
})

const body = document.querySelector("body");
body.style.backgroundColor = '#9BC1BC';

const header = document.createElement('div');
header.style.backgroundColor =  '#F4F1BB';
header.style.width = '100vw';
header.style.height = '15vh';
header.style.display = 'flex';
header.style.alignItems = 'center';
header.style.justifyContent = 'center';
header.textContent = "ROCK PAPER SCISSORS";
header.style.fontSize = "30px";
header.style.fontWeight = 'bold';
header.style.fontFamily = "'Roboto', sans-serif";
body.insertBefore(header, container);

const footer = document.createElement('div');
footer.textContent = "Eric Goto 2022";
body.appendChild(footer);
footer.style.backgroundColor = '#ED6A5A';
footer.style.width = '100vw';
footer.style.height = '10vh';
footer.style.display= 'flex';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';

const result = document.querySelector(".result");
result.style.fontSize = "32px";

const tally = document.createElement('div');
tally.style.display = 'flex';
tally.style.gap = "20px";
tally.style.fontSize = "30px";

const playerScoreElement = document.createElement('div');
const computerScoreElement = document.createElement('div');

tally.appendChild(playerScoreElement);
tally.appendChild(computerScoreElement);
container.appendChild(tally);
