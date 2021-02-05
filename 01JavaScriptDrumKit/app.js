"use strict";

function playSound(e) {
  const [key, audio] = document.querySelectorAll(`[data-key="${e.keyCode}"]`);
  //const audio = btn[1];
  //const key = btn[0];

  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
