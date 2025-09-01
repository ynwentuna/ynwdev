document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar-link');
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = event.target.getAttribute('href');
            loadSection(targetSection);
        });
    });

    function loadSection(section) {
        const contentArea = document.getElementById('content');
        fetch(`./components${section}`)
            .then(response => response.text())
            .then(data => {
                contentArea.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading section:', error);
            });
    }
});