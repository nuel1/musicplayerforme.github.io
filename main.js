"use strict";
// Global variable declared:
const audio = document.createElement("audio");
const btn_wrapper = document.querySelector(".play-btn");
const form_container = document.querySelector(".container");
const form = document.querySelector(".form-wrapper");
const model = document.querySelector(".model--songs");
const duration_slider = document.querySelector(".seek_slider");
const volume_slider = document.querySelector(".volume_slider");
const total_duration = document.querySelector(".duration-end");
const curr_time = document.querySelector(".duration-start");
const bigCover_playlist = document.querySelector(".cover--js");
const counterBox = document.querySelector("#counter");
const sideBar = document.querySelector(".side-bar-slide--js");
const page_container = document.querySelector(".main");
// const
let markedSongs = 0;

const hp = new (function () {
  this.switchClass = function (element, former, current) {
    element.classList.replace(former, current);
    return this;
  };
  this.toggleSwitch__pause_play = function (element, btn_class) {
    btn_class === "play" &&
      !(function () {
        element.setAttribute("title", "Pause");
        element.children[0].style.display = "none";
        element.children[1].style.display = "block";
        return false;
      })(),
      !btn_class &&
        !(function () {
          element.setAttribute("title", "Play");
          element.children[0].style.display = "block";
          element.children[1].style.display = "none";
          return true;
        })();
    return this;
  };
})();

const tabs = new (function () {
  (this.home = document.querySelector("section.home")),
    (this.playlists = document.querySelector(
      "section.multiple-playlist--container"
    )),
    (this.search = document.querySelector("section.search-result-wrapper")),
    (this.album = document.querySelector("section.single-album-section")),
    (this.recent = document.querySelector("section.recent-play")),
    (this.playlist = document.querySelector(
      "section.single-playlist--container"
    ));
})();

class Song {
  constructor(song, artist, src, duration, genre, album, song_cover) {
    this.song = song;
    this.artist = artist;
    this.src = src;
    this.duration = duration;
    this.genre = genre;
    this.album = album;
    this.song_cover = song_cover;
  }
}

class CHANGSONGCOVER {
  constructor() {
    this.cover_art = document.querySelector(".song-cover-art");
    this.song_info = {
      song_title: document.querySelector(".song-info .song-name"),
      artist: document.querySelector(".song-info .artist"),
    };
  }
  change(target) {
    this.cover_art.style.backgroundImage = `url(${songs[target].song_cover.small.src})`;
    this.song_info.song_title.textContent = `${songs[target].song}`;
    this.song_info.artist.textContent = `${songs[target].artist}`;
  }
}

const content = new CHANGSONGCOVER();

class Player {
  playTrack() {
    audio.play();
  }
  pauseTrack() {
    audio.pause();
  }
  nextTrack() {
    const curr_track = audio.getAttribute("src");
    let n;
    songs.forEach((obj) => obj.src === curr_track && (n = songs.indexOf(obj)));
    n++;
    if (n > songs.length - 1) {
      n = 0;
      audio.setAttribute("src", `${songs[n].src}`);
      content.change(n);
    } else {
      audio.setAttribute("src", `${songs[n].src}`);
      content.change(n);
    }
    audio.setAttribute("autoplay", "true");
    autoNextTrack();
  }
  previousTrack() {
    const curr_track = audio.getAttribute("src");
    let n;
    songs.forEach((obj) => obj.src === curr_track && (n = songs.indexOf(obj)));
    n--;
    if (n < 0) {
      n = 0;
      audio.setAttribute("src", `${songs[n].src}`);
      content.change(n);
    } else {
      audio.setAttribute("src", `${songs[n].src}`);
      content.change(n);
    }
    audio.setAttribute("autoplay", "true");
    autoNextTrack();
  }

  repeatTrack(n) {
    audio.setAttribute("loop", n);
  }

  shuffleTracks() {
    const rand = Math.floor(Math.random() * songs.length);
    content.change(rand);
    audio.setAttribute("src", `${songs[rand].src}`);
    audio.setAttribute("autoplay", "true");
  }
}

const player = new Player();

const a = new Song(
  "Heatbeat",
  "Daniela Andrade",
  "songs/Daniela-Andrade-Heartbeats.mp3",
  "4:08",
  "Unknown",
  "DANIELA ANDRADE",
  {
    small: {
      src: "img/small_cover/1.png",
    },
    large: {
      src: "img/large_cover/1.png",
    },
  }
);

const b = new Song(
  "Darkside",
  "Alan Walker(feat. Au-Ra and Tomine Harket)",
  "songs/Alan Walker - Darkside (feat. Au-Ra and Tomine Harket) (320  kbps).mp3",
  "3:59",
  "Unknown",
  "Best of Alan Walker",
  {
    small: {
      src: "img/small_cover/2.png",
    },
    large: {
      src: "img/large_cover/2.png",
    },
  }
);

const c = new Song(
  "Quite Miss Home",
  "James Arthur",
  "songs/James Arthur - Quite Miss Home.mp3",
  "4:16",
  "Unknown",
  "JAMES ARTHUR",
  {
    small: {
      src: "img/small_cover/3.png",
    },
    large: {
      src: "img/large_cover/3.png",
    },
  }
);

const d = new Song(
  "What I Miss Most",
  "Calum Scott",
  "songs/DOWNLOAD- What I Miss Most mp3 (Video & Lyrics) - Calum Scott - Gospel Key.mp3",
  "4:03",
  "Unknown",
  "CALUM SCOTT",
  {
    small: {
      src: "img/small_cover/4.png",
    },
    large: {
      src: "img/large_cover/4.png",
    },
  }
);

const e = new Song(
  "Thurderclouds",
  "Sia",
  "songs/LSD - Thunderclouds (Official Video) ft. Sia, Diplo, Labrinth (320  kbps).mp3",
  "3:15",
  "Unknown",
  "SIA",
  {
    small: {
      src: "img/small_cover/5.png",
    },
    large: {
      src: "img/large_cover/5.png",
    },
  }
);

const f = new Song(
  "I Will Follow You Into The Dark",
  "Daniela Andrade",
  "songs/Daniela-Andrade-I-Will-Follow-You-into-the-Dark.mp3",
  "3:23",
  "Unknown",
  "DANIELA ANDRADE",
  {
    small: {
      src: "img/small_cover/6.png",
    },
    large: {
      src: "img/large_cover/6.png",
    },
  }
);

