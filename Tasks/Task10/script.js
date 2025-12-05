addEventListener("mousemove", function (e) {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

var para = document.querySelector("p");
const text = para.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxytz";

let iteration = 0;
let intervalId;

function randomText() {
  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return characters.split("")[
        Math.floor(Math.random() * characters.length)
      ];
    })
    .join("");
  para.innerText = str;
  iteration += 0.25;

  if (iteration >= text.length) {
    clearInterval(intervalId);
    para.innerText = text;
  }
}

para.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  iteration = 0;

  intervalId = setInterval(randomText, 20);
});
