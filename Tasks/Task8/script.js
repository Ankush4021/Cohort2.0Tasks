var arr = [
  {
    dp: "https://i.pinimg.com/736x/aa/47/14/aa471486542babee83718f2f1567ebce.jpg",
    story:
      "https://i.pinimg.com/736x/75/5c/19/755c192e30da5984e3a55f9f64b0de97.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/3f/f2/73/3ff2738302527a52f8fd298b08de1df1.jpg",
    story:
      "https://i.pinimg.com/1200x/e1/a6/57/e1a65710b6019fbe063a5fa94afa7c6b.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/24/b2/8a/24b28af13637de24d6ecef7354da4a3e.jpg",
    story:
      "https://i.pinimg.com/1200x/83/af/b8/83afb8d34e7610b8ae14cc87d17931f5.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/1c/24/19/1c2419b7128513cde4ec3836660a9709.jpg",
    story:
      "https://i.pinimg.com/1200x/44/60/d3/4460d343a336234c9ecb9a81433be6ee.jpg",
  },
  {
    dp: "https://i.pinimg.com/1200x/bc/45/5f/bc455f4eca0e2337301a0aede63a7f0f.jpg",
    story:
      "https://i.pinimg.com/736x/50/11/59/501159f536ca42a9a46fe81a528872f3.jpg",
  },
  {
    dp: "https://i.pinimg.com/1200x/a2/3c/2f/a23c2ffabfd29030b4d1f4c392f6b174.jpg",
    story:
      "https://i.pinimg.com/1200x/4b/b4/99/4bb499b3d3ef8de2db6cb72d2521b3ad.jpg",
  },
];

var story = document.querySelector(".story");
var fullScreen = document.querySelector(".full-screen");
var clutter = "";

arr.forEach(function (elem, indx) {
  clutter += `<div class="stories">
                    <img id = ${indx} src="${elem.dp}" alt=""> 
                </div>`;
});

story.innerHTML = clutter;

story.addEventListener("click", function (dets) {
  fullScreen.style.display = "block";
  fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(() => {
    fullScreen.style.display = "none";
  }, 3000);
});

var caption = document.querySelector(".caption-text");
var btn = document.querySelector(".see-more-btn");

btn.addEventListener("click", function () {
  caption.classList.toggle("expanded");

  if (caption.classList.contains("expanded")) {
    btn.innerText = "See Less";
  } else {
    btn.innerText = "See More";
  }
});

var heart = document.querySelector("#heart");
var likeHeart = document.querySelector(".heart");
var img = document.querySelector(".post img");

img.addEventListener("dblclick", function () {
  likeHeart.style.opacity = 1;
  likeHeart.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  setTimeout(() => {
    likeHeart.style.transform = "translate(-50%, -250%) scale(1) rotate(60deg)";
  }, 700);

  setTimeout(() => {
    likeHeart.style.opacity = 0;
  }, 900);

  setTimeout(() => {
    likeHeart.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1100);

  heart.style.color = "red";
  heart.style.webkitTextStroke = "0";
});

var flag = 0;
heart.addEventListener("click", function () {
  if (flag == 0) {
    heart.style.color = "red";
    heart.style.webkitTextStroke = "0";
    flag = 1;
  } else {
    heart.style.color = "white";
    heart.style.webkitTextStroke = "1.5px black";
    flag = 0;
  }
});
