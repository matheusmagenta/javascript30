// selecting items
const slider = document.querySelector(".items"); // div that surrounds everything
let isDown = false; // flag variable (if i'm clicking or not)
let startX;
let scrollLeft;

// setting event listeners
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  // getting click location
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousedown", (e) => {
  if (!isDown) return; // stop the function from running
  //console.count("is down");
  e.preventDefault(); // avoid selecting unexpected elements
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // how far we deviate from initial point ||| (x - startX) * 2 = twice quicker
  slider.scrollLeft = scrollLeft - walk;
});
