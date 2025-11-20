// TASK - 1
// *Make a counter*

let h1 = document.querySelector("h1");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");

let a = 0;

inc.addEventListener("click", function () {
  a++;
  if (a >= 0) {
    h1.innerHTML = a;
  } else {
    h1.innerHTML = a=0;
  }
});

dec.addEventListener("click", function () {
  a--;
  if (a >= 0) {
    h1.innerHTML = a;
  } else {
    h1.innerHTML = a=0;
  }
});
