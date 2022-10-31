// explore.js

window.addEventListener('DOMContentLoaded', init);

// function init() {
//   const voiceSelect = document.getElementById('voice-select');
//   const synth = window.speechSynthesis;
//   let voices = synth.getVoices();
//   const selectedVoice = voices[0].name;

//   for (let i = 0; i < voices.length ; i++) {
//     const option = document.createElement('option');
//     option.textContent = `${voices[i].name} (${voices[i].lang})`;

//     // if (voices[i].default) {
//     //   option.textContent += ' — DEFAULT';
//     // }

//     //option.setAttribute('data-lang', voices[i].lang);
//     //option.setAttribute('data-name', voices[i].name);
//     voiceSelect.appendChild(option);
//   }

//   voiceSelect.addEventListener('change', function(event) {
//     selectedVoice = `${event.target.value}`;
//     console.log(`${event.target.value}`);
//   }) 

//   const playBtn = document.getElementsByTagName("button");
//   playBtn[0].addEventListener('click', function() {
//     //if(audio != undefined) { 
//       let userTxt = document.getElementById("text-to-speak").value;
//       const utter = new SpeechSynthesisUtterance(userTxt.value);
//       for (let i = 0; i < voices.length ; i++) {
//         if (voices[i].name === selectedVoice) {
//           utter.voice = voices[i];
//         }
//       }
//       synth.speak(utter);
//     //}
//   }) 

// }