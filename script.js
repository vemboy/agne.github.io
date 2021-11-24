var x = 0
function playMusic(){
  var music = new Audio('music/agne_song.wav');
  if(x == 0){
      music.play();
  }
  if(x > 0){ 
    music.pause();
  }
  x = x + 1;
  console.log(x);
  }
