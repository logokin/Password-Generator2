const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let greenButton = document.querySelector(".body--button");
let buttonOne = document.querySelector(".body--section-passwordOne");
let buttonTwo = document.querySelector(".body--section-passwordTwo");
let input = document.getElementById("input");

// let randomItem=characters[random];
// console.log(randomItem);
function show() {
  let passwordLenght = input.value;
  return passwordLenght;
}
function ran() {
  let random1 = Math.floor(Math.random() * characters.length);
  // let random2=Math.floor(Math.random()*characters.length );
  return characters[random1];
}
console.log(ran());
greenButton.addEventListener("click", function () {
  let buttonOneText = "";
  let buttonTwoText = "";

  for (let i = 0; i < show(); i++) {
    buttonOneText += ran();
    buttonTwoText += ran();
  }
  buttonOne.textContent = buttonOneText;
  buttonTwo.textContent = buttonTwoText;
});
