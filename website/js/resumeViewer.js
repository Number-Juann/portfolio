// Path to your resume
const resumePath = "../../resume/JuanPablo-GonzalezBendana-Resume.pdf";

function openResume() {
  const modal = document.getElementById("resumeModal");
  const iframe = document.getElementById("resumePDF");
  const download = document.getElementById("resumeDownload");
  const openNew = document.getElementById("resumeOpenNew");

  iframe.src = resumePath;
  download.href = resumePath;
  openNew.href = resumePath;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeResume() {
  const modal = document.getElementById("resumeModal");
  const iframe = document.getElementById("resumePDF");

  modal.classList.add("hidden");
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
  if (modal.classList.contains("hidden")) return;

  const box = modal.querySelector(".relative");
  if (box && !box.contains(e.target)) closeResume();
});
