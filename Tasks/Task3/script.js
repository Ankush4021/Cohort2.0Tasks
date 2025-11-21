//when user clicks on button create h1, put random quote in it (from array), give them random position, rotation, scale, color(optional) and append them to parent

let main = document.querySelector("main");
let btn = document.querySelector("button");

const arr = [
  "JS is Love",
  "Sheriyans is Best",
  "Code is Life",
  "Debugging is Fun",
  "Learning is Power",
  "Practice Makes Perfect",
  "Frontend is Awesome",
  "Design is Magic",
  "Logic is Everything",
  "Coding is Therapy",
  "Projects Make Experts",
  "Consistency is Key",
];

btn.addEventListener("click", function () {
  let h1 = document.createElement("h1");
  let x = Math.random() * 90;
  let y = Math.random() * 90;
  let rot = Math.random() * 360;
  let scale = Math.random() * 3;
  let random = Math.floor(Math.random() * arr.length);

  h1.innerHTML = arr[random];
  h1.style.color = "white";
  h1.style.position = "absolute";
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = rot + "deg";
  h1.style.scale = scale;

  main.appendChild(h1);
});
