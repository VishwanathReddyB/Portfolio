const lightModeIcon = document.getElementById('light-mode');
const darkModeIcon = document.getElementById('dark-mode');
const body = document.body;

// Enable Dark Mode
const enableDarkMode = () => {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    lightModeIcon.style.display = 'block';
    darkModeIcon.style.display = 'none';
}

// Disable Dark Mode
const disableDarkMode = () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    lightModeIcon.style.display = 'none';
    darkModeIcon.style.display = 'block';
}

// Check the local storage to keep the previous mode
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Event Listeners for the Icons
lightModeIcon.addEventListener('click', disableDarkMode);
darkModeIcon.addEventListener('click', enableDarkMode);

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
handleResponsive(); // To run once when page loads
