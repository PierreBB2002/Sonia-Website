document.addEventListener("DOMContentLoaded", function () {
    const animatedTextElements = document.querySelectorAll('.animated-text');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    }, observerOptions);

    animatedTextElements.forEach(element => {
        observer.observe(element);
    });

    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();
    
    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Loop through each link and add 'active' class if the link matches the current page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
