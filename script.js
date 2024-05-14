document.getElementById('playButton').addEventListener('click', function() {
    const sound = document.getElementById('audioPlayer');
    sound.currentTime = 0; 
    sound.play();
  });