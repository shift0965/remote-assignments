//fetch api spotify
const client_id = "472c2a6e19774919903a6e6b10c03975";
const client_secret = "9506e6f89d8e4ae7a06b35121ae8af07";
const endpoint = "https://accounts.spotify.com/api/token";
const artist_id = "2elBjNSdBE2Y3f0j1mjrql";
let token = "";
let token_type = "";

async function fetchToken(client_id, client_secret, endpoint) {
  const tokenData = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    market: "TW",
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return tokenData;
}

async function getArtist(tokenData, artist_id) {
  const artistData = fetch(
    `https://api.spotify.com/v1/artists/${artist_id}/top-tracks?market=TW`,
    {
      headers: {
        Authorization: `${tokenData.token_type} ${tokenData.access_token}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return artistData;
}

fetchToken(client_id, client_secret, endpoint)
  .then((tokenData) => getArtist(tokenData, artist_id))
  .then((artistData) => {
    tracks = artistData.tracks;
    startMusicBox(tracks);
  });

// -------------------------------- dom js -------------------------------- //
const trackCover = document.getElementById("trackCover");
const play = document.getElementById("playButton");
const nextSong = document.getElementById("nextSong");
const lastSong = document.getElementById("lastSong");

function startMusicBox(tracks) {
  let currentTrack = 0;
  let audio = renderMusicTap(tracks[currentTrack]);

  play.addEventListener("click", function () {
    if (audio.paused) {
      startPlaying(audio);
    } else {
      stopPlaying(audio);
    }
  });

  nextSong.addEventListener("click", () => {
    stopPlaying(audio);
    currentTrack++;
    if (currentTrack >= tracks.length) {
      currentTrack = 0;
    }
    audio = renderMusicTap(tracks[currentTrack]);
  });

  lastSong.addEventListener("click", () => {
    stopPlaying(audio);
    currentTrack--;
    if (currentTrack < 0) {
      currentTrack = tracks.length - 1;
    }
    audio = renderMusicTap(tracks[currentTrack]);
  });
}

function renderMusicTap(track) {
  trackCover.src = track.album.images[1].url;
  resetRotate();
  return new Audio(track.preview_url);
}

function startPlaying(audio) {
  audio.play();
  audio.addEventListener("ended", () => {
    stopPlaying(audio);
  });
  trackCover.classList.remove("pauseAnimation");
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

function stopPlaying(audio) {
  audio.pause();
  audio.removeEventListener("ended", () => {
    stopPlaying(audio);
  });
  trackCover.classList.add("pauseAnimation");
  play.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

function resetRotate() {
  trackCover.style.animation = "none";
  trackCover.offsetHeight; /* trigger reflow */
  trackCover.style.animation = "";
}
