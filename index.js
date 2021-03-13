//Short Code

//Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //value from 1 to 6

var randomImageOne = "images/dice" + randomNumber1 +".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageOne);

// Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagetwo = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagetwo);

// Winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Won !";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Won !";
}
else{
  document.querySelector("h1").innerHTML = "Draw !";
}


// Lengthy Code

// var randomNumber1 = Math.floor((Math.random() * 5));
// randomNumber1 = 6 - randomNumber1;
//
// if (randomNumber1 === 1){
//     document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber1 === 2) {
//     document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
// }
// else if (randomNumber1 === 3){
//     document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
// }
// else if (randomNumber1 === 4){
//     document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
// }
// else if (randomNumber1 === 5){
//     document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
// }
// else {
//   document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
// }


// Second Dice

// var randomNumber2 = Math.floor((Math.random() * 5));
// randomNumber2 = 6 - randomNumber2;
//
// if (randomNumber2 === 1){
//     document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber2 === 2) {
//     document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
// }
// else if (randomNumber2 === 3){
//     document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
// }
// else if (randomNumber2 === 4){
//     document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
// }
// else if (randomNumber2 === 5){
//     document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
// }
// else {
//   document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
// }

// Winner

// if(randomNumber1 === randomNumber2){
//   document.querySelector("h1").innerHTML = "Draw !";
// }
// else if(randomNumber1 > randomNumber2){
//   document.querySelector("h1").innerHTML = "Player 1 Won !";
// }
// else {
//   document.querySelector("h1").innerHTML = "Player 2 Won !";
// }
