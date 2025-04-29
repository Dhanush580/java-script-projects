let Myarr = ["rock", "paper", "scissor"];

function rock() {
    let userChoosenValue = "rock";
    let val = Math.floor(Math.random() * Myarr.length);
    let computerChoosenValue = Myarr[val];
    console.log(computerChoosenValue);
    if (userChoosenValue == computerChoosenValue) {
        document.getElementById("result").textContent = "It's a Tie! Computer chose " + computerChoosenValue;
    } else if (computerChoosenValue == "paper") {
        document.getElementById("result").textContent = "Computer Wins! Computer chose " + computerChoosenValue;
    } else if (computerChoosenValue == "scissor") {
        document.getElementById("result").textContent = "User Wins! Computer chose " + computerChoosenValue;
    }
}

function paper() {
    let userChoosenValue = "paper";
    let val = Math.floor(Math.random() * Myarr.length);
    let computerChoosenValue = Myarr[val];
    console.log(computerChoosenValue);
    if (userChoosenValue == computerChoosenValue) {
        document.getElementById("result").textContent = "It's a Tie! Computer chose " + computerChoosenValue;
    } else if (computerChoosenValue == "scissor") {
        document.getElementById("result").textContent = "Computer Wins! Computer chose " + computerChoosenValue;
    } else if (computerChoosenValue == "rock") {
        document.getElementById("result").textContent = "User Wins! Computer chose " + computerChoosenValue;
    }
}

function scissor() {
    let userChoosenValue = "scissor";
    let val = Math.floor(Math.random() * Myarr.length);
    let computerChoosenValue = Myarr[val];
    console.log(computerChoosenValue);
    if (userChoosenValue == computerChoosenValue) {
        document.getElementById("result").textContent = "It's a Tie! Computer chose " + computerChoosenValue;
    } else if (computerChoosenValue == "rock") {
        document.getElementById("result").textContent = "Computer Wins! Computer chose " + computerChoosenValue;
    } else if (computerChoosenValue == "paper") {
        document.getElementById("result").textContent = "User Wins! Computer chose " + computerChoosenValue;
    }
}
