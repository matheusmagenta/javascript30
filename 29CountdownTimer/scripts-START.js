let countdown;

// selecting DOM displays
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

// selecting pre-setting times
const buttons = document.querySelectorAll("[data-time]");

// selecting custom form
document.costumForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log("mins: ", mins);
  timer(mins * 60);
  this.reset();
});

function timer(seconds) {
  /*   setInterval(() => {
    seconds--;
  }, 1000); */
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  console.log({ now, then });

  // assuring it begins immediately
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round(then - Date.now() / 1000);
    // check if timer should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
  // console.log({ minutes, remainderSeconds });
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `be back at ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
