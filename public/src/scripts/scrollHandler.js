// Function to handle the visibility of the back-to-top button (footer logic removed)
function handleScroll() {
    const backToTopButton = document.getElementById('back-to-top');
    const heroSectionHeight = document.querySelector('.hero').offsetHeight;

    // Show the back-to-top button only if scrolled past the hero section
    if (window.scrollY > heroSectionHeight) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

// Add scroll event listener for back-to-top button
window.addEventListener('scroll', handleScroll);
// Initial check in case page is reloaded at a scrolled position
handleScroll();


// Show the footer when the user scrolls to the end of the page
function handleFooterVisibility() {
    const footer = document.querySelector('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}

window.addEventListener('scroll', handleFooterVisibility);
// handleFooterVisibility();
