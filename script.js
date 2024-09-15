<script>
    const playIcon = document.getElementById('play-icon');
    const video = document.getElementById('video');
    const videoPoster = document.getElementById('video-poster');

    playIcon.addEventListener('click', function() {
        // Hide the image and show the video
        videoPoster.style.display = 'none'; // Hide the poster image
        video.style.display = 'block'; // Show the video
        video.play(); // Play the video
    });
</script>