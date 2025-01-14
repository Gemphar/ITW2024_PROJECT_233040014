document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const toggleAudioButton = document.getElementById("toggle-audio");

    toggleAudioButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            toggleAudioButton.textContent = "Pause Music";
        } else {
            audio.pause();
            toggleAudioButton.textContent = "Play Music";
        }
    });
});
