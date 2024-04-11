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
    if (number <= 33 && number > 0) {
        return 1;
    }
    if (number <= 66 && number > 33) {
        return 2;
    }
    if (number <= 100 && number > 66) {
        return 3;
    }
}

function game() {
    if (playerwin < 5 && computerwin < 5) {
        var computerChoice = getComputerChoice();
        determineWinner(computerChoice);
        changeScoreline();
        finalScoreline();
    }
}
function determineWinner(computerChoice) {
    if (userInput === 1 && computerChoice === 3) {
        ++playerwin;
        subtext.textContent = "Rock smashes scissors.";
        results.textContent = "You win!";
    }
    else if (userInput === 2 && computerChoice === 1) {
        ++playerwin;
        subtext.textContent = "Paper covers rock.";
        results.textContent = "You win!";
    }
    else if (userInput === 3 && computerChoice === 2) {
        ++playerwin;
        subtext.textContent = "Scissors cuts paper.";
        results.textContent = "You win!";
    }
    else if (userInput === computerChoice) {
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
    } else if (computerwin === 5) {
        finalText.textContent = "You lost the game!";
    }
}
rockButton.addEventListener("click", function (e) {
    let userinput = 1;
    userInput = userinput;
    game();
})

paperButton.addEventListener("click", function (e) {
    let userinput = 2;
    userInput = userinput;
    game();
})

scissorsButton.addEventListener("click", function (e) {
    let userinput = 3;
    userInput = userinput;
    game();
})

function assigningVar() {
    let num = new Number();
    console.log(num);
}

function run() {
    let name = prompt("Enter name");
    let age = parseInt(prompt("Enter age"));
    let object1 = object(name, age);
    for (let prop in object1) {
        console.log(object1[prop]);
    }
    let check = isEmpty(object1);
    console.log("Does not contain such a thing: " + check);

}

function object(name, age) {
    let object = {
        name,
        age,
    }
    return object;
}

function isEmpty(obj) {
    let check = prompt("check");
    let bool = (obj[check] === undefined);
    return bool
}

function salarySum() {
    let sum = 0;
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    }
    for (let salary in salaries) {
        sum += salaries[salary];
    }
    return sum;
}

function doubleObj() {
    let obj = {
        width: 400,
        height: 600,
        title: "My menu",
    }
    for (prop in obj) {
        if (typeof obj[prop] === "number") {
            obj[prop] = obj[prop] * 2;
        }
    }
    for (prop in obj) {
        console.log(obj[prop])
    }
}

function makeEvenArray(lowerlimit, upperlimit) {
    let obj = {};
    for (let i = lowerlimit; i < upperlimit; i++) {
        if (i % 2 === 0) {
            obj[i] = i;
        }
    }
    return obj;
}
function sumOfTripledEvens() {
    let obj = makeEvenArray(0, 100);
    let sum = 0;
    for (let prop in obj) {
        if (prop % 2 === 0) {
            obj[prop] = 3 * obj[prop];
        }
    }
    for (let prop in obj) {
        sum += obj[prop];
    }
    return sum;

}

function selfReduce() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(array.reduce((total, currentitem) => total * currentitem))
}