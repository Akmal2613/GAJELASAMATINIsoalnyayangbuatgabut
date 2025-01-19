document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".trigger-jumpscare");
  const video = document.getElementById("jumpscare-video");

  // Fungsi untuk meminta fullscreen di browser
  function requestFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    }
  }

  // Fungsi untuk memainkan jumpscare
  function playJumpscare() {
    if (video) {
      video.style.display = "block"; // Tampilkan video
      video.play(); // Mainkan video
      requestFullScreen(video); // Minta fullscreen

      // Hentikan jumpscare setelah video selesai
      video.addEventListener("ended", () => {
        video.style.display = "none"; // Sembunyikan video
        document.exitFullscreen(); // Keluar dari fullscreen
      });
    }
  }

  // Tambahkan event listener ke semua tombol
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playJumpscare();
    });
  });
});
