const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const results = document.querySelector(".text");
const subtext = document.querySelector(".subtext");
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const finalText = document.querySelector(".finalText");
let playerwin = 0;
let computerwin = 0;

let userInput;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 100) + 1;
    if(number <= 33 && number > 0)
    {
        return 1;
    }
    if(number <= 66 && number > 33)
    {
        return 2;
    }
    if(number <= 100 && number > 66)
    {
        return 3;
    }
}

function game() {
    if(playerwin < 5 && computerwin < 5) {
        var computerChoice = getComputerChoice();
        determineWinner(computerChoice);
        changeScoreline();
        finalScoreline();
    }
}
function determineWinner(computerChoice) {
    if(userInput === 1 && computerChoice === 3) {
        ++playerwin;
        subtext.textContent = "Rock smashes scissors.";
        results.textContent = "You win!";
    }
    else if(userInput === 2 && computerChoice === 1) {
        ++playerwin;
        subtext.textContent = "Paper covers rock.";
        results.textContent = "You win!";
    }
    else if(userInput === 3 && computerChoice === 2) {
        ++playerwin;
        subtext.textContent = "Scissors cuts paper.";
        results.textContent = "You win!";
    }
    else if(userInput === computerChoice) {
        results.textContent = "Draw!";
    }
    else {
        ++computerwin;
        results.textContent = "You lose!";
    }
}

function changeScoreline() {
    playerScore.textContent = "Player: " + playerwin;
    computerScore.textContent = "Computer: " + computerwin;
}

function finalScoreline() {
    if (playerwin === 5) {
        finalText.textContent = "You won the game!";
    } else if(computerwin === 5) {
        finalText.textContent = "You lost the game!";
    }
}
rockButton.addEventListener("click", function(e) {
    let userinput = 1;
    userInput = userinput;
    game();
})

paperButton.addEventListener("click", function(e) {
    let userinput = 2;
    userInput = userinput;
    game();
})

scissorsButton.addEventListener("click", function(e) {
    let userinput = 3;
    userInput = userinput;
    game();
})
