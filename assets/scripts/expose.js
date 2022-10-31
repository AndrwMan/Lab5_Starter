// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //handle inital case no sudio selected
  const jsConfetti = new JSConfetti();
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
    if(audio[0].src.includes('assets/audio/party-horn.mp3')) {
      jsConfetti.addConfetti();
    }
  }) 

  const volSlider = document.getElementById("volume");
  volSlider.addEventListener('input', function(event) {
    const volIcon = document.getElementsByTagName("img");
    if( `${event.target.value}` == 0) {
      //get second image tag element in html
      volIcon[1].src = 'assets/icons/volume-level-0.svg';
    } else if ( `${event.target.value}` > 0 && `${event.target.value}` < 33) {
      console.log(event.target.value);
      volIcon[1].src = 'assets/icons/volume-level-1.svg';
    }
    else if ( `${event.target.value}` >= 33 && `${event.target.value}` < 67) {
      volIcon[1].src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volIcon[1].src = 'assets/icons/volume-level-3.svg';
    }
  }) 
}