// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    populateVoiceSelection();
    if (typeof synthesis !== 'undefined' && synthesis.onvoiceschanged !== undefined) {
        synthesis.onvoiceschanged = populateVoiceSelection;
    }
}
//////////////////////// GLOBAL VARIABLES /////////////////////////////////////

var synthesis = window.speechSynthesis;
var voiceList = synthesis.getVoices();
var selectVoice = document.getElementById('voice-select');
var talkButton = document.querySelector('button');
var inputText = document.getElementById('text-to-speak');
var face = document.querySelector('img');

///////////////////////// EVENT LISTENERS //////////////////////////////////////

talkButton.addEventListener('click', speak);
// talkButton.addEventListener('click', changeFace);

/////////////////////////// METHODS //////////////////////////////////////

/* Load voices into select voice list */
function  populateVoiceSelection() {
    voiceList = synthesis.getVoices();
    console.log(voiceList);
    for (let i = 0; i < voiceList.length; i++) {
        const newVoice = document.createElement('option');
        const optionText = document.createTextNode(voiceList[i].name);
        newVoice.setAttribute('data-lang', voiceList[i].lang);
        newVoice.setAttribute('data-name', voiceList[i].name);
        newVoice.append(optionText);
        selectVoice.appendChild(newVoice);
    }
}

function speak() {
    // take in text to speak 
    var text = inputText.value;
    
    // get speech, change voice as needed
    const speech = new SpeechSynthesisUtterance(text);
    const selectedOption = selectVoice.value;
    for (let i = 0; i < voiceList.length ; i++) {
        if (voiceList[i].name === selectedOption) {
            speech.voice = voiceList[i];
        }
    }
    synthesis.speak(speech);
    setInterval(changeFace, 100);
    
}

function changeFace() {
    if (synthesis.speaking) {
        face.src = "assets/images/smiling-open.png";
    }
    else {
        face.src = "assets/images/smiling.png";
    }
}

function test() {
    console.log("testing...");
}