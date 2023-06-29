// console.log("hello world");
// Initialising the required variables
let songIndex = 0;
// console.log("hi"+songIndex);
let audioElement = new Audio("1.mp3");
let mainPlay = document.getElementById("mainPlay");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif_img");
let songName = document.getElementById("songName");
let duration = Array.from(document.getElementsByClassName("duration"));
let songlistItems = Array.from(
  document.getElementsByClassName("songlistItems")
);
let songs = [
  {
    songName: "Darkside",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpeg",
  },
  {
    songName: "Lily",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpeg",
  },
  {
    songName: "Goosebumps",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpeg",
  },
  {
    songName: "Fantasy",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Rockstar",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpeg",
  },
  {
    songName: "Fairytale",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
];

songlistItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.paused || audioElement.currentTime <= 0
// audioElement.play();
//initialising player functionalities;
mainPlay.addEventListener("click", () => {
  // audioElement.play();
  if (mainPlay.classList.contains("fa-circle-play")) {
    audioElement.play();
    mainPlay.classList.remove("fa-circle-play");
    mainPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    mainPlay.classList.remove("fa-circle-pause");
    mainPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//Update progress bar
audioElement.addEventListener("timeupdate", () => {
  //   console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressbar.value = progress;
  // console.log(progress);
});

progressbar.addEventListener("change", () => {
  audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
});

const allPlaying = () => {
  Array.from(document.getElementsByClassName("songCurrentPlay")).forEach(
    (element) => {
      songCurrentPlay.classList.remove("fa-circle-pause");
      songCurrentPlay.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songCurrentPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      allPlaying;
      songIndex = parseInt(e.target.id);
      // console.log(songIndex+" "+e.target);
      e.target.classList.add("fa-circle-pause");
      e.target.classList.remove("fa-circle-play");
      audioElement.src = "songs/"+songIndex+".mp3";
      audioElement.currentTime=0;
      mainSongPlay.innerText = songs[songIndex-1].songName;
      audioElement.play();
      gif.style.opacity = 1;
      mainPlay.classList.remove("fa-circle-play");
    mainPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=6){
      songIndex = 6;
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  mainSongPlay.innerText = songs[songIndex-1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  mainPlay.classList.remove('fa-play-circle');
  mainPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=1){
      songIndex = 1;
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  mainSongPlay.innerText = songs[songIndex-1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  mainPlay.classList.remove('fa-play-circle');
  mainPlay.classList.add('fa-pause-circle');
})


