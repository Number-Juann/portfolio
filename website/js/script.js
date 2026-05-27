let drawings = window.projectDrawings || [];
let currentIndex = 0;

function openDrawing(index) {
  currentIndex = index;
  document.getElementById("drawingPDF").src = drawings[currentIndex];
  document.getElementById("drawingModal").classList.remove("hidden");
}

function closeDrawing() {
  document.getElementById("drawingModal").classList.add("hidden");
}

function nextDrawing() {
  currentIndex = (currentIndex + 1) % drawings.length;
  document.getElementById("drawingPDF").src = drawings[currentIndex];
}

function prevDrawing() {
  currentIndex = (currentIndex - 1 + drawings.length) % drawings.length;
  document.getElementById("drawingPDF").src = drawings[currentIndex];
}
