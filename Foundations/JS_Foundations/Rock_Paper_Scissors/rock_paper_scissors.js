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
    const result = document.querySelector(".result");
    
    if (choice == "rock" && computerAction == "paper") {
        result.textContent = `You lose! ${choice} loses to ${computerAction}.`;
    }
    else if (choice == "rock" && computerAction == "rock") {
        result.textContent = "Tie!";
    }
    else if (choice == "rock" && computerAction == "scissors") {
        result.textContent = `You win! ${choice} beats ${computerAction}.`;
    }
    else if (choice == "paper" && computerAction == "rock") {
        result.textContent = `You win! ${choice} beats ${computerAction}.`; 
    }
    else if (choice == "paper" && computerAction == "scissors") {
        result.textContent = `You lose! ${choice} loses to ${computerAction}.`;
    }
    else if (choice == "paper" && computerAction == "paper") {
        result.textContent = `Tie!`; 
    }
    else if (choice == "scissors" && computerAction == "paper") {
        result.textContent = `You win! ${choice} beats ${computerAction}.`; 
    }
    else if (choice == "scissors" && computerAction == "rock") {
        result.textContent = `You lose! ${choice} loses to ${computerAction}.`;
    }
    else if (choice == "scissors" && computerAction == "scissors") {
        result.textContent = "Tie!";
    }
}

function game() {
    let count = 0;
    let playerWins = 0;
    let computerWins = 0;
    let result;
    
    result = playRound()  
}

const container = document.querySelector('.container');

// this query selector all doesn't make sense since there's only one buttons?
const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.explicitOriginalTarget.parentElement.className) // allows me to select the rock button instead of the image itself
        playRound(e.explicitOriginalTarget.parentElement.className);
    });
});

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