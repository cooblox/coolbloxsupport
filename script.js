document.addEventListener('DOMContentLoaded', function() {
  const revealEmailLink = document.getElementById('reveal-email');
  const videoModal = document.getElementById('video-modal');
  const closeButton = document.querySelector('.close-button');
  const laughingCatVideo = document.getElementById('laughing-cat-video');

  revealEmailLink.addEventListener('click', function(event) {
    event.preventDefault();
    videoModal.style.display = "block";
    laughingCatVideo.play();
  });

  closeButton.addEventListener('click', function() {
    videoModal.style.display = "none";
    laughingCatVideo.pause();
    laughingCatVideo.currentTime = 0; // Reset video to start
  });

  window.addEventListener('click', function(event) {
    if (event.target == videoModal) {
      videoModal.style.display = "none";
      laughingCatVideo.pause();
      laughingCatVideo.currentTime = 0; // Reset video to start
    }
  });

  // Listen for video end event
  laughingCatVideo.addEventListener('ended', function() {
    // Reload the page when the video ends
    location.reload();
  });
});