const g = new Song(
  "I Wanna Remember",
  "Carrie Underwoods",
  "songs/NEEDTOBREATHE - I Wanna Remember mp3 Download.mp3",
  "3:34",
  "Unknown",
  "CARRIE UNDERWOODS",
  {
    small: {
      src: "img/small_cover/7.png",
    },
    large: {
      src: "img/large_cover/7.png",
    },
  }
);

const h = new Song(
  "Snowman",
  "Sia",
  "songs/Sia - Snowman mp3 mp4 (Video & Lyrics) Christmas Song.mp3",
  "2:52",
  "Unknown",
  "SIA",
  {
    small: {
      src: "img/small_cover/8.png",
    },
    large: {
      src: "img/large_cover/8.png",
    },
  }
);

const i = new Song(
  "Alone, Pt. II",
  "Alan Walker & Ava Max",
  "songs/Alan Walker & Ava Max - Alone, Pt. II (320  kbps).mp3",
  "4:05",
  "Unknown",
  "Best of Alan Walker",
  {
    small: {
      src: "img/small_cover/9.png",
    },
    large: {
      src: "img/large_cover/9.png",
    },
  }
);

const j = new Song(
  "Forever After All",
  "Luke Combs",
  "songs/Luke Combs - Forever After All mp3 Download Audio.mp3",
  "3:59",
  "Unknown",
  "LUKE COMBS",
  {
    small: {
      src: "img/small_cover/10.png",
    },
    large: {
      src: "img/large_cover/10.png",
    },
  }
);

const k = new Song(
  "Touch",
  "Daniela Andrade",
  "songs/Daniela-Andrade-Touch.mp3",
  "4:39",
  "Unknown",
  "DANIELA ANDRADE",
  {
    small: {
      src: "img/small_cover/11.png",
    },
    large: {
      src: "img/large_cover/11.png",
    },
  }
);

const l = new Song(
  "Here",
  "Alessia Cara",
  "songs/Alessia Cara - Here (Official Video) (320  kbps).mp3",
  "3:30",
  "Unknown",
  "World of Alessia Cara",
  {
    small: {
      src: "img/small_cover/12.png",
    },
    large: {
      src: "img/large_cover/12.png",
    },
  }
);

const songs = [a, b, c, d, e, f, g, h, i, j, k, l].reduce((arr, obj) => {
  const that = obj;
  that.date = (function () {
    const date = new Date();
    const year = date.getFullYear();

    return year.toString();
  })();
  arr.push(obj);
  return arr;
}, []);

const album = (function () {
  // get all album names in all
  // object in song array

  let albumNames = [];
  songs.forEach((obj) => {
    for (let i of Object.keys(obj)) i === "album" && albumNames.push(obj[i]);
  });

  albumNames = removeDuplicate(albumNames);

  return (function (b) {
    albumNames.forEach((n) => {
      b[n] = [];
      for (let obj of songs)
        for (let i of Object.keys(obj))
          i === "album" && obj[i] === n && b[n].push(obj);
    });
    return b;
  })({});
})();

const pageLoader = (function () {
  return function (
    page,
    page_title,
    l = document.querySelector(".page-loader")
  ) {
    let counter = 0;
    const timeOut = [10, 30, 40, 53, 70, 60];
    const randomTimeOut = timeOut[Math.floor(Math.random() * timeOut.length)];
    l.style.display = "block";
    const id = setInterval(() => {
      if (counter === randomTimeOut)
        clearInterval(id),
          resetLoaderPosition(counter),
          (page.style.display = "block"),
          scrollTo(0, 0),
          true &&
            new (function () {
              document.querySelector(".title--js").style.display = "block";
              document.querySelector(
                ".title--js"
              ).textContent = `${page_title}`;
            })();
      else counter += 1;

      l.style.width = `${counter}%`;
    }, 0);

    const resetLoaderPosition = (distanceX) => {
      l.style.display = "none";
      const id = setInterval(() => {
        distanceX === 0 ? clearInterval(id) : (distanceX -= 1);
        l.style.width = `${distanceX}%`;
      }, 0);
    };
  };
})();

const tabEvents = {
  pageSwitcher: function (tabName, title) {
    for (let tab of Object.keys(tabs))
      if (tab !== tabName)
        (tabs[tab].style.display = "none"),
          tabs[tab].classList.replace("refreshed", "loaded");
      else
        pageLoader(tabs[tab], title),
          tabs[tab].classList.replace("loaded", "refreshed");
  },

  home: {
    target: document.querySelector("#home"),
    page: tabs.home,
    action: function () {
      this.target.addEventListener("click", () => {
        tabEvents.pageSwitcher("home", "Home");
      });
      return tabEvents;
    },
  },

  playlists: {
    target: document.querySelector("#playlists"),
    page: tabs.playlists,
    action: function () {
      this.target.addEventListener("click", () => {
        tabEvents.pageSwitcher("playlists", "Playlists");
      });
      return tabEvents;
    },
  },

  recent: {
    target: document.querySelector("#recent"),
    page: tabs.recent,
    action: function () {
      this.target.addEventListener("click", () => {
        tabEvents.pageSwitcher("recent", "Recent plays");
      });
      return tabEvents;
    },
  },

  search: {
    input: document.querySelector("#search"),
    onclick: {
      target: document.querySelector("#search--icon"),
      page: tabs.search,
      action: function () {
        this.target.addEventListener("click", () => {
          tabEvents.pageSwitcher(
            "search",
            `Search for "${tabEvents.search.input.value}"`
          );
          search(tabEvents.search.input.value);
        });
        return tabEvents;
      },
    },
    onkeydown: {
      target: document.querySelector("#search--form"),
      page: tabs.search,
      action: function () {
        this.target.addEventListener("submit", (e) => {
          e.preventDefault();
          tabEvents.pageSwitcher(
            "search",
            `Search for "${tabEvents.search.input.value}"`
          );
          search(tabEvents.search.input.value);
        });
        return tabEvents;
      },
    },
  },

  album: {
    page: tabs.album,
    action: function (album_name) {
      const ul = document.querySelector(".single-album-section .song-list");
      if (ul.children.length) ul.innerHTML = "";
      songs.forEach((obj) => {
        for (let key of Object.keys(obj))
          key === "album" &&
            obj[key] === album_name &&
            template.songs[`${songs.indexOf(obj)}`].html(ul);
      });
      tabEvents.pageSwitcher("album", `${album_name}`);
      return tabEvents;
    },

    playAlbum: function (album_name) {
      const tab = document.querySelector(".single-album-section");
      const sectionTitle = document.querySelector(".title--js");
      const sections = [...document.querySelectorAll("section")];

      sections.forEach(
        (section) =>
          !section.classList.contains(`${tab.classList[0]}`) &&
          (section.style.display = "none")
      );

      tab.style.display = "block";
      tab.classList.contains("loaded") &&
        tab.classList.replace("loaded", "refreshed");
      sectionTitle.textContent = `${album_name}`;

      const ul = document.querySelector(".single-album-section .song-list");
      ul.children.length && (ul.innerHTML = "");

      songs.forEach((obj) => {
        for (let key of Object.keys(obj))
          key === "album" &&
            obj[key] === album_name &&
            template.songs[`${songs.indexOf(obj)}`].html(ul);
      });

      audio.setAttribute(
        "src",
        `${(function (c) {
          for (let obj of songs) {
            for (let key of Object.keys(obj)) {
              if (key === "album") {
                if (obj[key] === album_name) {
                  c(obj["src"]);
                  return obj["src"];
                }
              }
            }
          }
        })(function (value) {
          songs.forEach((obj) => {
            for (let key of Object.keys(obj))
              key === "src" &&
                obj[key] === value &&
                changeSongInfo(songs.indexOf(obj));
          });
        })}`
      );

      btn_wrapper.classList.contains("play") &&
        hp
          .toggleSwitch__pause_play(btn_wrapper, "play")
          .switchClass(btn_wrapper, "play", "pause");
      player.playTrack();
      recentPlays(audio.getAttribute("src"));
    },
  },
};

