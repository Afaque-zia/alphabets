var audios = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
// All Alphabets to Triger On Click Function
var alphabets = document.querySelectorAll(".card");
// Run  On KeyPress Event
document.querySelector("body").addEventListener("keypress", function name(event) {
    var audio = new Audio("./audios/"+ event.key+ ".mp3");
    audio.play();
});
// Run On Click Event
for (let i = 0; i < alphabets.length; i++) {
  alphabets[i].addEventListener("click", function playSound() {
    var audio = new Audio("./audios/" + audios[i] + ".mp3");
    audio.play();
  });
}
