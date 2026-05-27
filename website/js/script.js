const drawings = [
  "drawings/PC-Stand-Sheet-1.png",
  "drawings/PC-Stand-Sheet-2.png",
  "drawings/PC-Stand-Sheet-3.png"
];

let currentIndex = 0;

function openDrawing(index) {
  currentIndex = index;
  document.getElementById("drawingImage").src = drawings[currentIndex];
  document.getElementById("drawingModal").classList.remove("hidden");
}

function closeDrawing() {
  document.getElementById("drawingModal").classList.add("hidden");
}

function nextDrawing() {
  currentIndex = (currentIndex + 1) % drawings.length;
  document.getElementById("drawingImage").src = drawings[currentIndex];
}

function prevDrawing() {
  currentIndex = (currentIndex - 1 + drawings.length) % drawings.length;
  document.getElementById("drawingImage").src = drawings[currentIndex];
}
