// Using jsPDF (already included in your HTML)
function convertToPDF() {
  const input = document.getElementById("image-to-pdf-input");
  if (!input.files[0]) return alert("Select an image");

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const img = new Image();
    img.src = e.target.result;
    img.onload = function () {
      const width = pdf.internal.pageSize.getWidth();
      const height = (img.height * width) / img.width;
      pdf.addImage(img, "JPEG", 0, 0, width, height);
      pdf.save("converted.pdf");
    };
  };
  reader.readAsDataURL(file);
}
