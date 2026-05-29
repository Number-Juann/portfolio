const resumePath = "../../resume/JuanPablo-GonzalezBendana-Resume.pdf";

function openResume() {
  const modal = document.getElementById("resumeModal");
  const iframe = document.getElementById("resumePDF");
  const download = document.getElementById("resumeDownload");
  const openNew = document.getElementById("resumeOpenNew");

  console.log("openResume called. Modal:", modal);

  if (!modal || !iframe || !download || !openNew) {
    console.error("Resume modal elements not found");
    return;
  }

  iframe.src = resumePath;
  download.href = resumePath;
  openNew.href = resumePath;

  // Tailwind way
  modal.classList.remove("hidden");
  // Hard override in case some CSS is fighting us
  modal.style.display = "flex";

  document.body.style.overflow = "hidden";
}

function closeResume() {
  const modal = document.getElementById("resumeModal");
  const iframe = document.getElementById("resumePDF");

  if (!modal || !iframe) return;

  modal.classList.add("hidden");
  modal.style.display = "none";
  iframe.src = "";
  document.body.style.overflow = "";
}

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeResume();
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  const modal = document.getElementById("resumeModal");
  if (!modal || modal.classList.contains("hidden")) return;

  const box = modal.querySelector(".relative");
  if (box && !box.contains(e.target)) closeResume();
});
