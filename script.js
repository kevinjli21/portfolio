function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/li-kevin-j/", "_blank");
}

function openGitHub() {
    window.open("https://github.com/kevinjli21", "_blank");
}