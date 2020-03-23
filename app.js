let initialNumber = 0;
let buttonClicked = null;

function incrementTimer() {
  let secondsPlus = initialNumber++;
  console.log(secondsPlus);
}

function startTimer() {
  keepTime = setInterval(incrementTimer, 1000);
  buttonClicked = true;
  console.log(buttonClicked);
}

function stopTimer() {
  if ((buttonClicked = true)) {
    buttonClicked = false;
    clearTimeout(keepTime);
    initialNumber = 0;
  }
}
