window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");

recognition.addEventListener("result", (e) => {
  // console.log(e);
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  // inserting in the DOM
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
  // could trigger function
  if (transcript.includes("unicorn")) {
    console.log("uhuuuuuuuuuuuuuuuuuu");
  }
});
recognition.addEventListener("end", recognition.start);
recognition.start();
