document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu visibility
    toggleButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!toggleButton.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});

    // Dark Mode Toggle
    const lightModeIcon = document.getElementById('light-mode');
    const darkModeIcon = document.getElementById('dark-mode');
    const body = document.body;

    // Enable Dark Mode
    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
    };

    // Disable Dark Mode
    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
    };

    // Check local storage to keep the previous mode
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Add event listeners for theme toggle
    lightModeIcon.addEventListener('click', disableDarkMode);
    darkModeIcon.addEventListener('click', enableDarkMode);

    // Handle Responsive Design Adjustments
    function handleResponsive() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            document.querySelector('.minimal-header').style.padding = "15px 5%";
            document.querySelector('.project-container').style.flexDirection = "column";
        } else {
            document.querySelector('.minimal-header').style.padding = "25px 5%";
            document.querySelector('.project-container').style.flexDirection = "row";
        }
    }

    window.addEventListener('resize', handleResponsive);
    handleResponsive(); // Run once when the page loads
