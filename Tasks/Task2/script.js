let arr = [
  {
    team: "RCB",
    primary: "red",
    secondary: "black",
  },

  {
    team: "MI",
    primary: "blue",
    secondary: "silver",
  },

  {
    team: "CSK",
    primary: "yellow",
    secondary: "blue",
  },

  {
    team: "SRH",
    primary: "orange",
    secondary: "black",
  },

  {
    team: "RR",
    primary: "pink",
    secondary: "darkcyan",
  },

  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },

  {
    team: "PBKS",
    primary: "crimson",
    secondary: "navy",
  },

  {
    team: "Lucknow SuperGiants",
    primary: "midnightblue",
    secondary: "orange",
  },

  {
    team: "GT",
    primary: "navyblue",
    secondary: "gold",
  },

  {
    team: "DC",
    primary: "blue",
    secondary: "red",
  },
];

let btn = document.querySelector("button");
let h2 = document.querySelector("#box h2");
let box = document.querySelector("#box");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
  let winner = arr[Math.floor(Math.random() * arr.length)];

  h2.innerHTML = winner.team;
  box.style.backgroundColor = winner.primary;
  main.style.backgroundColor = winner.secondary;
});
