function compressImage() {
  const input = document.getElementById("compressInput");
  const file = input.files[0];
  if (!file) return alert("Select an image");

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.getElementById("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "compressed.jpg";
        link.click();
      }, "image/jpeg", 0.6);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
