let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

HTMLresualt();

function Game(par) {
  let Random = MakeRandom();
  let Resualt = "";

  if (par === "Rock") {
    if (Random === "Rock") {
      Resualt = "Tie";
    } else if (Random === "Paper") {
      Resualt = "Lose";
    } else {
      Resualt = "Win";
    }
  } else if (par === "Paper") {
    if (Random === "Rock") {
      Resualt = "Win";
    } else if (Random === "Paper") {
      Resualt = "Tie";
    } else {
      Resualt = "Lose";
    }
  } else if (par === "Scissors") {
    if (Random === "Rock") {
      Resualt = "Lose";
    } else if (Random === "Paper") {
      Resualt = "Win";
    } else {
      Resualt = "Tie";
    }
  }

  if (Resualt === "Win") {
    score.wins += 1;
  } else if (Resualt === "Lose") {
    score.loses += 1;
  } else if (Resualt === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  HTMLresualt();

  document.querySelector(".resualt-js").innerHTML = Resualt;
  document.querySelector(".hand-resualt-js").innerHTML =
    `<div>You &#10145; <img src="Picture/${par}-emoji.png"> || <img src="Picture/${Random}-emoji.png"> &#11013; computer</div>`;
}

function HTMLresualt() {
  document.querySelector(".score-js").innerHTML =
    `Wins: ${score.wins} || Loses: ${score.loses} || Ties: ${score.ties}`;
  document.querySelector(".resualt-js").innerHTML = "";
  document.querySelector(".hand-resualt-js").innerHTML = "";
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
  HTMLresualt();
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
