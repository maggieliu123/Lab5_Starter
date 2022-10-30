// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    setHorn();
    setAudio();
}

////////////////////////// GLOBAL VARIABLES ////////////////////////////////////

// get select component
var selectOptions = document.getElementById("horn-select");

// get images
var imageLst = document.querySelectorAll('img');
var hornImg = imageLst[0];
var audioImg = imageLst[1];

// get audio
var audio = document.querySelector('audio');

// get play button
var playButton = document.querySelector('button');

// get volume slider
var volumeSlider = document.getElementById('volume');


////////////////////////// EVENT LISTENERS /////////////////////////////////////

// listen for option to be clicked, then set horn img and audio
selectOptions.addEventListener('click', setHorn);

// listen to volume slider and display volume image accordingly
volumeSlider.addEventListener('click', setAudio);

// listen for play button to be clicked and play volume accordingly
playButton.addEventListener('click', playSound);

///////////////////////////////// METHODS //////////////////////////////////////

/* sets the audio and image for horn */
function setHorn() {
    // airhorn settings for selected horn
    var selectedHorn = selectOptions.value;

    if (selectedHorn == "select") {
        hornImg.src = "assets/images/no-image.png";
        audio.src = "";
    }
    else if (selectedHorn == "air-horn") {
        hornImg.src = "assets/images/air-horn.svg";                    
        audio.src = "assets/audio/air-horn.mp3";
    }

    else if (selectedHorn == "car-horn") {
        hornImg.src = "assets/images/car-horn.svg";                    
        audio.src = "assets/audio/car-horn.mp3";
    }

    else if (selectedHorn == "party-horn") {
        hornImg.src = "assets/images/party-horn.svg";                    
        audio.src = "assets/audio/party-horn.mp3";
    }
}

/* sets audio img and volume by slider */
function setAudio() {
    // find volume level and set audio volume accordingly
    var volume = volumeSlider.value;
    audio.volume = volume/100;
    // set audio icon according to volume level
    if (volume == 0) {
        audioImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume < 33) {
        audioImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume < 67) {
        audioImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
        audioImg.src = "assets/icons/volume-level-3.svg";
    }
    
}

/* plays audio of horn */
function playSound() {
    var selectedHorn = selectOptions.value;
    // if party horn is selected, add confetti
    if (selectedHorn == "party-horn") {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
    }
    if (selectedHorn != "select") {
        audio.play();
    }
}


