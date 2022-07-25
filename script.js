// Button click sound added
const clickSound = new Audio("sounds/click-sound.mp3");
clickSound.volume = 0.6;
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.play();
  });
});

// Functions that perform the math
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// This takes the math functions and two operands
function operate(op, a, b) {
  return window[op](a, b);
}

// This function will register the buttons when a button is pressed
const disRow1 = document.querySelector(".display-row-1");
const disRow2 = document.querySelector(".display-row-2");
const numButtons = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");

let inputArray = [];
let inputNumberOne;
let opInput;
let inputNumberTwo;
let result;

// number before the operator button is pressed or first input
for (i of numButtons) {
  i.addEventListener("click", (e) => {
    if (!opInput && !inputNumberTwo) {
      inputArray.push(e.target.value);
      inputNumberOne = +inputArray.join("");

      disRow1.textContent = inputNumberOne;
    } else if (disRow2.textContent) {
      inputNumberOne = result;
    }
  });
}

// operator function
for (i of operators) {
  i.addEventListener("click", (e) => {
    if (inputNumberOne && inputNumberTwo) {
      result = operate(opInput, inputNumberOne, inputNumberTwo);
      disRow2.textContent = result;

      opInput = e.target.value;
      inputArray = [];
      disRow1.textContent = opInput;
    } else if (inputNumberOne) {
      opInput = e.target.value;
      inputArray = [];
      disRow1.textContent = opInput;
    }
  });
}

// number after the operator button is pressed or second input
for (i of numButtons) {
  i.addEventListener("click", (e) => {
    if (inputNumberOne && opInput) {
      inputArray.push(e.target.value);
      inputNumberTwo = +inputArray.join("");
      disRow1.textContent = inputNumberTwo;
    }
  });
}

// Main calculate function
const equalButton = document.getElementById("equal-button");

equalButton.addEventListener("click", () => {
  result = operate(opInput, inputNumberOne, inputNumberTwo);
  disRow2.textContent = result;
});

// Clearing all using AC
const acButton = document.getElementById("AC-button");

acButton.addEventListener("click", () => {
  inputArray = [];
  inputNumberOne = 0;
  opInput = 0;
  inputNumberTwo = 0;
  result = 0;
  disRow1.textContent = "";
  disRow2.textContent = "";
});

// clear using C button
const cButton = document.getElementById("C-button");

cButton.addEventListener("click", () => {
  if (!opInput && !inputNumberTwo) {
    inputArray.splice(-1, 1);
    console.log(inputArray);
    inputNumberOne = +inputArray.join("");
    disRow1.textContent = inputNumberOne;
  } else if (inputNumberOne && opInput) {
    inputArray.splice(-1, 1);
    console.log(inputArray);
    inputNumberTwo = +inputArray.join("");
    disRow1.textContent = inputNumberTwo;
  }
});