tabEvents.home
  .action()
  .recent.action()
  .playlists.action()
  .search.onclick.action()
  .search.onkeydown.action();

window.addEventListener("load", () => {
  const initialSongOnPageLoad_getTitle = document
    .querySelector(".song-name")
    .textContent.trim();
  songs.forEach((obj) => {
    for (let key of Object.keys(obj))
      key === "song" &&
        obj[key] === initialSongOnPageLoad_getTitle &&
        audio.setAttribute("src", `${obj["src"]}`);
  });
  recentPlays(audio.getAttribute("src"));

  const homeSection = document.querySelector(".home");

  homeSection.classList.contains === "loaded" &&
    setTimeout(
      () => homeSection.classList.replace("loaded", "refreshed"),
      2000
    );
});

{
  btn_wrapper.addEventListener("click", () => {
    if (btn_wrapper.classList.contains("play"))
      player.playTrack(),
        hp
          .toggleSwitch__pause_play(btn_wrapper, "play")
          .switchClass(btn_wrapper, "play", "pause");
    else
      player.pauseTrack(),
        hp
          .toggleSwitch__pause_play(btn_wrapper, null)
          .switchClass(btn_wrapper, "pause", "play");
  });
}

const [
  song_title,
  song_artist,
  song_albumName,
  song_date,
  song_duration,
  album_title,
  song_in_album,
] = [
  (t) => songs[t].song,
  (a) => songs[a].artist,
  (ab) => songs[ab].album,
  (d) => songs[d].date,
  (dr) => songs[dr].duration,
  (at) => {
    for (let key of Object.keys(album)) {
      if (key === at) return key;
    }
  },
  (s) => {
    let counter = 0;
    songs.forEach((obj) => obj["album"] === s && counter++);

    return counter > 1 ? `${counter} Songs` : `${counter} Song`;
  },
];

function changeSongInfo(target) {
  content.change(target);
}

const setAudio = (() => {
  return (n) => {
    btn_wrapper.classList.contains("play") &&
      hp
        .toggleSwitch__pause_play(btn_wrapper, "play")
        .switchClass(btn_wrapper, "play", "pause");

    audio.setAttribute("src", `${songs[n].src}`);

    player.playTrack();

    changeSongInfo(n);

    recentPlays(audio.getAttribute("src"));
  };
})();

const playAudio__in__RECENT = (songSource) => {
  btn_wrapper.classList.contains("play") &&
    hp
      .toggleSwitch__pause_play(btn_wrapper, "play")
      .switchClass(btn_wrapper, "play", "pause");

  audio.setAttribute("src", `${songSource}`);

  player.playTrack();
};

(function () {
  const [prev, next, btn_wrapper, shuffle_btn, repeat_btn] = [
    document.querySelector(".back-btn"),
    document.querySelector(".forward-btn"),
    document.querySelector(".play-btn"),
    document.querySelector(".suffle-btn"),
    document.querySelector(".loop-btn"),
  ];

  prev.addEventListener("click", () => {
    btn_wrapper.classList.contains("play") &&
      hp
        .toggleSwitch__pause_play(btn_wrapper, "play")
        .switchClass(btn_wrapper, "play", "pause");

    shuffle_btn.getAttribute("title") === "Shuffle: off"
      ? player.previousTrack()
      : player.shuffleTracks();

    recentPlays(audio.getAttribute("src"));
  });
  next.addEventListener("click", () => {
    btn_wrapper.classList.contains("play") &&
      hp
        .toggleSwitch__pause_play(btn_wrapper, "play")
        .switchClass(btn_wrapper, "play", "pause");

    shuffle_btn.getAttribute("title") === "Shuffle: off"
      ? player.nextTrack()
      : player.shuffleTracks();

    recentPlays(audio.getAttribute("src"));
  });

  shuffle_btn.addEventListener("click", () => {
    if (shuffle_btn.getAttribute("title") === "Shuffle: off")
      shuffle_btn.setAttribute("title", "Shuffle: on"),
        (shuffle_btn.style.background = "rgba(0, 0, 0, 0.09)");
    else
      shuffle_btn.setAttribute("title", "Shuffle: off"),
        (shuffle_btn.style.background = "transparent");
  });

  repeat_btn.addEventListener("click", () => {
    if (repeat_btn.getAttribute("title") === "Loop: off")
      repeat_btn.setAttribute("title", "Loop: on"),
        (repeat_btn.style.background = "rgba(0, 0, 0, 0.09)"),
        player.repeatTrack("true");
    else
      repeat_btn.setAttribute("title", "Loop: off"),
        (repeat_btn.style.background = "transparent"),
        player.repeatTrack("false");
  });
})();

