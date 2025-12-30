herefunction convertToPDF() {
  const file = document.getElementById("imageInput").files[0];
  if (!file) return alert("Select an image");

  const reader = new FileReader();
  reader.onload = function(e) {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    pdf.addImage(e.target.result, 'JPEG', 10, 10, 180, 160);
    pdf.save("image.pdf");
  };
  reader.readAsDataURL(file);
}
