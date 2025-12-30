// Make sure you included jsPDF library in your HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

async function convertToPDF() {
    const input = document.getElementById("image-to-pdf-input");
    if (input.files.length === 0) {
        alert("Please select an image!");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const imgData = e.target.result;

        const img = new Image();
        img.src = imgData;
        img.onload = function () {
            const imgWidth = 190; // PDF width
            const imgHeight = (img.height * imgWidth) / img.width;
            doc.addImage(img, 'JPEG', 10, 10, imgWidth, imgHeight);
            doc.save("converted.pdf");
        };
    };

    reader.readAsDataURL(file);
                }
