function convertToPDF() {
    const files = document.getElementById('imageInput').files;
    if(files.length === 0) {
        alert("Please select images!");
        return;
    }
    alert("This is a demo: You can integrate jsPDF to generate PDF from images.");
}
