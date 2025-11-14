// Functions for Achievement Popups
function openPopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.style.display = "flex";
  }
}

function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.style.display = "none";
  }
}

// Functions for Certification Popups
function openCertPopup(id) {
  const popup = document.getElementById(id + '-popup');
  if (popup) {
    popup.style.display = "flex";
  }
}

function closeCertPopup(id) {
  const popup = document.getElementById(id + '-popup');
  if (popup) {
    popup.style.display = "none";
  }
}

// Close popup when clicking outside the content
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = "none";
  }
  if (event.target.classList.contains('cert-popup')) {
    event.target.style.display = "none";
  }
});

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Close all achievement popups
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
      popup.style.display = "none";
    });
    
    // Close all certification popups
    const certPopups = document.querySelectorAll('.cert-popup');
    certPopups.forEach(popup => {
      popup.style.display = "none";
    });
  }
});
