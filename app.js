const btn = document.getElementById("btn");
const advice = document.getElementById("advice");
const adviceId = document.getElementById("adviceId");
const dice = document.getElementById("dice");
const adviceText = document.getElementById("advice-text");
const lines = document.querySelectorAll(".box-line");
let delay = false;

btn.addEventListener("click", () => {
  if (delay === false) {
    delay = true;
    animateCSS(dice, "flip");
    fetch("https://api.adviceslip.com/advice").then((response) => {
      const res = response.json();
      res.then((res) => {
        advice.innerText = `${res.slip.advice}`;
        adviceId.innerText = `${res.slip.id}`;
      });
    });
    animateCSS(adviceText, "fadeIn");
    animateCSS(adviceId, "flipInX");
    lines.forEach((line) => {
      line.classList.toggle("on-line");
    });
    setTimeout(offDelay, 2000);
  }
});

function offDelay() {
  delay = false;
  lines[0].classList.toggle("on-line");
  lines[1].classList.toggle("on-line");
}

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;

    element.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    element.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
