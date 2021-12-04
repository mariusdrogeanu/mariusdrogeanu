var mybutton = document.getElementById("myGame");

function play() {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  var userChoice = choices[Math.floor(Math.random() * choices.length)];
  var result = document.getElementById("gameResult");
  var myChoice = document.getElementById("yourChoice");
  var pcChoice = document.getElementById("computerChoice");
  myChoice.innerHTML = `Your choice: ${userChoice}`;
  pcChoice.innerHTML = `Computer\`s choice: ${computerChoice}`;

  if (computerChoice === "rock" && userChoice === "paper") {
    result.innerHTML = "You won";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result.innerHTML = "Computer wins";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result.innerHTML = "Computer wins";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result.innerHTML = "You won";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result.innerHTML = "You won";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result.innerHTML = "Computer wins";
  } else {
    result.innerHTML = "It's a draw";
  }
}

mybutton.addEventListener("click", play);
