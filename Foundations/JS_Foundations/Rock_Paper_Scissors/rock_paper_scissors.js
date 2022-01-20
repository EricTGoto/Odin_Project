function computerPlay() {
    return(Math.floor(Math.random() * 3))
}

function convertNumToRockPaperScissors(num) {
    if (num == 0) return "rock"
    else if (num == 1) return "paper"
    else return "scissors"
}

function playRound() {
    const action = window.prompt("What do you choose", "rock").toLowerCase();
    const computerAction = convertNumToRockPaperScissors(computerPlay());

    if (action == "rock" && computerAction == "paper") {
        console.log(`You lose! ${action} loses to ${computerAction}`)
        return 1
    }
    else if (action == "rock" && computerAction == "rock") {
        console.log("Tie")
        return 0
    }
    else if (action == "rock" && computerAction == "scissors") {
        console.log(`You win! ${action} beats ${computerAction}`)
        return 2
    }
    else if (action == "paper" && computerAction == "rock") {
        console.log(`You win! ${action} beats ${computerAction}`)
        return 2
    }
    else if (action == "paper" && computerAction == "scissors") {
        console.log(`You lose! ${action} loses to ${computerAction}`)
        return 1
    }
    else if (action == "paper" && computerAction == "paper") {
        console.log(`Tie!`)
        return 0
    }
    else if (action == "scissors" && computerAction == "paper") {
        console.log(`You win! ${action} beats ${computerAction}`)
        return 2
    }
    else if (action == "scissors" && computerAction == "rock") {
        console.log(`You lose! ${action} loses to ${computerAction}`)
        return 1
    }
    else if (action == "scissors" && computerAction == "scissors") {
        console.log("Tie!")
        return 0
    }
}

function game() {
    let count = 0;
    let playerWins = 0;
    let computerWins = 0;
    let result;
    while (count < 5) {
        result = playRound()
        if (result == 2) playerWins++
        else if (result == 1) computerWins++
        count++;
    }

    if (playerWins > computerWins) console.log("Player wins overall")
    else if (playerWins < computerWins) console.log("Computer wins overall")
    else console.log("Overall tie")

}

game();