function recentPlays(recent) {
  const ul = document.querySelector(".recents");
  const currentSong = recent;
  const songSource = (function () {
    for (let obj of songs)
      for (let key of Object.keys(obj))
        if (key === "src") if (obj[key] === currentSong) return obj;
  })();
  const n = {
    artist_name: () => songSource.artist,
    title: () => songSource.song,
    cover: () => songSource.song_cover.large.src,
    time: () => {
      const date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      let currentTime = (function () {
        if (min < 10) min = "0" + min;
        if (hour > 12) hour = hour - 12;
        return date.getHours > 11 ? `${hour}:${min}am` : `${hour}:${min}pm`;
      })();
      return currentTime;
    },
  };

  const tem = {
    buildTem: () =>
      ` <li><div class="cover--js cover--recent" style="background-image: url(${n.cover()});"><button class="play-btn--js" onclick="playAudio__in__RECENT('${
        songSource.src
      }');"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg>   </button></div><div class="song-info--recent"><div class="tag--artist"><span id="title">Artist:</span><span>${n.artist_name()}</span></div><div class="tag--title"><span id="title">Title:</span><span>${n.title()}</span></div><div class="tag--time"><span id="title">Time played:</span><span id="time-played">${n.time()}</span></div></div></li>`,
  };

  ul.innerHTML = `${tem.buildTem()}` + ul.innerHTML;
  const d = !(function () {
    !!ul.children.length;
  })();
  d &&
    !ul.children[0].classList.add("hidden") &&
    !setTimeout(() => ul.children[0].classList.replace("hidden", "added"), 300);
}

console.log(song_artist(0));

const template = {
  songs: {
    0: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          0
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          0
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          0
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          0
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          0
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(0);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    1: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          1
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          1
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          1
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          1
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          1
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(1);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    2: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          2
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          2
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          2
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          2
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          2
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(2);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    3: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          3
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          3
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          3
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          3
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          3
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(3);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    4: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          4
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          4
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          4
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          4
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          4
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(4);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    5: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          5
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          5
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          5
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          5
        )}</p></div><div class="genre"><p>Unknown</p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          5
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(5);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    6: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          6
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          6
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          6
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          6
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          6
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(6);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    7: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          7
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          7
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          7
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          7
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          7
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(7);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    8: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          8
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          8
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          8
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          8
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          8
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(8);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    9: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          9
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          9
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          9
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          9
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          9
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(9);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    10: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          10
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          10
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          10
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          10
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          10
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(10);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },

    11: {
      html: function (parent) {
        parent.innerHTML += `<li class="layout--table"> <div class="table-col-1 layout--flex"> <div class="flex-col-1 layout--flex"><div class="flex-item--lg layout--flex"><div class="marker"></div><div class="song-title"><p>${song_title(
          11
        )}</p></div></div><div class="flex-item--sm"><div class="artist"><p>${song_artist(
          11
        )}</p></div></div></div><div class="flex-col-2 layout--flex"><div class="album"><p>${song_albumName(
          11
        )}</p></div></div></div><div class="table-col-2"><div class="song-info-wrapper layout--flex"><div class="info-col1 layout--flex"><div class="date"><p>${song_date(
          11
        )}</p></div><div class="genre"><p>Unknown </p></div></div><div class="info-col2"><div class="song-duration"><p>${song_duration(
          11
        )}</p></div></div></div></div><div class="song-plate-play-btn-wrapper" onclick= "setAudio(11);"><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </span></div></li>`;
      },
    },
  },
  album: {
    "Best of Alan Walker": {
      html: function (parent) {
        parent.innerHTML += `<div class="slider-box layout--flex hover-effect" onclick="tabEvents.album.action('Best of Alan Walker')"><button class="play-btn--js" onclick="tabEvents.album.playAlbum('Best of Alan Walker')"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg>   </button><div class="album-name--js"><p>${album_title(
          "Best of Alan Walker"
        )}</p><span>${song_in_album("Best of Alan Walker")}</span></div>`;
      },
    },
    "World of Alessia Cara": {
      html: function (parent) {
        parent.innerHTML += `<div class="slider-box layout--flex hover-effect" onclick="tabEvents.album.action('World of Alessia Cara')"><button class="play-btn--js" onclick="tabEvents.album.playAlbum('World of Alessia Cara')"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg>   </button><div class="album-name--js"><p>${album_title(
          "World of Alessia Cara"
        )}</p><span>${song_in_album("World of Alessia Cara")}</span></div>`;
      },
    },
    "DANIELA ANDRADE": {
      html: function (parent) {
        parent.innerHTML += `<div class="slider-box layout--flex hover-effect" onclick="tabEvents.album.action('DANIELA ANDRADE')"><button class="play-btn--js" onclick="tabEvents.album.playAlbum('DANIELA ANDRADE')"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg>   </button><div class="album-name--js"><p>${album_title(
          "DANIELA ANDRADE"
        )}</p><span>${song_in_album("DANIELA ANDRADE")}</span></div>`;
      },
    },
    "JAMES ARTHUR": {
      html: function (parent) {
        parent.innerHTML += `<div class="slider-box layout--flex hover-effect" onclick="tabEvents.album.action('JAMES ARTHUR')"><button class="play-btn--js" onclick="tabEvents.album.playAlbum('JAMES ARTHUR')"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg>   </button><div class="album-name--js"><p>${album_title(
          "JAMES ARTHUR"
        )}</p><span>${song_in_album("JAMES ARTHUR")}</span></div>`;
      },
    },
    "CARRIE UNDERWOODS": {
      html: function (parent) {
        parent.innerHTML += `<div class="slider-box layout--flex hover-effect" onclick="tabEvents.album.action('CARRIE UNDERWOODS')"><button class="play-btn--js" onclick="tabEvents.album.playAlbum('CARRIE UNDERWOODS')"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg>   </button><div class="album-name--js"><p>${album_title(
          "CARRIE UNDERWOODS"
        )}</p><span>${song_in_album("CARRIE UNDERWOODS")}</span></div>`;
      },
    },
    SIA: {
      html: function (parent) {
        parent.innerHTML += `<div class="slider-box layout--flex hover-effect" onclick="tabEvents.album.action('SIA')"><button class="play-btn--js" onclick="tabEvents.album.playAlbum('SIA')"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg>   </button><div class="album-name--js"><p>${album_title(
          "SIA"
        )}</p><span>${song_in_album("SIA")}</span></div>`;
      },
    },
    "LUKE COMBS": {
      html: function (parent) {
        parent.innerHTML += `<div class="slider-box layout--flex hover-effect" onclick="tabEvents.album.action('LUKE COMBS')"><button class="play-btn--js" onclick="tabEvents.album.playAlbum('LUKE COMBS')"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg></button><div class="album-name--js"><p>${album_title(
          "LUKE COMBS"
        )}</p><span>${song_in_album("LUKE COMBS")}</span></div>`;
      },
    },
    "CALUM SCOTT": {
      html: function (parent) {
        parent.innerHTML += `<div class="slider-box layout--flex hover-effect" onclick="tabEvents.album.action('CALUM SCOTT')"><button class="play-btn--js" onclick="tabEvents.album.playAlbum('CALUM SCOTT')"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg>   </button><div class="album-name--js"><p>${album_title(
          "CALUM SCOTT"
        )}</p><span>${song_in_album("CALUM SCOTT")}</span></div>`;
      },
    },
  },
};

