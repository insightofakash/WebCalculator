const clickSound = new Audio("sounds/click-sound.mp3");
clickSound.volume = 1;
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.play();
  });
});
