const reelsData = [
  {
    username: "travel_ank",
    video: "./videos/video1.mp4",
    likeCount: 12400,
    shareCount: 320,
    commentCount: 145,
    isFollowed: true,
    isLiked: true,
    ismuted: true,
    caption: "Chasing sunsets around the world 🌍✨",
    profilePic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    username: "foodiefam",
    video: "./videos/video2.mp4",
    likeCount: 8600,
    shareCount: 210,
    commentCount: 97,
    isFollowed: false,
    isLiked: false,
    ismuted: true,
    caption: "Street food > fancy food 😋",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    username: "fit_journey",
    video: "./videos/video3.mp4",
    likeCount: 15890,
    shareCount: 540,
    commentCount: 180,
    isFollowed: true,
    isLiked: false,
    ismuted: true,
    caption: "No days off 💪",
    profilePic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  },
  {
    username: "artsy_lens",
    video: "./videos/video4.mp4",
    likeCount: 5200,
    shareCount: 140,
    commentCount: 75,
    isFollowed: false,
    isLiked: true,
    ismuted: true,
    caption: "Finding beauty in everyday moments 🎨",
    profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    username: "techguru",
    video: "./videos/video5.mp4",
    likeCount: 20450,
    shareCount: 620,
    commentCount: 330,
    isFollowed: true,
    isLiked: true,
    ismuted: true,
    caption: "Latest gadget unboxed 🔥",
    profilePic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    username: "style_vibes",
    video: "./videos/video6.mp4",
    likeCount: 9900,
    shareCount: 290,
    commentCount: 122,
    isFollowed: false,
    isLiked: false,
    ismuted: true,
    caption: "Summer street style inspo 👗",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    username: "daily_quotes",
    video: "./videos/video7.mp4",
    likeCount: 7300,
    shareCount: 480,
    commentCount: 60,
    isFollowed: true,
    isLiked: true,
    ismuted: true,
    caption: "Your vibe attracts your tribe ✨",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    username: "wander_with_me",
    video: "./videos/video8.mp4",
    likeCount: 17600,
    shareCount: 510,
    commentCount: 210,
    isFollowed: true,
    isLiked: false,
    ismuted: true,
    caption: "Road trips & good music 🚗🎶",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    username: "dancefloor",
    video: "./videos/video9.mp4",
    likeCount: 13400,
    shareCount: 370,
    commentCount: 148,
    isFollowed: false,
    isLiked: true,
    ismuted: true,
    caption: "When the beat drops 💃",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    username: "memeking",
    video: "./videos/video10.mp4",
    likeCount: 42100,
    shareCount: 890,
    commentCount: 410,
    isFollowed: true,
    isLiked: true,
    ismuted: true,
    caption: "This is too relatable 😂",
    profilePic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    username: "nature_daily",
    video: "./videos/video5.mp4",
    likeCount: 11200,
    shareCount: 250,
    commentCount: 98,
    isFollowed: false,
    isLiked: false,
    ismuted: true,
    caption: "Peace in the mountains 🌄",
    profilePic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
  },
  {
    username: "coffee.vibes",
    video: "./videos/video3.mp4",
    likeCount: 6400,
    shareCount: 120,
    commentCount: 45,
    isFollowed: true,
    isLiked: true,
    ismuted: true,
    caption: "Coffee makes everything better ☕",
    profilePic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  },
  {
    username: "pet_story",
    video: "./videos/video2.mp4",
    likeCount: 28500,
    shareCount: 670,
    commentCount: 256,
    isFollowed: true,
    isLiked: true,
    ismuted: true,
    caption: "My dog stealing the spotlight 🐶",
    profilePic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
  },
  {
    username: "makeup.magic",
    video: "./videos/video1.mp4",
    likeCount: 9100,
    shareCount: 280,
    commentCount: 101,
    isFollowed: false,
    isLiked: false,
    ismuted: true,
    caption: "Soft glam for the win ✨",
    profilePic: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
  },
  {
    username: "coding.diaries",
    video: "./videos/video4.mp4",
    likeCount: 11800,
    shareCount: 410,
    commentCount: 195,
    isFollowed: true,
    isLiked: true,
    ismuted: true,
    caption: "Debugging at 2 AM like 😵‍💫",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

var allReels = document.querySelector(".all-reels");

function MyReels() {
  var sum = "";

reelsData.forEach(function (elem, idx) {
  sum = sum +
    
  `          
      <div class="reel">
        <video 
          class = "main-video" 
          autoplay
          loop
          muted
          playsinline
          id = "video-${idx}" src="${elem.video}">
        </video>

        <div class="bottom">
          <div class="user">
            <img src="${elem.profilePic}">
            <h4>${elem.username}</h4>
            <button data-id = ${idx} class = "follow">
                ${elem.isFollowed ? "Unfollow" : "Follow"}
            </button>
          </div>
            <h3>${elem.caption}</h3>
        </div>

        <div class="top">
          <div data-id="${idx}" class="play">
            <i class="ri-pause-mini-line"></i>
          </div>
          <div data-id="${idx}" class="volume">
          ${elem.ismuted
             ? '<i class="ri-volume-mute-line"></i>'
              : '<i class="ri-volume-up-line"></i>'
            } 
          </div>
        </div>

        <div class="right">
          <div data-id = ${idx} class="like">
            <h4 class = "like-icon icon"> 
            ${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>'
            : '<i class="icon ri-heart-3-line"></i>'}</h4>
            <h6>${elem.likeCount}</h6>
          </div>
                        
          <div class="comment">
            <h4 class = "comment-icon icon"><i class="icon ri-chat-3-line"></i></h4>
            <h6>${elem.commentCount}</h6>
          </div>
                        
          <div class="share">
            <h4 class = "share-icon icon"><i class="icon ri-share-forward-line"></i></h4>
            <h6>${elem.shareCount}</h6>
          </div>  
                        
          <div class="menu">
            <h4 class = "menu-icon icon"><i class="icon ri-more-2-fill"></i></h4>
          </div>
        </div>
      </div>
    `;

    allReels.innerHTML = sum;
  });
}

MyReels();

let soundEnabled = false;

function handleReelChange(activeIndex) {

// 🔇 Mute all videos
document.querySelectorAll(".main-video").forEach(video => {
    video.muted = true;
  });

  // 🔇 Reset data mute state
  reelsData.forEach(reel => reel.ismuted = true);

  // 🔇 All icons mute
  document.querySelectorAll(".volume i")
    .forEach(icon => icon.className = "ri-volume-mute-fill");

  // ✅ If sound enabled → only active reel unmute
  if (soundEnabled) {

    const activeVideo = document.getElementById("video-" + activeIndex);

    if (!activeVideo) return;

    activeVideo.muted = false;
    reelsData[activeIndex].ismuted = false;

    const icon = document.querySelector(
      `[data-id="${activeIndex}"].volume i`
    );

    if (icon) icon.className = "ri-volume-up-line";
  }
}

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const reelDiv = entry.target;
      const video = reelDiv.querySelector(".main-video");

      const id = video.id.split("-")[1];

      handleReelChange(Number(id));

    }

  });

}, { threshold: 0.6 });