!(function (...arg) {
  for (let i = 0; i < songs.length; i++) template["songs"][`${i}`].html(arg[0]);
  for (let key of Object.keys(template.album))
    template["album"][`${key}`].html(arg[1]);

  // Album cover
  const infos = document.querySelectorAll(".album-name--js");
  [
    ...infos,
    ...document.querySelectorAll(".search-result-wrapper .album-name--js"),
  ].forEach((info) => {
    // Get parent element of each info element
    // @variable {p} as parent
    let p = info.parentElement;
    // Get info first child element.
    // Use child text content as a finder to get object with a property corresponding to
    // the resulting child text content
    // @variable {ch} as child;
    let ch = info.children[0];
    songs.forEach((obj) => {
      ch.textContent.trim() === obj.album &&
        !(function () {
          p.style.backgroundImage = `url(${obj.song_cover.large.src})`;
        })();
    });
  });
})(
  document.querySelector(".song-container ul.song-list"),
  document.querySelector(".glider")
);

function search(input) {
  const ul__ALBUM = document.querySelector(".result-list");
  const ul__SONG = document.querySelector(".search-category .song-list");
  const div__RESULT = document.querySelector(".search-category");
  const div__EMPTYRESULT = document.querySelector(".no-result");
  const section__SEARCH = document.querySelector(".search-result-wrapper");

  section__SEARCH.style.display = "none";

  input = input.trim();

  if (ul__ALBUM.children.length) ul__ALBUM.innerHTML = "";
  if (ul__SONG.children.length) ul__SONG.innerHTML = "";

  const getObject = (function (b) {
    for (let obj of songs)
      for (let key of Object.keys(obj)) input === obj[key] && b.push(obj);
    return b;
  })([]);

  if (getObject && "object" === typeof [] && getObject.length) {
    div__RESULT.style.display = "block";
    div__EMPTYRESULT.style.display = "none";
  } else {
    div__RESULT.style.display = "none";
    div__EMPTYRESULT.style.display = "block";
  }

  /**** Songs search    **/
  getObject.forEach((obj) =>
    template["songs"][`${songs.indexOf(obj)}`].html(ul__SONG)
  );

  console.log(getObject);
  /**** Album search   **/
  const filteredResult = function () {
    const copy = getObject;
    copy.forEach((o) => {
      for (let i of copy) {
        if (
          Array.prototype.indexOf.call(copy, i) !==
          Array.prototype.indexOf.call(copy, o)
        ) {
          if (o.album === i.album) {
            copy.splice(copy.indexOf(i), 1);
          }
        }
      }
    });
    return copy;
  };

  for (let key of Object.keys(album))
    filteredResult
      .call(null)
      .forEach(
        (obj) =>
          key === obj.album && template["album"][`${key}`].html(ul__ALBUM)
      );

  setTimeout(() => {
    const album_result = document.querySelectorAll(".result-list .slider-box");
    album_result.forEach((e, index) => {
      e.style.backgroundImage = `url(${
        filteredResult.call(null)[index].song_cover.large.src
      })`;
    });
  }, 500);
}

