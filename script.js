function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/li-kevin-j/", "_blank");
}

function openLeetCode() {
    window.open("https://leetcode.com/u/kevinjli1123/", "_blank");
}

function openGitHub() {
    window.open("https://github.com/kevinjli21", "_blank");
}

// Check if the user has visited before
if (!localStorage.getItem('visited')) {
    // Show the popup
    document.getElementById('popup').style.display = 'flex';

    // Set 'visited' in localStorage so the popup doesn't show again
    localStorage.setItem('visited', 'true');
}

// Close the popup when the close button is clicked
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Close the popup when the "Got it!" button is clicked
document.getElementById('popup-button').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    // Clear the visited flag every time the page is loaded
    localStorage.removeItem('visited');
 });