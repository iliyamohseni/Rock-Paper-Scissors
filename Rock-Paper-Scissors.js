let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

HTMLresult();

function Game(par) {
  let Random = MakeRandom();
  let Result = "";

  if (par === "Rock") {
    if (Random === "Rock") {
      Result = "Tie";
    } else if (Random === "Paper") {
      Result = "Lose";
    } else {
      Result = "Win";
    }
  } else if (par === "Paper") {
    if (Random === "Rock") {
      Result = "Win";
    } else if (Random === "Paper") {
      Result = "Tie";
    } else {
      Result = "Lose";
    }
  } else if (par === "Scissors") {
    if (Random === "Rock") {
      Result = "Lose";
    } else if (Random === "Paper") {
      Result = "Win";
    } else {
      Result = "Tie";
    }
  }

  if (Result === "Win") {
    score.wins += 1;
  } else if (Result === "Lose") {
    score.loses += 1;
  } else if (Result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  HTMLresult();

  document.querySelector(".result-js").innerHTML = Result;
  document.querySelector(".hand-result-js").innerHTML =
    `<div>You &#10145; <img src="Picture/${par}-emoji.png"> || <img src="Picture/${Random}-emoji.png"> &#11013; computer</div>`;
}

function HTMLresult() {
  document.querySelector(".score-js").innerHTML =
    `Wins: ${score.wins} || Loses: ${score.loses} || Ties: ${score.ties}`;
  document.querySelector(".result-js").innerHTML = "";
  document.querySelector(".hand-result-js").innerHTML = "";
}

function MakeRandom() {
  let Random;
  let random = Math.random();

  if (random > 0 && random <= 1 / 3) {
    Random = "Rock";
  } else if (random > 1 / 3 && random <= 2 / 3) {
    Random = "Paper";
  } else {
    Random = "Scissors";
  }

  return Random;
}

function Resetbutton() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  HTMLresult();
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = MakeRandom();
      Game(playerMove);
    }, 1500);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
