const player = new Plyr('#liveStream', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'progress', 'current-time','mute','volume'
    ]
})

const campfire_sound = new Plyr('#campfire_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const waterdrip_sound = new Plyr('#waterdrip_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const raining_sound = new Plyr('#raining_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const wind_sound = new Plyr('#wind_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const bird_sound = new Plyr('#bird_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const wave_sound = new Plyr('#wave_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const japanhome_sound = new Plyr('#japanhome_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const tavern_sound = new Plyr('#tavern_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const city_sound = new Plyr('#city_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const cyberpunk_sound = new Plyr('#cyberpunk_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const forest_sound = new Plyr('#forest_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const cavern_sound = new Plyr('#cavern_sound', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'volume'
    ]
})

const player2 = new Plyr('#player2', {
	ratio: '16:9', speed: { selected: 1, options: [] }, controls: [
        'play', 'progress', 'current-time', 'mute','volume'
    ]
})

var custom2 = document.getElementById("customMusic2");
var choose2 = document.getElementById("chooseAgain2");
var custom = document.getElementById("customMusic");
var choose = document.getElementById("chooseAgain");
var japanese = document.getElementById("japanese");
var girl = document.getElementById("girl");
var anime = document.getElementById("anime");
var musicTitle = document.getElementById("musicTitle");

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

japanese.onclick = function(){
  musicTitle.textContent = 'Japanese Lofi Radio 24/7 🔴 Aesthetic Lofi Hip Hop Music 🔴 No Copyright Lofi Hip Hop Beats';
  player.source = {
    type: 'video',
    sources: [
      {
        src: 'https://www.youtube.com/watch?v=-9gEgshJUuY',
        provider: 'youtube',
      },
    ],
  };
}

anime.onclick = function(){
  musicTitle.textContent = 'anime lofi hip hop radio - 24/7 chill lofi remixes of anime';
  player.source = {
    type: 'video',
    sources: [
      {
        src: 'https://www.youtube.com/watch?v=WDXPJWIgX-o',
        provider: 'youtube',
      },
    ],
  };
}

girl.onclick = function(){
  musicTitle.textContent = 'lofi hip hop radio - beats to relax/study to';
  player.source = {
    type: 'video',
    sources: [
      {
        src: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
        provider: 'youtube',
      },
    ],
  };
}

custom.onclick = function(){
    var youtubeURL = document.getElementById('urlInput').value;
    if(youtube_parser(youtubeURL) !== false){
    var src = youtube_parser(youtubeURL);
    $.getJSON('https://noembed.com/embed',
    {dataType: 'json', url: document.getElementById('urlInput').value}, function (data) {
    var musicTitle = `${data.title}`
    $("#musicTitle").html(musicTitle)
    });;

    custom.style.display = "none";
    choose.style.display = "flex";

    player.source = {
        type: 'video',
        sources: [
          {
            src: src,
            provider: 'youtube',
          },
        ],
      };
    return(youtubeURL);
  }
}

choose.onclick = function(){
    musicTitle.textContent = 'lofi hip hop radio - beats to relax/study to';
    document.getElementById('urlInput').value = '';
    choose.style.display = "none";
    custom.style.display = "flex";
    player.source = {
        type: 'video',
        sources: [
          {
            src: '5qap5aO4i9A',
            provider: 'youtube',
          },
        ],
      };
}

custom2.onclick = function(){
  var youtubeURL = document.getElementById('urlInput2').value;
  if(youtube_parser(youtubeURL) !== false){

  custom2.style.display = "none";
  choose2.style.display = "flex";

  player2.source = {
      type: 'video',
      sources: [
        {
          src: youtubeURL,
          provider: 'youtube',
        },
      ],
    };
}
}

choose2.onclick = function(){
  document.getElementById('urlInput2').value = '';
  choose2.style.display = "none";
  custom2.style.display = "flex";
  player2.source = {
      type: 'video',
      sources: [
        {
          src: 'baCLcnS2iEg',
          provider: 'youtube',
        },
      ],
    };
}

player.on('ended', () => {
  player.restart();
});

player2.on('ended', () => {
  player.restart();
});

campfire_sound.on('ended', () => {
  player.restart();
});

waterdrip_sound.on('ended', () => {
  player.restart();
});

raining_sound.on('ended', () => {
  player.restart();
});

wind_sound.on('ended', () => {
  player.restart();
});

bird_sound.on('ended', () => {
  player.restart();
});

wave_sound.on('ended', () => {
  player.restart();
});

japanhome_sound.on('ended', () => {
  player.restart();
});

tavern_sound.on('ended', () => {
  player.restart();
});

city_sound.on('ended', () => {
  player.restart();
});

cyberpunk_sound.on('ended', () => {
  player.restart();
});

forest_sound.on('ended', () => {
  player.restart();
});

cavern_sound.on('ended', () => {
  player.restart();
});
