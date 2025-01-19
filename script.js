function triggerJumpscare() {
    const jumpscareContainer = document.querySelector('.jumpscare-container');
    const video = document.querySelector('#jumpscare-video');
    
    // Tampilkan jumpscare
    jumpscareContainer.style.display = 'flex';
    video.play();

    // Hentikan jumpscare setelah video selesai
    video.onended = () => {
        jumpscareContainer.style.display = 'none';
    };
}
