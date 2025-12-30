
// Function to convert images to PDF
function convertToPDF() {
    const input = document.getElementById('image-to-pdf-input');
    if (input.files.length === 0) {
        alert("Please select an image!");
        return;
    }

    const img = input.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imgData = e.target.result;
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 10, 10, 180, 160); // Adjust size
        pdf.save("converted.pdf");
    };

    reader.readAsDataURL(img);
}
