"use strict";

// selecting inputs
const inputs = document.querySelectorAll(".controls input"); // returns a nodeList

function handleUpdate() {
  console.log(`you changed ${this.name} to ${this.value}`);
  const suffix = this.dataset.sizing || "";
  // adding property to each element with new values
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// adding event listener to each input using forEach
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
