function compressImage() {
    const file = document.getElementById('compressInput').files[0];
    if(!file) {
        alert("Please select an image!");
        return;
    }
    alert("This is a demo: You can integrate Compressor.js or similar library to compress image.");
}
