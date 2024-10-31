// JavaScript to toggle the display of the navigation links and change menu icon to "X"
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Toggle the active class for the navigation links and menu icon
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-links li a');

// Add a click event listener to each link to highlight the active one
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links li a');
    const currentFile = location.href.substring(location.href.lastIndexOf('/') + 1);

    navLinks.forEach(link => {
        const linkFile = link.href.substring(link.href.lastIndexOf('/') + 1);
        if (linkFile === currentFile) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});




