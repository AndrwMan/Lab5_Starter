// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //handle inital case no sudio selected
  let audio;
  //audio[0].src = document.getElementsByTagName("audio")[0].src; 
  const dropdown = document.getElementById("horn-select")
  dropdown.addEventListener('change', function(event) {
    const image = document.querySelector("img[alt]");
    image.src = `assets/images/${event.target.value}.svg`

    //document.getElementsByTagName(_ return html collection,
    //use first element
    audio = document.getElementsByTagName("audio");
    audio[0].src = `assets/audio/${event.target.value}.mp3`;
  }) 

  const playBtn = document.getElementsByTagName("button");
  playBtn[0].addEventListener('click', function() {
    audio[0].play();
    if(audio[0].src == "assets/audio/party-horn.mp3") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  }) 
}