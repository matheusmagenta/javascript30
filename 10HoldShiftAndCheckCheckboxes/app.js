const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // console.log(e)
  let inBetween = false;
  // check if shift key is down
  // check if it is being checked
  if (e.shiftKey && this.checked) {
    // loop over each checkbox
    checkboxes.forEach((checkbox) => {
      //console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("starting to check them inbetween");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
