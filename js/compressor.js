async function compressImage() {
    const input = document.getElementById("compress-input");
    if (input.files.length === 0) {
        alert("Please select an image!");
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function () {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Reduce size by 50%
            canvas.width = img.width / 2;
            canvas.height = img.height / 2;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(function (blob) {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "compressed_" + file.name;
                link.click();
            }, "image/jpeg", 0.7); // 0.7 = 70% quality
        };
    };

    reader.readAsDataURL(file);
}
