// Load navbar component into the page
document.addEventListener('DOMContentLoaded', function() {
  fetch('components/navbar.html')
    .then(response => response.text())
    .then(html => {
      const navbarContainer = document.getElementById('navbar-container');
      if (navbarContainer) {
        navbarContainer.innerHTML = html;
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
});
