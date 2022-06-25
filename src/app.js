import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function allTogether() {
  //Choice a random icon
  let generateRandomSuit = () => {
    let suit = ["♥", "♦", "♠", "♣"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
  };

  //Store results
  var text = generateRandomNumber();
  var symbol = generateRandomSuit();

  //if the card is red
  if (symbol == "♦" || symbol == "♥") {
    const colorTop = document.querySelector(".top-icon").style;
    const colorNumber = document.querySelector(".number").style;
    const colorBottom = document.querySelector(".bottom-icon").style;
    colorTop.color = "red";
    colorNumber.color = "red";
    colorBottom.color = "red";
  } else {
    const colorTop = document.querySelector(".top-icon").style;
    const colorNumber = document.querySelector(".number").style;
    const colorBottom = document.querySelector(".bottom-icon").style;
    colorTop.color = "black";
    colorNumber.color = "black";
    colorBottom.color = "black";
  }
  function generateRandomNumber() {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
  }

  document.querySelector(".top-icon").innerHTML = symbol;
  document.querySelector(".number").innerHTML = text;
  document.querySelector(".bottom-icon").innerHTML = symbol;
}

window.onload = () => {
  allTogether();
};

//button
let boton = document.querySelector(".btn");
boton.addEventListener("click", allTogether);
//choice a random number or letter
