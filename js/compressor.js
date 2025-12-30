function compressImage() {
    const input = document.getElementById('compress-input');
    if (input.files.length === 0) {
        alert("Please select an image!");
        return;
    }

    const img = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgElement = new Image();
        imgElement.src = e.target.result;

        imgElement.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = imgElement.width / 2;  // Compression scale
            canvas.height = imgElement.height / 2;
            ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(function(blob) {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'compressed.jpg';
                link.click();
            }, 'image/jpeg', 0.6); // Quality: 0.6
        }
    };

    reader.readAsDataURL(img);
}
