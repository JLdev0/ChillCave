// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("popupButton");

var tape = document.getElementById("tape");

var sleepingbag = document.getElementById("sleeping_bag");

var campfire = document.getElementById("camp_fire");

var musicsound_Modal = document.getElementById("musicSound")

var whitesound_Modal = document.getElementById("whiteSound") 

var ambientsound_Modal = document.getElementById("ambientSound")

var inside = document.getElementById("inside");

var closeModal = document.getElementsByClassName("close");



// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal


$(document).ready(function() {
$('img').attr('draggable', false);
$('span').click(function(){
  inside.style.animation = "fadeOut 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
  musicsound_Modal.style.display = "none";
  ambientsound_Modal.style.display = "none";
  whitesound_Modal.style.display = "none";
})
});

tape.onclick = function (){
  inside.style.animation = "fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
  musicsound_Modal.style.display = "block";
  window.onclick = function(event) {
    if ((event.target == musicsound_Modal)) {
      inside.style.animation = "fadeOut 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
      musicsound_Modal.style.display = "none";
    }
  }
};

campfire.onclick = function (){
  inside.style.animation = "fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
  ambientsound_Modal.style.display = "block";
  window.onclick = function(event) {
    if ((event.target == ambientsound_Modal)) {
      inside.style.animation = "fadeOut 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
      ambientsound_Modal.style.display = "none";
    }
  }
};

sleepingbag.onclick = function (){
  inside.style.animation = "fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
  whitesound_Modal.style.display = "block";
  window.onclick = function(event) {
    if ((event.target == whitesound_Modal)) {
      inside.style.animation = "fadeOut 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
      whitesound_Modal.style.display = "none";
    }
  }
};
// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
