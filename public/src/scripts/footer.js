document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    const checkFooterVisibility = () => {
        // Calculate when to show the footer
        const scrollPosition = window.pageYOffset;
        const windowSize = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;

        if (scrollPosition + windowSize >= bodyHeight - 50) {
            footer.style.display = 'flex'; // Show the footer at the end of the page
        } else {
            footer.style.display = 'none'; // Otherwise, keep it hidden
        }
    };

    // Check on page load and on scroll
    checkFooterVisibility();
    window.addEventListener('scroll', checkFooterVisibility);
});
