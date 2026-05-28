function openDownloadModal(files) {
  const modal = document.getElementById("downloadModal");
  const list = document.getElementById("downloadFileList");

  list.innerHTML = "";

  files.forEach(file => {
    const li = document.createElement("li");
    li.textContent = file;
    list.appendChild(li);
  });

  modal.classList.remove("hidden");
}

function closeDownloadModal() {
  document.getElementById("downloadModal").classList.add("hidden");
}

function confirmDownload() {
  alert("Download functionality will be added later.");
  closeDownloadModal();
}
