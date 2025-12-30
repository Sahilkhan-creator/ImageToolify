function compressImage() {
  const file = document.getElementById("compress-input").files[0];
  if (!file) return alert("Select an image");

  new Compressor(file, {
    quality: 0.7,
    success(result) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(result);
      link.download = "compressed_" + file.name;
      link.click();
    },
    error(err) {
      alert("Compression failed: " + err.message);
    },
  });
}
