// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    selectHorn();
}

/* listens for the event of selecting a horn */
function selectHorn() {
    // get select component
    var selectOptions = document.getElementById("horn-select");

    // get image
    var imageLst = document.querySelectorAll('img');
    var hornImg = imageLst[0];

    // get audio
    var audio = document.querySelector('audio');

    // get play button
    var playButton = document.querySelector('button');

    // listen for option to be clicked, then set horn img and audio
    selectOptions.addEventListener('click', setHorn);
    playButton.addEventListener('click', playSound);

    /* sets the audio and image for horn */
    function setHorn() {
        // airhorn settings for selected horn
        var selectedHorn = selectOptions.value;

        if (selectedHorn == "air-horn") {
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

    /* plays audio of horn */
    function playSound() {
        audio.play();
    }
}






function test() {
    console.log("test");
}


