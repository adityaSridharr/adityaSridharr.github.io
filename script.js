document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('a[href^="project"]');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const href = link.getAttribute('href');
            // Manually navigate to the page (using window.location for simplicity)
            window.location.href = href;
        });
    });
});
