let random = 0;
function timeTesto(timeSec) {
  let timeLeft = document.getElementById("testo");
  let timeLeftNum = timeSec;
  let input = document.getElementById("userGuess");
  let interval = setInterval(function () {
    timeLeftNum--;
    timeLeft.innerText = timeLeftNum;

    if (timeLeftNum <= 0) {
      clearInterval(interval);
      timeIsUp();
    } else if (input.style.backgroundColor == "green") {
      clearInterval(interval);
    }
  }, 1000);
}

function validateUserGuess() {
  let attempts = Number(document.getElementById("numOfLives").innerText);
  let userNum = Number(document.forms["userForm"]["userGuess"].value);
  let levelDesc = document.getElementById("level");
  let comment = document.getElementById("comment");
  let level = 0;
  let inputBlock = document.getElementById("userGuess");
  // window.alert("d");
  if (random === userNum) {
    inputBlock.style.backgroundColor = "green";
    setTimeout(function () {
      inputBlock.style.backgroundColor = "white";
    }, 1000);

    if (levelDesc.innerText == "Easy Mode(1-50)") {
      level = 2;
    } else if (levelDesc.innerText == "Medium Mode(1-100)") {
      level = 3;
    } else if (levelDesc.innerText == "Hard Mode(1-1000)") {
      level = 4;
    }

    changeLevel(level);
    timeTesto(60);

    comment.innerText = "";
  } else if (random < userNum) {
    setInterval(function () {
      comment.innerText = "Your number is too high";
      attempts++;
      document.getElementById("numOfLives").innerText = attempts;
    }, 1000);
  } else if (random > userNum) {
    setInterval(function () {
      comment.innerText = "Your number is too low";
      attempts++;
      document.getElementById("numOfLives").innerText = attempts;
    }, 1000);
  }
  // window.alert("d");
}

function generateNewUnkown(max1) {
  let min = 1;
  let max = max1;
  random = Math.floor(Math.random() * (max - min) + min);
}

function changeLevel(level) {
  let levelDesc = document.getElementById("level");
  switch (level) {
    case 1:
      levelDesc.innerText = "Easy Mode(1-50)";
      generateNewUnkown(50);
      break;
    case 2:
      levelDesc.innerText = "Medium Mode(1-100)";
      generateNewUnkown(100);
      break;
    case 3:
      levelDesc.innerText = "Hard Mode(1-1000)";
      generateNewUnkown(1000);
      break;
    default:
      levelDesc.innerText = "Master Mode(1-10000)";
      generateNewUnkown(10000);
      break;
  }
}

function timeIsUp() {
  let reps = 5;
  let hiddenNumberElement = document.getElementById("body");
  let interval = setInterval(function () {
    hiddenNumberElement.style.backgroundColor = "red";
    setTimeout(function () {
      hiddenNumberElement.style.backgroundColor = "white";
    }, 100);
    --reps;
    if (reps == 0) {
      clearInterval(interval);
    }
  }, 500);
}
