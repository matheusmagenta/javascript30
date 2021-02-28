// selecting arrow and speed
const arrow = document.querySelector("arrow");
const speed = document.querySelector("speed");

// adding event listeners
navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading})deg`;
  },
  (err) => {
    console.error(err);
    alert("it is necessary allow the geolocation monitoring");
  }
);
