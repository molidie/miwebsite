document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = 'images/moon.png';
            themeIcon.alt = 'Switch to Light Mode';
        } else {
            themeIcon.src = 'images/sun.png';
            themeIcon.alt = 'Switch to Dark Mode';
        }
    });
});
