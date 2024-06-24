let hour = 0;
let sec = 0;
let min = 0;
let interval = null;

let display = document.querySelector(".stopwatch");

let starter = document.querySelector(".start");
let stoper = document.querySelector(".stop");
let reset = document.querySelector(".reset");

starter.addEventListener("click", () => {
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(startinterval, 1000);
});

stoper.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

reset.addEventListener("click", () => {
  [hour, sec, min] = [0, 0, 0];
  clearInterval(interval);
  interval = null;
  display.textContent = "00:00:00";
});

function startinterval() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hour++;
    }
  }

  display.textContent = `${String(hour).padStart(2, 0)}:${String(min).padStart(
    2,
    0
  )}:${String(sec).padStart(2, 0)}`;
}