(function () {
  function _pd() {}

  _pd.c = function () {
    return class BuildPlaylist {
      constructor(name) {
        (this.playlistName = name),
          (this.songs = []),
          (this.ul_El = document.querySelector(".playlist-songs .song-list")),
          (this.section_playlist = document.querySelector(
            ".single-playlist--container"
          )),
          (this.header = document.querySelector(".name--playlist")),
          (this.timeDetail = document.querySelector(
            ".playlist-details--js .time"
          ));
        Object.defineProperties(this, {
          countSongs: {
            enumerable: !(5 & 2),
            get() {
              return this.songs.length > 1
                ? `${this.songs.length} Songs `
                : `${this.songs.length} Song`;
            },
          },

          playlist: {
            enumerable: !(6 & 1),
            get() {
              !this.songs.length
                ? (this.ul_El.innerHTML = "")
                : (this.ul_El.innerHTML = "");
              this.songs.forEach((song_t) => {
                for (let obj of songs)
                  obj["song"] === song_t &&
                    template.songs[`${songs.indexOf(obj)}`].html(this.ul_El);
              });
              tabEvents.pageSwitcher("playlist", "");

              return this;
            },
          },

          changeHeader: {
            enumerable: !(9 & 2),
            get() {
              this.header.textContent = `${this.playlistName}`;
              return this;
            },
          },

          callTime: {
            enumerable: !(3 & 8),
            get() {
              let [songDur, totalMin, totalSec] = [[], "min", "sec"];
              function d(t) {
                songs.forEach(
                  (obj) =>
                    t.trim() === obj["song"] && songDur.push(obj["duration"])
                );
              }

              !this.songs.length && (this.timeDetail.textContent = `0 Song`);

              return (
                !!this.songs.length &&
                function () {
                  this.songs.forEach(d);
                  return (
                    !!songDur &&
                    function () {
                      songDur = songDur.map((str) => str.split(":"));
                      [totalMin, totalSec].forEach((t) => {
                        switch (t) {
                          case "min":
                            totalMin = songDur
                              .reduce((a, [b, _]) => a.concat(b), [])
                              .reduce((a, b) => Number(a) + Number(b));
                            break;
                          case "sec":
                            totalSec = songDur
                              .reduce((a, [_, c]) => a.concat(c), [])
                              .reduce((a, b) => Number(a) + Number(b));
                            break;
                        }
                      });

                      for (;;) {
                        if (totalSec >= 60) {
                          totalMin++;
                        } else {
                          break;
                        }
                        totalSec = totalSec - 60;
                      }

                      // ;

                      totalMin > 1
                        ? (this.timeDetail.textContent = ` ${totalMin} mins ${totalSec} sec`)
                        : (this.timeDetail.textContent = `${totalMin} min ${totalSec} sec`);
                      this.songs.length > 1
                        ? (this.timeDetail.innerHTML = `${this.songs.length} Songs <span style = "font-weight: 900; font-size: 2em">.</span> ${this.timeDetail.textContent}`)
                        : (this.timeDetail.innerHTML = `${this.songs.length} Song <span style = "font-weight: 900; font-size: 2em">.</span> ${this.timeDetail.textContent}`);

                      return this;
                    }.call(this)
                  );
                }.call(this)
              );
            },
          },

          playCurrSong: {
            enumerable: !(4 & 1),
            get() {
              !!this.songs.length &&
                !function () {
                  const firstItem = this.songs[0];

                  songs.forEach((obj, index) => {
                    firstItem === obj["song"] &&
                      (function () {
                        audio.setAttribute("src", obj["src"]),
                          player.playTrack();
                        hp.toggleSwitch__pause_play(
                          btn_wrapper,
                          "play"
                        ).switchClass(btn_wrapper, "play", "pause");
                        content.change(index);
                      })();
                  });
                }.bind(this)();
              return this;
            },
          },

          addSongs: {
            enumerable: !false,
            get() {
              let ar;
              const checkedSongs = [];
              const li = document.querySelectorAll("ul.catalogue li");

              li.forEach((li) => {
                li.className === "checked" && checkedSongs.push(li);
              });
              ar = (function () {
                var getTitle = (e) =>
                  e.children[0].children[1].children[0].textContent.trim();

                return checkedSongs.map(getTitle);
              })();

              !!ar.length && this.songs.push(...ar);

              function e() {}
              !e.cache &&
                (e.cache = function () {
                  this.ul_El.children.length && (this.ul_El.innerHTML = "");
                  this.songs = removeDuplicate(this.songs);
                }).call(this);

              this.songs.forEach((song_t) => {
                for (let obj of songs)
                  obj["song"] === song_t &&
                    template.songs[`${songs.indexOf(obj)}`].html(this.ul_El);
              });

              return this;
            },
          },

          playlistCover: {
            enumerable: !false,
            get() {
              if (!this.songs.length) return;
              for (let i of songs) {
                if (i.song === this.songs[this.songs.length - 1])
                  return i.song_cover.small.src;
              }
            },
          },
        });
      }
    };
  };

  _pd.a = (function () {
    const icon_closeFixedCover = document.querySelector(".close-window-icon");

    icon_closeFixedCover.addEventListener("click", () => {
      form.classList.contains("form--open") &&
        form.classList.replace("form--open", "form--closed");
      form.style.display = "none";
      form_container.style.display = "none";
    });

    _pd.a;
  })();

  _pd.z = (function () {
    const open_Form_i = document.querySelector(
      ".icon-box--add-playlist" || "icon-open--form"
    );
    const open_Form_t = document.querySelector(".form-trigger");

    [open_Form_i, open_Form_t].forEach((d) => {
      d.addEventListener("click", () => {
        for (let i of [form_container, form]) i.style.display = "flex";
        form.classList.replace("form--closed", "form--open");
      });
    });

    _pd.z;
  })();

  _pd.s = (function () {
    var ee, cc;
    {
      ee = function (pn, obj) {
        !ee.cache && (ee.cache = []);
        ee.cache.push(obj);
        const ul = document.querySelector(".--playlist-list");
        const temp = `<li class="layout--flex"><div class="icon"><svg id="list-play" xmlns="http://www.w3.org/2000/svg" width="21.834" height="21.853" viewBox="0 0 21.834 21.853"><rect id="Rectangle_23" data-name="Rectangle 23" width="21.834" height="21.834" fill="none"/><g id="Group_23" data-name="Group 23" transform="translate(0.91 0.91)"><g id="Group_22" data-name="Group 22"><path id="Path_31" data-name="Path 31" d="M1,1H11.007" transform="translate(-1 -1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/><path id="Path_32" data-name="Path 32" d="M1,6H11.007" transform="translate(-1 -1.451)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/><path id="Path_33" data-name="Path 33" d="M1,11H8.278" transform="translate(-1 -1.902)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/><path id="Path_34" data-name="Path 34" d="M13,12.093v8.729a1.259,1.259,0,0,0,1.986.873L21.6,17.331a1.016,1.016,0,0,0,0-1.747l-6.615-4.365A1.26,1.26,0,0,0,13,12.093Z" transform="translate(-2.083 -1.902)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/></g></g></svg> </div><div class="navigator-name"><p>${pn}</p></div></li>`;
        ul.innerHTML += temp;

        {
          [...ul.children].forEach((li, n) => {
            li.addEventListener(
              "click",
              function () {
                ee.cache[n].playlist.changeHeader.callTime;
                setPlaylistCover(cc.cache, "large");
                {
                  document.querySelector(
                    "section.single-playlist--container"
                  ).style.display = "none";
                }
              }.bind(ee.cache[n])
            );
          });
        }
      };

      cc = function (pn, obj) {
        !cc.cache && (cc.cache = []);
        cc.cache.push(obj);
        const ul = document.querySelector(".play-list-unordered-list");
        const temp = `<li><div class="song-cover--js hover-effect"><div class="icon-box layout--flex"><div class="playlist-play-btn-wrapper"><button><svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25"><path id="Polygon_3" data-name="Polygon 3" d="M10.781,2.887a2,2,0,0,1,3.437,0L23.2,17.977A2,2,0,0,1,21.482,21H3.518A2,2,0,0,1,1.8,17.977Z" transform="translate(21) rotate(90)" fill="none" stroke-width="1.5" stroke="#fff"/></svg> </button></div><div class="add-song"><button><svg xmlns="http://www.w3.org/2000/svg" width="25.397" height="25.397" viewBox="0 0 36.397 36.397"> <g id="Add" transform="translate(-10 -10)"><g id="Group_5" data-name="Group 5" transform="translate(10 10)"><path id="Path_372" data-name="Path 372" d="M46.4,30.8H30.8V46.4H25.6V30.8H10V25.6H25.6V10h5.2V25.6H46.4Z" transform="translate(-10 -10)" fill="#fff"/></g></g></svg> </button></div></div></div><div class="play-list-info"><p class="playlist-name--js">${pn}</p><span class="song-counter"></span></div></li>`;
        ul.innerHTML += temp;

        const divMsg_empty_list = document.querySelector(
          ".playlist-empty-mssg"
        );
        if (ul.children.length) divMsg_empty_list.style.display = "none";

        {
          [...ul.children].forEach((li, n) => {
            li.addEventListener(
              "click",
              function () {
                cc.cache[n].playlist.changeHeader.callTime;
                setPlaylistCover(cc.cache, "large");
              }.bind(cc.cache[n])
            );
          });
        }

        {
          const div = document.querySelectorAll(".playlist-play-btn-wrapper");
          div.forEach((d, n) => {
            d.addEventListener(
              "click",
              function () {
                cc.cache[n].playCurrSong;
              }.bind(cc.cache[n])
            );
          });

          (function () {}.call(),
            function () {
              const cd = function (n) {
                // @para {string} n

                // reset audio source path
                audio.setAttribute("src", "");

                n = n
                  ? n.textContent.trim()
                  : document
                      .querySelector(".name--playlist")
                      .textContent.trim();
                cc.cache.forEach((obj) => {
                  if (n === obj.playlistName) {
                    songs.forEach((song, index) => {
                      if (song.song === obj.songs[0]) {
                        // set new source path based on the song identified in playlist
                        audio.setAttribute("src", `${song.src}`);
                        audio.getAttribute && content.change(index);
                      }
                    });
                  }
                });
                audio.getAttribute("src")
                  ? !player.playTrack() &&
                    hp
                      .toggleSwitch__pause_play(btn_wrapper, "play")
                      .switchClass(btn_wrapper, "play", "pause")
                  : console.error("Could'nt get source path for audio");
              };

              document.querySelector(".play-btn-all").addEventListener(
                "click",
                function () {
                  cd(document.querySelector(".name--playlist"));
                }.bind(
                  (function () {
                    const t = document
                      .querySelector(".name--playlist")
                      .textContent.trim();
                    var h;
                    cc.cache.forEach((b) => {
                      if (b.playlistName === t) h = b;
                    });

                    return h
                      ? h
                      : function () {
                          return function () {
                            for (let i of cc.cache)
                              if (t === i.playlistName) return i;
                          }.call();
                        };
                  })()
                )
              );
            }.call());
        }

        {
          const span = document.querySelectorAll(".song-counter");
          span.forEach((s, n) => {
            s.textContent = `${cc.cache[n].countSongs}`;
          });
        }

        {
          const div = document.querySelectorAll(".add-song");
          [...div, document.querySelector(".add-to-btn")].forEach((d) =>
            d.addEventListener("click", sideBar_Slide)
          );
        }

        addToPlaylist(cc.cache);
      };
    }

    {
      const _d = function (a, b) {
        a && b && b.classList.contains("form--open")
          ? b.classList.replace("form--open", "form--closed")
          : b;
        [a, b].forEach((e) => (e.style.display = "none"));
      };
      document
        .querySelector(".input-wrapper")
        .addEventListener("submit", (e) => {
          e.preventDefault();
          const formTxt = document.querySelector("#form_playlist").value.trim();
          const ob = new (_pd.c())(formTxt);
          ee(formTxt, ob), cc(formTxt, ob);

          _d(form_container, form);
          document.querySelector("#form_playlist").value = "";
        });

      document
        .querySelector(".create-btn button")
        .addEventListener("click", () => {
          const formTxt = document.querySelector("#form_playlist").value.trim();
          const ob = new (_pd.c())(formTxt);
          ee(formTxt, ob), cc(formTxt, ob);

          _d(form_container, form);
          document.querySelector("#form_playlist").value = "";
        });

      document.querySelector(".close-btn").addEventListener("click", () => {
        _d && _d(form_container, form);
      });
    }

    _pd.s;
  })();
})();

