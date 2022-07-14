const btn = document.getElementById("btn");
const advice = document.getElementById("advice");
const adviceId = document.getElementById("adviceId");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice").then((response) => {
    const res = response.json();
    res.then((res) => {
      advice.innerText = `${res.slip.advice}`;
      adviceId.innerText = `${res.slip.id}`;
    });
  });
});
