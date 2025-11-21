//Make a downloading effect like this

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let inner = document.querySelector(".inner");
let p = document.querySelector("p");

let grow = 0;
btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  let num = 50 + Math.floor(Math.random()*50)
  grow = 0;
  h1.innerHTML = "0%";
  inner.style.width = "0%";
  let int = setInterval(() => {
    grow++;
    h1.innerHTML = grow + "%";
    inner.style.width = grow + "%";
  }, num);

  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    p.innerHTML = `Your File Successfully Downloaded in ${num/10} Seconds.`
  }, num*100);
});
