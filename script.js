document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".trigger-jumpscare"); // Tombol trigger
  const video = document.getElementById("jumpscare-video");

  // Fungsi untuk memutar video jumpscare dalam fullscreen
  function playJumpscareFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }

    // Memulai video
    video.style.display = "block";
    video.play();

    // Keluar fullscreen setelah video selesai
    video.onended = function () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      video.style.display = "none"; // Sembunyikan video
    };
  }

  // Event listener untuk tombol
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      playJumpscareFullscreen();
    });
  });
});
