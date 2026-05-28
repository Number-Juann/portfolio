// Automatically detect project name from URL
const PROJECT_NAME = window.location.pathname.split("/").slice(-2, -1)[0];

function openDownloadModal(files) {
  const modal = document.getElementById("downloadModal");
  const list = document.getElementById("downloadFileList");

  list.innerHTML = "";

  files.forEach(file => {
    const li = document.createElement("li");
    li.textContent = file;
    li.dataset.path = file;
    list.appendChild(li);
  });

  modal.classList.remove("hidden");
}

function closeDownloadModal() {
  document.getElementById("downloadModal").classList.add("hidden");
}

function getFileCategory(files) {
  const ext = files[0].split('.').pop().toLowerCase();

  switch (ext) {
    case "step":
    case "x_t":
    case "x_b":
      return "CAD";
    case "stl":
      return "STL";
    case "dxf":
      return "DXF";
    case "pdf":
      return "PDF";
    case "gcode":
      return "GCode";
    default:
      return "Files";
  }
}

async function confirmDownload() {
  const list = document.getElementById("downloadFileList");
  const files = [...list.children].map(li => li.dataset.path);

  const zip = new JSZip();
  const category = getFileCategory(files);

  for (const path of files) {
    const response = await fetch(path);
    const blob = await response.blob();
    zip.file(path.split('/').pop(), blob);
  }

  const content = await zip.generateAsync({ type: "blob" });

  // Dynamic ZIP name based on folder + file type
  const zipName = `${PROJECT_NAME}-${category}-Files.zip`;

  saveAs(content, zipName);

  closeDownloadModal();
}
