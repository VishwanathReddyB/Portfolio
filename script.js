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
