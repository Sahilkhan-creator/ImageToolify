const compressBtn = document.getElementById("compress-btn");
const fileInput = document.getElementById("compress-input");
const qualitySlider = document.getElementById("quality");
const qualityValue = document.getElementById("quality-value");

qualitySlider.addEventListener("input", function() {
    qualityValue.textContent = this.value;
});

compressBtn.addEventListener("click", function() {
    const file = fileInput.files[0];
    if (!file) return alert("Please select an image!");

    // Display original size
    const originalSizeKB = (file.size / 1024).toFixed(2);
    document.getElementById("original-size").innerText = "Original Size: " + originalSizeKB + " KB";

    // Parse slider value correctly
    const quality = parseFloat(qualitySlider.value);

    new Compressor(file, {
        quality: quality,
        success(result) {
            // Display compressed size
            const compressedSizeKB = (result.size / 1024).toFixed(2);
            document.getElementById("compressed-size").innerText = "Compressed Size: " + compressedSizeKB + " KB";

            // Create download link
            const link = document.createElement("a");
            link.href = URL.createObjectURL(result);
            link.download = "compressed_" + file.name;
            link.textContent = `Download (${compressedSizeKB} KB)`;
            link.style.display = "block";
            link.style.marginTop = "10px";

            const infoDiv = document.getElementById("info");
            const oldLink = infoDiv.querySelector("a");
            if(oldLink) oldLink.remove();
            infoDiv.appendChild(link);
        },
        error(err) {
            alert("Compression failed: " + err.message);
        }
    });
});
