document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".trigger-jumpscare"); // Tombol "Ambil Robux" atau sejenisnya
  const video = document.getElementById("jumpscare-video");

  // Fungsi untuk memutar video jumpscare secara fullscreen
  function playJumpscareFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen(); // Internet Explorer/Edge
    }

    // Memulai video
    video.play();

    // Event untuk mengakhiri fullscreen setelah video selesai
    video.onended = function () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // Firefox
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Chrome, Safari, Opera
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // Internet Explorer/Edge
      }
    };
  }

  // Menambahkan event listener pada tombol
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      playJumpscareFullscreen();
    });
  });
});