document.querySelectorAll(".reel").forEach(reel => {
  observer.observe(reel);
});


allReels.addEventListener("click", function (dets) {

  //  LIKE
  if (dets.target.closest(".like")) {

    var btn = dets.target.closest(".like");
    var id = btn.dataset.id;

    if (!reelsData[id].isLiked) {
      reelsData[id].likeCount++;
      reelsData[id].isLiked = true;
    } else {
      reelsData[id].likeCount--;
      reelsData[id].isLiked = false;
    }

    // Correct reel only
    btn.querySelector("h6").textContent = reelsData[id].likeCount;

    btn.querySelector("i").className = reelsData[id].isLiked
      ? "love ri-heart-3-fill"
      : "icon ri-heart-3-line";
  }



  //  FOLLOW
  if (dets.target.closest(".follow")) {

    var btn = dets.target.closest(".follow");
    var id = btn.dataset.id;

    reelsData[id].isFollowed = !reelsData[id].isFollowed;

    btn.textContent = reelsData[id].isFollowed
      ? "Unfollow"
      : "Follow";
  }



  // MUTE / UNMUTE
  if (dets.target.closest(".volume")) {

    const btn = dets.target.closest(".volume");
    const id  = btn.dataset.id;

    // // toggle global sound
    soundEnabled = !soundEnabled;

    // // apply behaviour on clicked reel
    handleReelChange(id);
  }

  // PLAY /  PAUSE
  if (dets.target.closest(".play")) {

    var btn = dets.target.closest(".play");
    var id = btn.dataset.id;

    var video = document.getElementById("video-" + id);

    if (video.paused) {
      video.play();
      btn.innerHTML = `<i class="ri-pause-mini-line"></i>`;
    } else {
      video.pause();
      btn.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    }
  }

});


