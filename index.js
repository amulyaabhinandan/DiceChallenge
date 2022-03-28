//for 1st image
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generating random numbers from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //for generating random images from 1-6

var randomImageSource = "images/" + randomDiceImage; //taking random images from 1-6

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//for 2nd image(shortcut way by combing lines)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player 1 wins
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

// if player 2 wins
else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

//draw case
else
  document.querySelector("h1").innerHTML = "Draw!";