function seekUpdate() {
  let position = 0;

  if (!isNaN(audio.duration)) {
    position = audio.currentTime * (100 / audio.duration);
    duration_slider.value = position;
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
    document.documentElement.style.setProperty(
      "--progress",
      `${duration_slider.value}%`
    );
  }
}

const autoNextTrack = () => {
  var currIndex;
  currIndex = (function () {
    // Defined an empty value to store function result. and returned
    // by the function
    var n;
    // get played track
    const currentTrack = audio.getAttribute("src");
    // find which obj with a property name src has currentTrack
    // value has its property value
    // console.log(currentTrack);
    songs.forEach((obj) => {
      if (obj.src === currentTrack) {
        n = songs.indexOf(obj);
      }
    });

    return n;
  })();

  // Set up a closure that increment currIndex by 1 for every
  // call triggered by any pre-defined or post defined
  // function;

  const callBack = function () {
    currIndex++;
    if (currIndex > songs.length - 1) {
      currIndex = 0;
      audio.setAttribute("src", `${songs[currIndex].src}`);
      content.change(currIndex);
    } else {
      audio.setAttribute("src", `${songs[currIndex].src}`);
      content.change(currIndex);
    }
    resetValues();
    audio.load();
    audio.setAttribute("autoplay", "true");
  };

  audio.addEventListener("ended", callBack);
};

window.addEventListener("load", autoNextTrack);

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  duration_slider.value = 0;
}

function seek_to() {
  let position = audio.duration * (duration_slider.value / 100);
  document.documentElement.style.setProperty(
    "--progress",
    `${duration_slider.value}%`
  );
  audio.currentTime = position;
}

document.documentElement.style.setProperty("--volume", "100%");
function setVolume() {
  audio.volume = volume_slider.value / 100;
  document.documentElement.style.setProperty(
    "--volume",
    `${volume_slider.value}%`
  );
  volumeStep(audio.volume);
  console.log(audio.volume);
}

function volumeStep(value) {
  const steps = ["_1", "_2", "_3"];

  if (value * 100 <= 33)
    steps.forEach((v) =>
      v != "_1"
        ? (document.querySelector(`#${v}`).style.display = "none")
        : (document.querySelector(`#${v}`).style.display = "block")
    );
  else if (value * 100 <= 66)
    steps.forEach((v) =>
      v === "_1" || v === "_2"
        ? (document.querySelector(`#${v}`).style.display = "block")
        : (document.querySelector(`#${v}`).style.display = "none")
    );
  else
    steps.forEach(
      (v) => (document.querySelector(`#${v}`).style.display = "block")
    );
}

volume_slider.addEventListener("change", setVolume);
duration_slider.addEventListener("change", seek_to);
setInterval(seekUpdate, 1000);

const displaySetup = {
  sideBar: {
    visible: () => {
      sideBar.style.display = "block";
      setTimeout(() => {
        sideBar.classList.replace("slider--out", "slider--in");
      }, 100);
    },
    hide: () => {
      sideBar.classList.replace("slider--in", "slider--out");
      setTimeout(() => {
        sideBar.style.display = "none";
      }, 310);
    },
  },
};

