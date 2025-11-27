var btn = document.querySelector("button");
var p = document.querySelector(".image p");

var flag = 0;

btn.addEventListener("click", () => {
  if ((flag == 0)) {
    p.innerHTML = "Friends";
    p.style.color = "green";
    btn.innerHTML = "Remove";
    flag = 1;
  }else{
    p.innerHTML = "Strangers"
    p.style.color = "red"
    btn.innerHTML = "Add Friends"
    flag = 0;
  }
});
