document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                if (entry.target.id === 'skillsPieChart' && !entry.target.classList.contains('initialized')) {
                    setTimeout(() => {
                        initPieChart(entry.target);
                        entry.target.classList.add('initialized');
                    }, 200);
                }

                if (entry.target.classList.contains('bar-fill')) {
                    const skillLevel = entry.target.getAttribute('data-skill-level');
                    setTimeout(() => {
                        entry.target.style.height = `${skillLevel}%`;
                    }, 10); // Reduced delay for quicker animation start
                }
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { 
        threshold: 0.4,  // Multiple thresholds to trigger animations more smoothly
        rootMargin: "-10% 0px 0px 0px"  // Adjust this value if needed to control the area around the viewport
    });

    function initPieChart(ctx) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Coder', 'Designer'],
                datasets: [{
                    data: [35, 65],
                    backgroundColor: ['#535353', '#A3A3A4']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#333',
                            font: {
                                size: 14
                            }
                        }
                    }
                }
            }
        });
    }

    document.querySelectorAll('.animate-on-scroll, #skillsPieChart, .bar-fill, .about-images img, .random-facts .fact-image img, .my-story .story-image').forEach(el => {
        observer.observe(el);
    });

    const backToTop = document.getElementById('back-to-top');
    document.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
});
