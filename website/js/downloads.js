function openDownloadModal(files) {
  const modal = document.getElementById("downloadModal");
  const list = document.getElementById("downloadFileList");

  list.innerHTML = "";

  files.forEach(file => {
    const li = document.createElement("li");
    li.textContent = file;
    li.dataset.path = file; // store the path for downloading
    list.appendChild(li);
  });

  modal.classList.remove("hidden");
}

function closeDownloadModal() {
  document.getElementById("downloadModal").classList.add("hidden");
}

// FINAL VERSION — ZIP DOWNLOAD
async function confirmDownload() {
  const list = document.getElementById("downloadFileList");
  const files = [...list.children].map(li => li.dataset.path);

  const zip = new JSZip();

  for (const path of files) {
    const response = await fetch(path);
    const blob = await response.blob();
    zip.file(path.split('/').pop(), blob);
  }

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "PC-Stand-Files.zip");

  closeDownloadModal();
}
