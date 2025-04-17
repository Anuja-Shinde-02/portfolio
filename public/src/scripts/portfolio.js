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

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .hero-overlay, .portfolio-intro, .portfolio-card'
    );

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    animatedElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .hero-overlay, .portfolio-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));
});
