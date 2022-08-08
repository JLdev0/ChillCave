let moon = document.getElementById('moon');
let mesh = document.getElementById('mesh');
let stars1 = document.getElementById('stars1');
let stars2 = document.getElementById('stars2');
let back_cliff = document.getElementById('back_cliff');
let terrain_floor = document.getElementById('terrain_floor');
let cave_inside = document.getElementById('cave_inside');
let outer_cavewall = document.getElementById('outer_cavewall');
let inner_cavewall = document.getElementById('inner_cavewall')
let inner_cave_plants = document.getElementById('inner_cave_plants')
let camp_fire = document.getElementById('outside_firecamp', 'outside_firecamp_glow')
let hola = document.getElementById('hola')
let preloader = document.getElementById('preloader')


window.addEventListener('load', function() {
  setTimeout(function(){
      hola.style.animation = 'fadeouts 1s linear';
      preloader.style.animation = 'fadeouts 1s linear'

  }, 1000)
  setTimeout(function(){
    wind_sound.volume = 0.5;
    campfire_sound.volume = 0.3;
    wind_sound.play();
    campfire_sound.play();
    $('#hola').css("display", "none");
    $('#preloader').css("display", "none");
}, 2000)
});

// Parallax Effect
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars1.style.top = value* 0.3 + 'px';
    stars2.style.top = value* 0.2 + 'px';

    mesh.style.top = value* 0.01 + 'px';
    moon.style.top = value* .5 + 'px';

    back_cliff.style.top =value* .15 + 'px';
    inner_cavewall.style.top = value* .15 + 'px';
    outer_cavewall.style.top = value* .05 + 'px';
    inner_cave_plants.style.top = value* .08 + 'px';
    camp_fire.style.top = value* .08 + 'px';
    terrain_floor.style.top = value* .08 + 'px';
})

//The Scroll after you press enter cave with smoothing animation
document.getElementById("button").onclick = function() {
    scrollPageTo(1600)
}

function scrollPageTo (to, duration=3000) {
 //t = current time
 //b = start value
 //c = change in value
 //d = duration
 const easeInOutQuad = function (t, b, c, d) {
   t /= d/2;
   if (t < 1) return c/2*t*t + b;
   t--;
   return -c/2 * (t*(t-2) - 1) + b;
 };

 return new Promise((resolve, reject) => {
   const element = document.scrollingElement;

   if (typeof to === 'string') {
     to = document.querySelector(to) || reject();
   }
   if (typeof to !== 'number') {
     to = to.getBoundingClientRect().top + element.scrollTop;
   }

   let start = element.scrollTop,
       change = to - start,
       currentTime = 0,
       increment = 20;

   const animateScroll = function() {
       currentTime += increment;
       let val = easeInOutQuad(currentTime, start, change, duration);
       element.scrollTop = val;
       if(currentTime < duration) {
           setTimeout(animateScroll, increment);
       } else {
         resolve();
       }
   };
   animateScroll();
 });
}
//Checks if you opened timer settings

var musicTitle = document.getElementById('musicTitle');

window.onscroll = function (event) {
  if(this.scrollY > 1000){
  musicTitle.style.animation = "marquee 25s linear infinite";
  wind_sound.stop();
  cavern_sound.volume = 0.25;
  cavern_sound.play();
  }
}
