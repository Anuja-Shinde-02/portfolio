document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            loadProjectDetails(projectId);
        });
    });
});

function loadProjectDetails(projectId) {
    const projectDetailContainer = document.getElementById('project-detail');
    // Example AJAX request to fetch project data
    fetch(`/project-details/${projectId}.html`)  // Assuming project details are stored in separate HTML files
        .then(response => response.text())
        .then(html => {
            projectDetailContainer.innerHTML = html;
            projectDetailContainer.style.display = 'block';
            window.scrollTo(0, 0);  // Scroll to the top of the page to view details
        })
        .catch(error => console.error('Error loading the project details:', error));
}
