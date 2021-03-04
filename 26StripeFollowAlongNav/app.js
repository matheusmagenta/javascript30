// selecting elements
const triggers = document.querySelectorAll(".cool > li");
const background = documen.querySelector(".dropdownBackground");
const nav = documen.querySelector(".top");

// handling events
function handleEnter() {
  console.log("enter");
  // adding classes
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  // implementing background
  background.classList.add("open");
  // find dropdown dinamically
  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    // location with navcoords
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  console.log("leave");
  // removing classes
  this.classList.remove("trigger-enter", "trigger-enter-active");
  // removing background
  background.classList.remove("open");
}

//  listening events
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