function sideBar_Slide() {
  sideBar.classList.contains("slider--out")
    ? displaySetup.sideBar.visible()
    : displaySetup.sideBar.hide();
}

page_container.addEventListener("click", () => {
  sideBar.classList.contains("slider--in") && displaySetup.sideBar.hide();
  resetMarked();
  setTimeout(function () {
    navigationHighlight().primary();
  }, 300);
});

function setPlaylistCover(cache, type) {
  /*
   * @para {cache} object.
   * @para {type} string.
   */
  let u = () => undefined;

  switch (type) {
    case "large":
      u = (e = bigCover_playlist) => {
        const playlistTitle = document.querySelector(".name--playlist");
        cache.forEach((obj) => {
          if (obj.playlistName === playlistTitle.textContent.trim()) {
            if (obj.playlistCover) {
              (e.style.backgroundImage = `url(${obj.playlistCover})`),
                (e.style.backgroundSize = "cover"),
                (e.style.backgroundRepeat = "no-repeat"),
                (e.style.backgroundPosition = "center");
            } else {
              e.style.backgroundImage = "";
              e.style.backgroundColor = "var(--white-300)";
            }
          }
        });
      };
      break;
    case "small":
      const ul = document.querySelector(".play-list-unordered-list");
      const covers = [...ul.children];
      u = () => {
        covers.forEach(function (c, n) {
          (function () {
            if (cache[n].playlistCover) {
              (c.children[0].style.background = `url(${cache[n].playlistCover})`),
                (c.children[0].style.backgroundSize = "cover"),
                (c.children[0].style.backgroundPosition = "center"),
                (c.children[0].style.backgroundRepeat = "no-repeat");
            }
          }.call(cache[n]));
        });
      };

      break;
  }

  u();
}

function addToPlaylist(cache) {
  /*
   * @para {cache} object.
   */
  const btn_add = document.querySelector(".add");

  var tt;
  btn_add.addEventListener(
    "click",
    function () {
      const cp = document.querySelector(".name--playlist").textContent.trim();
      for (let i of cache)
        cp === i["playlistName"] &&
          (function () {
            tt = i;
          })();
      tt.addSongs.callTime;
      setPlaylistCover(cache, "large");
      setPlaylistCover(cache, "small");
      sideBar.classList.contains("slider--in") && displaySetup.sideBar.hide();
      resetMarked();
    }.bind(tt)
  );

  countCurrPlaylistSong(cache);
}

function countCurrPlaylistSong(cache) {
  [...document.querySelectorAll(".song-counter")].forEach(
    (s, n) => (s.textContent = `${cache[n].countSongs}`)
  );
}

function hightlightMarked() {
  // Get parent list
  const ul = document.querySelector("ul.catalogue");
  // Get all children
  const ls = ul.children;

  [...ls].forEach((li) => {
    li.addEventListener("click", function () {
      if (this.className !== "checked") {
        this.className = "checked";
        countMarked.call(this);
      } else {
        this.className = "";
        countMarked.call(this);
      }
    });
  });
}

function countMarked() {
  this.className === "checked" ? markedSongs++ : markedSongs--;
  counterBox.textContent = `${markedSongs}`;
}

function resetMarked() {
  markedSongs = 0;
  counterBox.textContent = "0";

  !(function () {
    const ul = document.querySelector("ul.catalogue");
    [...ul.children].forEach(
      (li) => (li.className = "checked" ? (li.className = "") : void 0)
    );
  })();
}

function navigationHighlight() {
  const sections = {
    primary() {
      const tabs = "Home_Recent_Search_Playlists".split("_");
      const title = document.querySelector(".title--js");
      const e_home = document.getElementById("home");
      const e_recent = document.getElementById("recent");
      const e_playlist = document.getElementById("playlists");
      const ul_playlists = document.querySelector(".--playlist-list");

      if (!!title.textContent) {
        let [a, b, c, d] = [void 0, void 0, void 0, void 0];
        const titleContent = tabs
          .map((t) => {
            if (title.textContent.trim().includes(t)) {
              return t;
            }
          })
          .join("");

        (a = tabs[0]), (b = tabs[1]), (c = tabs[2]), (d = tabs[3]);

        function highlight(target, h, r, p) {
          [h, r, p].forEach((e) => {
            if (e.getAttribute("id") === target.toLowerCase()) {
              e.style.borderLeft = "3px solid var(--blue-700)";
            } else {
              e.style.borderLeft = "3px solid transparent";
            }
          });
        }

        switch (titleContent) {
          case a:
            highlight(a, e_home, e_recent, e_playlist);
            break;
          case b:
            highlight(b, e_home, e_recent, e_playlist);
            break;
          case c:
            highlight(c, e_home, e_recent, e_playlist);
            break;
          case d:
            highlight(d, e_home, e_recent, e_playlist);
            break;
        }

        [...ul_playlists.children].forEach(
          (li) => (li.style.borderLeft = "3px solid transparent")
        );
      } else {
        [e_home, e_recent, e_playlist].forEach(
          (e) => (e.style.borderLeft = "3px solid transparent")
        );
        this.secondary();
      }
    },
    secondary() {
      const title = document.querySelector(".name--playlist");
      const ul_playlists = document.querySelector(".--playlist-list");
      const playlistsNameContainers =
        document.querySelectorAll(".--playlist-list p");
      const titleContent = title.textContent.trim("");
      [...playlistsNameContainers].forEach((t, index) => {
        if (t.textContent.trim("") === titleContent) {
          ul_playlists.children[index].style.borderLeft =
            "3px solid var(--blue-700)";
        } else {
          ul_playlists.children[index].style.borderLeft =
            "3px solid transparent";
        }
      });
    },
  };

  return sections;
}

function removeDuplicate(arr) {
  const copy = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) copy[i] === copy[j] && delete copy[j];
    }
  }
  return copy.filter((c) => c);
}

hightlightMarked();

function highlightPlayed() {
  const songTitles = document.querySelectorAll(".song-title p");
  const songPlates = document.querySelectorAll(".song-list li");
  const currPlayed = document.querySelector(".song-name");
  const songTitleList = [];
  songTitleList.push(
    ...(function (a) {
      songTitles.forEach((t) => {
        a.push(t.textContent);
      });
      return a;
    })([])
  );

  songTitles.forEach((p, index) => {
    if (p.textContent.trim() === currPlayed.textContent.trim()) {
      [...songPlates][index].style.color = "var(--blue-700)";
    } else {
      [...songPlates][index].style.color = "var(--primary-color)";
    }
  });
}
setInterval(highlightPlayed, 0);
