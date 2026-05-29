/* Open the resume modal and set iframe + download link */
function openResumeModal(event, resumePath) {
  if (event) event.preventDefault();
  const modal = document.getElementById('resumeModal');
  const iframe = document.getElementById('resumeIframe');
  const downloadLink = document.getElementById('resumeDownloadLink');
  const openNew = document.getElementById('resumeOpenNew');

  iframe.src = resumePath;
  downloadLink.href = resumePath;
  openNew.href = resumePath;

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const closeBtn = modal.querySelector('button[aria-label="Close resume"]');
  if (closeBtn) closeBtn.focus();
}

function closeResumeModal() {
  const modal = document.getElementById('resumeModal');
  const iframe = document.getElementById('resumeIframe');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  iframe.src = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('resumeModal');
  if (!modal || modal.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeResumeModal();
});

document.addEventListener('click', (e) => {
  const modal = document.getElementById('resumeModal');
  if (!modal || modal.classList.contains('hidden')) return;
  const container = modal.querySelector('.relative');
  if (container && !container.contains(e.target)) {
    closeResumeModal();
  }
});
